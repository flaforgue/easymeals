import IconCookbook from '#/components/icons/icon-cookbook';
import { Player } from '@lottiefiles/react-lottie-player';

export default function RecipeEmptyState() {
  return (
    <div
      className={`
        flex
        flex-col
        items-center
        justify-center
      `}
    >
      <div
        className={`
          fixed
          bottom-4
          right-4
          w-48
          text-green-500

          tablet:-bottom-12
          tablet:right-8
        `}
      >
        <div className="-rotate-90">
          <Player
            src="/lotties/curved-arrow.json"
            autoplay={true}
            loop={true}
            speed={0.5}
          />
        </div>
      </div>
      <div
        className={`
          mx-auto
          my-6
          w-1/2
          text-green-500
        `}
      >
        <IconCookbook />
      </div>
      <p
        className={`
          text-center
          font-title
          text-2xl

          tablet:text-3xl
        `}
      >
        Aucune recette n&apos;a été trouvée,
        <br />
        c&apos;est l&apos;occasion d&apos;en ajouter une !
      </p>
    </div>
  );
}
