import Card from '#/components/cards/card';
import SubmitButton from '#/components/buttons/simple-buttons/submit-button';

interface UnknownErrorProps {
  handleGoToHome: () => void;
}
export default function UnknownError({ handleGoToHome }: UnknownErrorProps) {
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
          text-center
        `}
      >
        <Card>
          <div className="py-12">
            <h1
              className={`
                mb-4
                text-4xl
                font-bold
              `}
            >
              💣
            </h1>
            <p
              className={`
                mb-4
                text-slate-600
              `}
            >
              Oh là ! Une erreur inconnue s&apos;est produite.
            </p>
            <SubmitButton onClick={handleGoToHome}>Retour à l&apos;accueil</SubmitButton>
          </div>
        </Card>
      </div>
    </div>
  );
}
