import EditIconButton from '#/components/buttons/icon-buttons/edit-icon-button';
import IconPlay from '#/components/icons/icon-play';
import LocalOverlay from '#/components/overlays/local-overlay';
import { formatSecondsToTime } from '#/utils/time';
import { useRef, useState } from 'react';

interface VideoPlayerProps {
  src: string;
  poster: string;
}
export default function VideoPlayer({ src, poster }: VideoPlayerProps) {
  const videoRef = useRef<null | HTMLVideoElement>(null);

  const [videoCurrentTime, setVideoCurrentTime] = useState('00:00');
  const updateVideoCurrentTime = () => {
    if (videoRef.current === null) {
      return;
    }

    setVideoCurrentTime(formatSecondsToTime(Math.ceil(videoRef.current.currentTime)));
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const setIsPlayingToTrue = () => setIsPlaying(true);
  const setIsPlayingToFalse = () => setIsPlaying(false);
  const play = () => {
    if (videoRef.current === null) {
      return;
    }

    videoRef.current.play().catch(console.error);
  };
  const pause = () => {
    if (videoRef.current === null) {
      return;
    }

    videoRef.current.pause();
  };
  const playBack = () => {
    if (videoRef.current === null) {
      return;
    }

    videoRef.current.currentTime = 0;
  };
  const requestFullscreen = () => {
    if (videoRef.current === null) {
      return;
    }

    videoRef.current.requestFullscreen().catch(console.error);
  };

  return (
    <div
      className={`
        group
        relative
      `}
    >
      <video
        ref={videoRef}
        preload="auto"
        controls={false}
        onPlay={setIsPlayingToTrue}
        onPlaying={setIsPlayingToTrue}
        onPause={setIsPlayingToFalse}
        onEnded={setIsPlayingToFalse}
        onTimeUpdate={updateVideoCurrentTime}
        onClick={pause}
        poster={poster}
        muted={true}
        src={src}
      />
      {!isPlaying && (
        <LocalOverlay
          isActive={true}
          onClick={() => play()}
          className={`
            w-full
            text-white

            hover:bg-slate-900
          `}
        >
          <div className="w-1/3">
            <IconPlay />
          </div>
        </LocalOverlay>
      )}
      {isPlaying && (
        <div
          className={`
            absolute
            bottom-0
            left-0
            flex
            h-10
            w-full
            items-center
            justify-between
            bg-slate-700
            bg-opacity-85
            px-2
            opacity-0
            transition-opacity

            group-hover:opacity-100
          `}
        >
          <div
            className={`
              flex
              items-center
              gap-2
            `}
          >
            <EditIconButton
              onClick={playBack}
              icon="backward"
              tooltipText="retour au début"
              className="text-slate-100"
            />
            <EditIconButton
              onClick={pause}
              icon="pause"
              tooltipText="pause"
              className="text-slate-100"
            />
          </div>
          <div
            className={`
              flex
              items-center
              gap-2
            `}
          >
            <div className="text-slate-100">{`${videoCurrentTime} / ${formatSecondsToTime(videoRef.current?.duration ?? 0)}`}</div>
            <EditIconButton
              onClick={requestFullscreen}
              icon="fullscreen"
              tooltipText="plein écran"
              className="text-slate-100"
            />
          </div>
        </div>
      )}
    </div>
  );
}
