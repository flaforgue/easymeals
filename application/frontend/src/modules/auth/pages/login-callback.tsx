import { Navigate } from 'react-router-dom';

export default function LoginCallback() {
  return <Navigate to="/app/meals" />;
}
