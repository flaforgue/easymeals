import { useState, useEffect } from 'react';

export default function useAnimationPlayedOnce(
  shouldStartAnimation: boolean,
  animationDuration: number,
  onAnimationComplete: () => void = () => {},
) {
  const [isSuccessAnimationPlaying, setIsSuccessAnimationPlaying] = useState(false);
  const [animationTimeout, setAnimationTimeout] = useState<number | undefined>(undefined);
  useEffect(
    () => {
      if (shouldStartAnimation) {
        clearTimeout(animationTimeout);
        setIsSuccessAnimationPlaying(true);
        setAnimationTimeout(
          setTimeout(() => {
            setIsSuccessAnimationPlaying(false);
            onAnimationComplete();
          }, animationDuration),
        );
      }

      return () => clearTimeout(animationTimeout);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [shouldStartAnimation],
  );

  return isSuccessAnimationPlaying;
}
