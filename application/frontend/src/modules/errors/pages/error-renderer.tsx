import { useNavigate, useRouteError } from 'react-router-dom';
import NotFoundError from '#/modules/errors/components/not-found-error';
import UnknownError from '#/modules/errors/components/unknown-error';

function hasStatus(error: unknown): error is { status: unknown } {
  if (typeof error !== 'object') {
    return false;
  }

  if (error === null) {
    return false;
  }

  if (!Object.prototype.hasOwnProperty.call(error, 'status')) {
    return false;
  }

  return true;
}

function getStatus(error: unknown): number | null {
  if (!hasStatus(error)) {
    return null;
  }

  if (typeof error.status !== 'number') {
    return null;
  }

  return error.status;
}

export default function ErrorRenderer() {
  const navigate = useNavigate();
  const handleGoToHome = () => navigate('/');

  const error = useRouteError();
  const status = getStatus(error);

  console.error(error, status);

  if (status === 404) {
    return <NotFoundError handleGoToHome={handleGoToHome} />;
  }

  return <UnknownError handleGoToHome={handleGoToHome} />;
}
