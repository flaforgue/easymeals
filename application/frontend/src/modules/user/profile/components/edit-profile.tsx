import DefaultLinkButton from '#/components/buttons/link-buttons/default-link-button';
import SubmitButton from '#/components/buttons/simple-buttons/submit-button';
import TextInput from '#/components/inputs/text-input';
import { useUpdateProfileMutation } from '#/modules/user/profile/mutations';
import { useProfile } from '#/modules/user/profile/queries';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function EditProfile() {
  const { user } = useAuth0();
  const profile = useProfile();
  const [name, setName] = useState('');
  useEffect(() => setName(profile?.name ?? ''), [profile]);

  const updateProfileMutation = useUpdateProfileMutation();
  const updateProfile = () => {
    updateProfileMutation.mutate(
      {
        name: name,
      },
      {
        onSuccess: () => {
          toast.success('Compte mis à jour', { id: 'global' });
        },
      },
    );
  };

  return (
    <>
      <div
        className={`
          flex
          flex-col
          items-center
        `}
      >
        <img
          src={user?.picture}
          className={`
            mb-8
            rounded-full
            shadow
          `}
          width="50"
          height="50"
        />
        <div
          className={`
            w-full
            overflow-scroll
          `}
        >
          <TextInput
            value={name}
            onChange={setName}
            label="Nom d'utilisateur"
            className="w-full"
          />
        </div>
        <div
          className={`
            mt-2
            w-full
            pb-1
            text-right
          `}
        >
          <SubmitButton onClick={updateProfile}>Enregistrer</SubmitButton>
        </div>
      </div>
      <div>
        <div className="pb-2">
          <div className="mt-8">
            <p
              className={`
                mb-2
                text-sm
                font-medium
                text-slate-700
              `}
            >
              Email
            </p>
            <div
              className={`
                overflow-scroll
                whitespace-nowrap
                rounded
                border
                bg-slate-50
                p-2
                text-sm
                text-slate-500
              `}
            >
              {user?.email}
            </div>
          </div>
          {profile !== undefined && (
            <div className="mt-4">
              <p
                className={`
                  mb-2
                  text-sm
                  font-medium
                  text-slate-700
                `}
              >
                Membre depuis le
              </p>
              <div
                className={`
                  overflow-scroll
                  whitespace-nowrap
                  rounded
                  border
                  bg-slate-50
                  p-2
                  text-sm
                  text-slate-500
                `}
              >
                <>{new Date(profile.createdAt).toLocaleDateString()}</>
              </div>
              <div
                className={`
                  mt-4
                  text-right
                `}
              >
                <DefaultLinkButton
                  to="/app/logout"
                  icon="user"
                >
                  Me déconnecter
                </DefaultLinkButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
