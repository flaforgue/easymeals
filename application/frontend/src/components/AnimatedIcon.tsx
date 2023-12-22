'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import LottiePlayer from './LottiePlayer';
import type { Player } from '@lottiefiles/react-lottie-player';

type AnimatedIconName = 'trash';
interface AnimatedIconProps {
  icon: AnimatedIconName;
  size: number;
  isPlaying: boolean;
}

export default function AnimatedIcon({
  icon,
  size,
  isPlaying,
}: AnimatedIconProps) {
  const lottiePlayer = useRef<null|Player>(null);

  useEffect(() => {
    if (isPlaying && lottiePlayer.current !== null) {
      lottiePlayer.current.play();
    }
  });

  const staticIcon = (
    <Image src={`/icons/${icon}.svg`}
      height={size}
      width={size}
      alt="trash"
    />
  );

  const animatedIcon = (
    <LottiePlayer
      src={`/lotties/${icon}.json`}
      autoplay={true}
      speed={1.5}
      style={{ height: `${size}px`, width: `${size}px` }}
    />
  );

  return (
    <>
      {!isPlaying && staticIcon}
      {isPlaying && (animatedIcon ?? staticIcon)}
    </>
  );
}