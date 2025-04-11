import IconCaretDown from '#/components/icons/icon-caret-down';

type AccordionColor = 'sky' | 'orange' | 'green';

interface AccordionColors {
  textDark: string;
  textContrast: string;
  bgContrast: string;
  bgDark: string;
}
const ACCORDION_COLORS: Record<AccordionColor, AccordionColors> = {
  sky: {
    textDark: 'text-sky-700',
    textContrast: 'text-white',
    bgContrast: 'bg-white',
    bgDark: 'bg-sky-700',
  },
  orange: {
    textDark: 'text-orange-500',
    textContrast: 'text-white',
    bgContrast: 'bg-white',
    bgDark: 'bg-orange-500',
  },
  green: {
    textDark: 'text-green-500',
    textContrast: 'text-white',
    bgContrast: 'bg-white',
    bgDark: 'bg-green-500',
  },
};

export interface AccordionItemData {
  id: string;
  headerFactory: (isOpen: boolean) => React.ReactNode;
  children: React.ReactNode;
  color?: AccordionColor;
}

interface AccordionItemProps extends AccordionItemData {
  children: React.ReactNode;
  isOpen: boolean;
  onHeaderClick: (id: string) => void;
}

export default function AccordionItem({
  headerFactory,
  children,
  isOpen,
  id,
  onHeaderClick,
  color = 'sky',
}: AccordionItemProps) {
  const handleHeaderClick = (e: React.MouseEvent<HTMLDetailsElement, MouseEvent>) => {
    e.preventDefault();
    onHeaderClick(id);
  };

  const colors = ACCORDION_COLORS[color];

  return (
    <div
      className={`
        overflow-hidden
        border-b

        first:rounded-t

        last:border-0
      `}
    >
      <details
        open={isOpen}
        onClick={handleHeaderClick}
        className={`
          group
          peer
          cursor-pointer

          ${isOpen ? colors.textContrast : ''}
        `}
      >
        <summary
          className={`
            flex
            items-center
            transition-all

            tablet:text-lg

            ${
              isOpen
                ? `
                  ${colors.textContrast}
                  ${colors.bgDark}
                `
                : `
                  ${colors.textDark}
                  ${colors.bgContrast}

                  rounded

                  hover:bg-slate-50
                `
            }
          `}
        >
          <div
            className={`
              ml-4
              h-2
              transition-all

              ${
                isOpen
                  ? `
                    ${colors.textContrast}

                    rotate-180
                  `
                  : ''
              }
            `}
          >
            <IconCaretDown />
          </div>
          {headerFactory(isOpen)}
        </summary>
      </details>
      <div
        className={`
          grid
          grid-rows-[0fr]
          rounded
          bg-slate-100
          transition-all
          duration-300

          peer-open:grid-rows-[1fr]
          peer-open:border-t
        `}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
