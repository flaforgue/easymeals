import { logError } from '#/utils/error';
import { useAuth0 } from '@auth0/auth0-react';

export default function Logout() {
  const { logout } = useAuth0();

  logout().catch(logError);

  return null;
}
