import Card from '#/components/cards/card';
import { Player } from '@lottiefiles/react-lottie-player';
import SubmitButton from '#/components/buttons/simple-buttons/submit-button';
import { useRouteError } from 'react-router-dom';

interface NotFoundErrorProps {
  handleGoToHome: () => void;
}
export default function NotFoundError({ handleGoToHome }: NotFoundErrorProps) {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      className={`
        h-screen
        w-screen
        bg-slate-100
        pt-16
      `}
    >
      <div
        className={`
          m-auto
          w-96
          max-w-lg
        `}
      >
        <Card>
          <div className="p-10">
            <div className="w-full">
              <Player
                src="/lotties/not-found.json"
                autoplay={true}
                keepLastFrame={true}
                speed={1.5}
              />
            </div>
            <div
              className={`
                flex
                justify-center
              `}
            >
              <SubmitButton onClick={handleGoToHome}>Retour à l&apos;accueil</SubmitButton>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
