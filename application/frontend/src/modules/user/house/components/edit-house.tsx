import SubmitButton from '#/components/buttons/simple-buttons/submit-button';
import IconCopy from '#/components/icons/icon-copy';
import NumberInput from '#/components/inputs/number-input';
import TextInput from '#/components/inputs/text-input';
import MainContentLoadingOverlay from '#/components/overlays/maint-content-loading-overlay';
import { useUpdateUserHouseMutation } from '#/modules/user/house/mutations';
import { useUserHouse } from '#/modules/user/house/queries';
import { logError } from '#/utils/error';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function EditHouse() {
  const house = useUserHouse();
  const [name, setName] = useState('');
  const [defaultNbPortions, setDefaultNbPortions] = useState(0);
  useEffect(() => {
    if (house !== undefined) {
      setName(house.name);
      setDefaultNbPortions(house.defaultNbPortions);
    }
  }, [house]);

  const updateUserHouseMutation = useUpdateUserHouseMutation();
  const updateHouse = () => {
    updateUserHouseMutation.mutate({
      name: name,
      defaultNbPortions: defaultNbPortions,
    });
  };

  if (house === undefined) {
    return <MainContentLoadingOverlay />;
  }

  const joinHouseUrl = `${window.origin}/app/join/${house.joinKey}`;
  const copyJoinLink = () => {
    navigator.clipboard
      .writeText(joinHouseUrl)
      .then(() => toast.success('Lien copié', { id: 'global' }))
      .catch(logError);
  };

  return (
    <div>
      <div
        className={`
          mb-4
          rounded
          bg-slate-100
          p-4
        `}
      >
        <div
          className={`
            mb-2
            flex
            flex-wrap
            justify-between
            gap-6
          `}
        >
          <TextInput
            value={name}
            onChange={setName}
            label="Nom de la maison"
            className="w-80"
          />
          <div
            className={`
              flex
              flex-col
              items-start

              laptop:items-end
            `}
          >
            <label
              className={`
                mb-2
                text-sm
                font-medium
                text-slate-700
              `}
            >
              Portions par défaut
            </label>
            <NumberInput
              value={defaultNbPortions}
              min={1}
              onChange={setDefaultNbPortions}
            />
          </div>
        </div>
        <div
          className={`
            pb-1
            text-right
          `}
        >
          <SubmitButton onClick={updateHouse}>Enregistrer</SubmitButton>
        </div>
      </div>
      <div
        className={`
          rounded
          bg-slate-100
          p-4
        `}
      >
        <p
          className={`
            mb-2
            text-slate-700
          `}
        >
          Lien d&apos;invitation dans la maison
        </p>
        <p
          className={`
            mb-2
            text-sm
            text-slate-500
          `}
        >
          Pour utiliser ce lien la personne doit d&apos;abord s&apos;inscrire
        </p>
        <div
          className={`
            flex
            items-center
          `}
        >
          <div
            className={`
              flex-1
              overflow-scroll
              whitespace-nowrap
              rounded-s
              border
              bg-slate-50
              p-2
              text-sm
            `}
          >
            {joinHouseUrl}
          </div>
          <button
            data-tooltip-id="global"
            data-tooltip-content="Copier"
            onClick={copyJoinLink}
            className={`
              flex
              items-center
              rounded-e
              border-y
              border-e
              bg-slate-200
              p-2
              px-4
              text-sm

              hover:bg-slate-300

              active:bg-slate-400
            `}
          >
            <div
              className={`
                h-5
                w-5
              `}
            >
              <IconCopy />
            </div>
          </button>
        </div>
        <div className="mt-8">
          <p
            className={`
              mb-2
              text-slate-700
            `}
          >
            Membres actuels
          </p>
          {house.users.map((u) => (
            <p
              key={u.id}
              className={`
                border-t
                border-slate-200
                py-2
                text-sm
                text-slate-500
                transition-all

                hover:bg-slate-100
              `}
            >
              {u.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
