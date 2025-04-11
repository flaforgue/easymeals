import IconCheck from '#/components/icons/icon-check';

type ProgressBarSize = 'small' | 'medium' | 'large';

const sizeStyles: Record<ProgressBarSize, string> = {
  small: 'p-1 text-xs min-w-6',
  medium: 'p-1 min-w-10',
  large: 'p-2 text-lg min-w-10',
};

interface ProgressBarProps {
  percents: number;
  size?: ProgressBarSize;
}

export default function ProgressBar({ percents, size = 'medium' }: ProgressBarProps) {
  const sizeStyle = sizeStyles[size];

  return (
    <div
      className={`
        h-fit
        w-full
        rounded-lg
        bg-slate-200
        shadow
      `}
    >
      <div
        className={`
          h-full
          rounded-lg
          bg-green-500
          text-center
          font-title
          leading-none
          text-blue-100
          transition-all
          ease-in

          ${sizeStyle}
        `}
        style={{
          width: `${percents}%`,
        }}
      >
        {percents < 100 ? (
          `${percents}%`
        ) : (
          <div
            className={`
              h-3
              text-white
            `}
          >
            <IconCheck />
          </div>
        )}
      </div>
    </div>
  );
}
