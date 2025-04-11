import CreateButton from '#/components/buttons/simple-buttons/create-button';
import IconInvite from '#/components/icons/icon-invite';
import MainContentLoadingOverlay from '#/components/overlays/maint-content-loading-overlay';
import { useJoinHouseMutation } from '#/modules/user/house/mutations';
import { useHouseByJoinKey } from '#/modules/user/house/queries';
import { Player } from '@lottiefiles/react-lottie-player';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function JoinHouse() {
  const houseJoinKey = useParams().houseJoinKey!;
  const house = useHouseByJoinKey(houseJoinKey);
  const joinHouseMutation = useJoinHouseMutation();
  const [hasJoined, setHasJoined] = useState(false);
  const join = () => {
    joinHouseMutation.mutate(
      {
        joinKey: houseJoinKey,
      },
      {
        onSuccess: () => {
          setHasJoined(true);
        },
      },
    );
  };

  if (house === undefined) {
    return <MainContentLoadingOverlay />;
  }

  if (!hasJoined) {
    return (
      <div
        className={`
          mt-16

          tablet:mt-0
        `}
      >
        <div
          className={`
            mx-auto
            w-1/2
            text-sky-600
          `}
        >
          <IconInvite />
        </div>
        <div
          className={`
            m-auto
            mt-4
            max-w-xl
            text-center
          `}
        >
          <p className="text-lg">
            Vous êtes invité à rejoindre&nbsp;:&nbsp;
            <span
              className={`
                font-semibold
                text-sky-700
              `}
            >
              {house.name}
            </span>
          </p>
          <p
            className={`
              my-4
              rounded
              bg-slate-100
              p-4
              text-slate-500
            `}
          >
            ℹ️ Si vous faites déjà partie d&apos;une maison Easymeals, vous ne pourrez plus accéder à ses informations
            après cela.
          </p>
          <CreateButton onClick={join}>Rejoindre</CreateButton>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`
        mt-20

        tablet:mt-0
      `}
    >
      <div
        className={`
          mx-auto
          w-2/5
        `}
      >
        <Player
          autoplay={true}
          keepLastFrame={true}
          src="/lotties/house.json"
        />
      </div>
      <div
        className={`
          m-auto
          max-w-xl
          text-center
        `}
      >
        <p className="text-lg">Vous avez rejoint votre nouvelle maison Easymeals</p>
        <p
          className={`
            my-4
            rounded
            bg-slate-100
            p-4
            text-slate-500
          `}
        >
          ✅ Vous pouvez désormais consulter son&nbsp;
          <Link
            className="underline"
            to="/app/recipes"
          >
            livre de recettes
          </Link>
          {', '}
          {"participer à l'élaboration des "}
          <Link
            className="underline"
            to="/app/meals"
          >
            {'menus '}
          </Link>
          {'et aux '}
          <Link
            className="underline"
            to="/app/shopping-lists"
          >
            courses
          </Link>
        </p>
      </div>
    </div>
  );
}
