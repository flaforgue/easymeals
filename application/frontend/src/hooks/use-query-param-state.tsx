import { useSearchParams } from 'react-router-dom';

export function useQueryParamState(queryStringKey: string, initialValue = ''): [string, (v: string) => void] {
  const [searchParams, setSearchParams] = useSearchParams({ [queryStringKey]: initialValue });
  const value = searchParams.get(queryStringKey) ?? initialValue;
  const setValue = (value: string) => {
    setSearchParams(
      {
        ...searchParams,
        [queryStringKey]: value,
      },
      {
        replace: true,
        preventScrollReset: true,
      },
    );
  };

  return [value, setValue];
}
