'use client';

import { IPlayerProps, Player } from '@lottiefiles/react-lottie-player';

export default function LottiePlayer(props: IPlayerProps) {
  return <Player {...props} />;
}