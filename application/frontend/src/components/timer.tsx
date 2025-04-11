import AnimatedIcon from '#/components/animated-icon';
import DefaultButton from '#/components/buttons/simple-buttons/default-button';
import IconClock from '#/components/icons/icon-clock';
import IconCross from '#/components/icons/icon-cross';
import IconPause from '#/components/icons/icon-pause';
import IconPlay from '#/components/icons/icon-play';
import IconRefresh from '#/components/icons/icon-refresh';
import LocalOverlay from '#/components/overlays/local-overlay';
import ProgressCircle from '#/components/progress/progress-circle';
import { logError } from '#/utils/error';
import { addSecondsLeadingZero } from '#/utils/time';
import { useEffect, useId, useRef, useState } from 'react';
import toast from 'react-hot-toast';

interface TimerProps {
  nbSecondsToComplete: number;
  completeMessage: string;
}

function formatTimerTime(totalTimeInSeconds: number, timerElapsedSeconds: number) {
  const totalTimeInMinutes = Math.floor(totalTimeInSeconds / 60);
  const totalTimeRemainingSeconds = totalTimeInSeconds % 60;
  if (timerElapsedSeconds === 0) {
    return `${totalTimeInMinutes}:${addSecondsLeadingZero(totalTimeRemainingSeconds)}`;
  }

  const timerElapsedRemainingSeconds = timerElapsedSeconds % 60;
  const nbSeconds =
    totalTimeRemainingSeconds >= timerElapsedRemainingSeconds
      ? totalTimeRemainingSeconds - timerElapsedRemainingSeconds
      : totalTimeRemainingSeconds - timerElapsedRemainingSeconds + 60;

  const nbMinutes =
    totalTimeRemainingSeconds >= timerElapsedRemainingSeconds
      ? totalTimeInMinutes - Math.floor(timerElapsedSeconds / 60)
      : totalTimeInMinutes - Math.floor(timerElapsedSeconds / 60) - 1;

  return `${nbMinutes}:${addSecondsLeadingZero(nbSeconds)}`;
}

export default function Timer({ nbSecondsToComplete, completeMessage }: TimerProps) {
  const id = useId();
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);
  const nbMillisecondsToComplete = nbSecondsToComplete * 1000;
  const [currentTimerStartedAt, setCurrentTimerStartedAt] = useState<Date | null>(null);
  const [currentTimerElapsedMilliseconds, setCurrentTimerElapsedMilliseconds] = useState<number>(0);
  const [previouslyElapsedMilliseconds, setPreviouslyElapsedMilliseconds] = useState(0);
  const totalElapsedMilliseconds = previouslyElapsedMilliseconds + currentTimerElapsedMilliseconds;
  const isComplete = totalElapsedMilliseconds >= nbMillisecondsToComplete;

  const percents = (100 * totalElapsedMilliseconds) / nbMillisecondsToComplete;
  const isTimerStopped = currentTimerStartedAt === null;

  const handleClick = () => {
    if (isComplete) {
      return;
    }

    if (currentTimerStartedAt === null) {
      setCurrentTimerStartedAt(new Date());
    } else {
      setCurrentTimerStartedAt(null);
      setCurrentTimerElapsedMilliseconds(0);
      setPreviouslyElapsedMilliseconds(totalElapsedMilliseconds);
    }
  };

  const reset = () => {
    setCurrentTimerStartedAt(null);
    setCurrentTimerElapsedMilliseconds(0);
    setPreviouslyElapsedMilliseconds(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentTimerStartedAt === null) {
        return;
      }

      if (isComplete) {
        return;
      }

      setCurrentTimerElapsedMilliseconds(Math.round(new Date().getTime() - currentTimerStartedAt.getTime()));
    }, 100);

    return () => clearInterval(interval);
  });

  useEffect(() => {
    if (!isComplete) {
      return;
    }

    if (audioPlayerRef.current !== null) {
      audioPlayerRef.current.play().catch(logError);
    }

    toast.success(
      <div
        className={`
          flex
          items-center
          gap-2
        `}
      >
        {completeMessage}
        <div
          onClick={() => toast.dismiss(id)}
          className={`
            -mr-2
            w-8
            cursor-pointer
            text-slate-400
            transition-all

            hover:text-slate-500
          `}
        >
          <IconCross />
        </div>
      </div>,
      {
        id: id,
        duration: Infinity,
        icon: (
          <div className="w-8 text-sky-500">
            <IconClock />
          </div>
        ),
        iconTheme: {
          primary: '#0ea5e9',
          secondary: '#fff',
        },
        style: {
          borderColor: '#7dd3fc',
          maxWidth: 'max-content',
        },
      },
    );
  }, [completeMessage, id, isComplete]);

  return (
    <div
      className={`
        flex
        flex-col
        items-center
        justify-center
        gap-2
      `}
    >
      <audio
        ref={audioPlayerRef}
        src="/sounds/timer-ping.mp3"
      />

      <div
        className={`
          relative
          mx-auto
          flex
          h-20
          w-20
          flex-col
          items-center
          justify-center
          overflow-hidden
          rounded-full
          bg-white
        `}
      >
        <div
          className={`
            ${isTimerStopped ? 'text-slate-300' : 'text-green-500'}

            absolute
            top-0
            mx-auto
            h-20
            w-20
          `}
        >
          <ProgressCircle percents={percents} />
        </div>

        <span
          className={`
            w-full
            text-center
            font-title
          `}
        >
          {!isComplete && formatTimerTime(nbSecondsToComplete, Math.floor(totalElapsedMilliseconds / 1000))}
          {isComplete && (
            <div
              className={`
                bg-green-500
                p-1
                text-white
              `}
            >
              <AnimatedIcon
                isPlaying={true}
                icon="check"
              />
            </div>
          )}
        </span>

        {!isComplete && (
          <LocalOverlay
            onClick={handleClick}
            className="rounded-full"
            tooltipText={isTimerStopped ? 'Démarrer le minuteur' : 'Mettre en pause'}
          >
            <div
              className={`
                h-12
                rounded
                text-white
              `}
            >
              {isTimerStopped && <IconPlay />}
              {!isTimerStopped && <IconPause />}
            </div>
          </LocalOverlay>
        )}
      </div>

      <DefaultButton
        onClick={reset}
        className={`
          mx-auto
          block
          h-10
          w-12
        `}
        size="small"
        tooltipText="Réinitialiser le minuteur"
        isDisabled={totalElapsedMilliseconds <= 0}
      >
        <IconRefresh />
      </DefaultButton>
    </div>
  );
}
