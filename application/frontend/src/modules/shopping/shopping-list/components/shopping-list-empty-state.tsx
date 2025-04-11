import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';

export default function ShoppingListEmptyState() {
  return (
    <div
      className={`
        mt-72
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
      <p
        className={`
          text-center
          font-title
          text-xl

          tablet:text-2xl
        `}
      >
        Vous pouvez créer une liste de courses vide
        <br />
        ou en générer une depuis votre{' '}
        <Link
          className={`
            font-title
            underline
          `}
          to="/app/meals"
        >
          planning de repas
        </Link>
      </p>
    </div>
  );
}
