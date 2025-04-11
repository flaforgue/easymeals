import { getAccessToken } from '#/api/access-token-provider';
import { adaptClientResponse } from '#/api/clients/adapt-client-response';

const backendBaseUrl = import.meta.env.VITE_BACKEND_BASE_URL as string;

async function apiFetch(
  method: 'GET' | 'POST',
  path: string,
  body: string | undefined = undefined,
  headers: Record<string, string> = {},
) {
  const accessToken = await getAccessToken();
  const fetchOptions = {
    method: method,
    headers: {
      ...headers,
      ...{ Authorization: `Bearer ${accessToken}` },
    },
    ...(body !== undefined && { body: body }),
  };

  return fetch(`${backendBaseUrl}/private${path}`, fetchOptions).then(adaptClientResponse);
}

export function fetchPrivateQuery(path: string, query?: unknown) {
  const queryString = query !== undefined ? `?${new URLSearchParams(query as Record<string, string>).toString()}` : '';

  return apiFetch('GET', `${path}${queryString}`);
}

export function fetchPrivateCommand(path: string, command: unknown) {
  return apiFetch('POST', path, JSON.stringify(command), {
    'Content-Type': 'application/json',
  });
}
