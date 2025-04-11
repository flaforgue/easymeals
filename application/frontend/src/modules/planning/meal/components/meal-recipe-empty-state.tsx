import IconCookbook from '#/components/icons/icon-cookbook';

export default function MealRecipeEmptyState() {
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
          mx-auto
          my-6
          w-2/5
          text-green-500
        `}
      >
        <IconCookbook />
      </div>
      <p
        className={`
          mt-4
          text-center
          font-title
          text-2xl

          tablet:text-3xl
        `}
      >
        Il n&apos;y a pas d&apos;élément à afficher
      </p>
    </div>
  );
}
