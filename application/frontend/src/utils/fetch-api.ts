'use server';

import { headers } from 'next/headers';

function handleError(url: string, status: number, statusText: string) {
  throw new Error(
    `Failed to fetch ${url} got ${status} (${statusText})`,
  );
}

export default async function fetchApi<T>(method: string, url: string): Promise<T> {
  const init = {
    headers: headers(),
    method: method,
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}${url}`, init);

  if (!res.ok) {
    handleError(url, res.status, res.statusText);
  }

  if (res.status === 204) {
    return Promise.resolve() as Promise<T>;
  }

  return res.json() as Promise<T>;
}