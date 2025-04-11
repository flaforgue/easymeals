interface ShoppingListItemCategoryProps {
  illustrationUrl: string;
  nbItems: number;
  tooltipText?: string;
}
export default function ShoppingListItemCategory({
  illustrationUrl,
  nbItems,
  tooltipText,
}: ShoppingListItemCategoryProps) {
  return (
    <div
      className={`
        flex
        items-center
        gap-1
      `}
    >
      <img
        width="35"
        src={illustrationUrl}
        className={`
          overflow-visible
          rounded-full
          bg-white
          p-1.5
          shadow
        `}
        data-tooltip-id="global"
        data-tooltip-content={tooltipText}
      />
      {nbItems > 0 && (
        <span
          className={`
            text-sm
            text-slate-500
          `}
        >
          {`x${nbItems}`}
        </span>
      )}
    </div>
  );
}
