import { adaptClientResponse } from '#/api/clients/adapt-client-response';

const backendBaseUrl = import.meta.env.VITE_BACKEND_BASE_URL as string;

function apiFetch(
  method: 'GET' | 'POST',
  path: string,
  body: string | undefined = undefined,
  headers: Record<string, string> = {},
) {
  const fetchOptions = {
    method: method,
    headers: {
      ...headers,
    },
    ...(body !== undefined && { body: body }),
  };

  return fetch(`${backendBaseUrl}/public${path}`, fetchOptions).then(adaptClientResponse);
}

export function fetchPublicQuery(path: string, query?: unknown) {
  const queryString = query !== undefined ? `?${new URLSearchParams(query as Record<string, string>).toString()}` : '';

  return apiFetch('GET', `${path}${queryString}`);
}
