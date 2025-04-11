import IconFoodShop from '#/components/icons/icon-food-shop';
import { Player } from '@lottiefiles/react-lottie-player';

export default function IngredientEmptyState() {
  return (
    <div
      className={`
        flex
        w-full
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
          mb-8
          w-1/2
          text-green-500
        `}
      >
        <IconFoodShop />
      </div>
      <p
        className={`
          text-center
          font-title
          text-2xl

          tablet:text-3xl
        `}
      >
        Ajoutez ici les ingrédients
        <br />
        qu&apos;il vous manque
      </p>
    </div>
  );
}
