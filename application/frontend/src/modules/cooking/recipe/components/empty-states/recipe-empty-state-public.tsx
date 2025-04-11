import EditLinkButton from '#/components/buttons/link-buttons/edit-link-button';
import IconCookbook from '#/components/icons/icon-cookbook';

export default function RecipeEmptyStatePublic() {
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
          text-center
          font-title
          text-xl

          tablet:text-2xl
        `}
      >
        Aucune recette n&apos;a été trouvée,
        <br />
        c&apos;est l&apos;occasion d&apos;en ajouter une !
      </p>
      <EditLinkButton
        to="/login"
        icon="user"
        text="Utiliser Easymeals"
        className={`
          mt-8
          text-lg
        `}
      />
    </div>
  );
}
