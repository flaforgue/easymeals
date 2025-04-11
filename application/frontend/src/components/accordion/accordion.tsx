import AccordionItem, { AccordionItemData } from '#/components/accordion/accordion-item';
import LocalLoadingOverlay from '#/components/overlays/local-loading-overlay';
import { useQueryParamState } from '#/hooks/use-query-param-state';
import { useMemo, useState } from 'react';

interface AccordionProps {
  items: AccordionItemData[];
  queryStringKey?: string;
  isLoading?: boolean;
  initialStateActiveId?: string;
}

export default function Accordion({ queryStringKey, items, isLoading, initialStateActiveId }: AccordionProps) {
  const [stateActiveId, setStateActiveId] = useState(initialStateActiveId);
  const [queryParamActiveId, setQueryParamActiveId] = useQueryParamState(queryStringKey ?? '');

  const activeId = useMemo(
    () => (queryStringKey === undefined ? stateActiveId : queryParamActiveId),
    [queryStringKey, queryParamActiveId, stateActiveId],
  );
  const setActiveId = (id: string) => {
    if (queryStringKey === undefined) {
      setStateActiveId(id);
    } else {
      setQueryParamActiveId(id);
    }
  };
  const handleHeaderClick = (id: string) => {
    if (activeId === id) {
      setActiveId('');
    } else {
      setActiveId(id);
    }
  };

  return (
    <div
      className={`
        relative
        rounded
        border
        bg-white
      `}
    >
      {isLoading === true && <LocalLoadingOverlay />}
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          color={item.color}
          headerFactory={item.headerFactory}
          onHeaderClick={handleHeaderClick}
          isOpen={activeId === item.id}
        >
          {item.children}
        </AccordionItem>
      ))}
    </div>
  );
}
