export default function UnitHelpTable() {
  const unitHelpers = [
    {
      label: 'Cuillère à café',
      volume: 5,
    },
    {
      label: 'Cuillère à soupe',
      volume: 15,
    },
  ];

  return (
    <div className="text-xs">
      <div
        className={`
          flex
          justify-between
          border-b
          border-slate-200
          p-1
          font-bold
        `}
      >
        <div>Unité</div>
        <div>Volume</div>
      </div>
      {unitHelpers.map((unitHelper, index) => {
        return (
          <div
            key={index}
            className={`
              flex
              justify-between
              border-b
              border-slate-200
              p-1
            `}
          >
            <div>{unitHelper.label}</div>
            <div>{unitHelper.volume} ml</div>
          </div>
        );
      })}
    </div>
  );
}
