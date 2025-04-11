import { MutableRefObject, useEffect, useRef } from 'react';
import IconAdd from '#/components/icons/icon-add';
import IconEdit from '#/components/icons/icon-edit';
import IconForward from '#/components/icons/icon-forward';
import IconGenerate from '#/components/icons/icon-generate';
import IconShopping from '#/components/icons/icon-shopping';
import IconTrash from '#/components/icons/icon-trash';
import IconCross from '#/components/icons/icon-cross';
import { Player } from '@lottiefiles/react-lottie-player';
import IconPrint from '#/components/icons/icon-print';
import IconLoader from '#/components/icons/icon-loader';
import SpinningLoader from '#/components/spinning-loader';
import IconCheck from '#/components/icons/icon-check';
import IconCalendar from '#/components/icons/icon-calendar';
import IconBook from '#/components/icons/icon-book';
import IconBag from '#/components/icons/icon-bag';
import IconCategory from '#/components/icons/icon-category';
import IconUser from '#/components/icons/icon-user';
import IconHome from '#/components/icons/icon-home';
import IconPlay from '#/components/icons/icon-play';
import IconClock from '#/components/icons/icon-clock';
import IconRefresh from '#/components/icons/icon-refresh';
import IconPause from '#/components/icons/icon-pause';
import IconBack from '#/components/icons/icon-back';
import IconPlus from '#/components/icons/icon-plus';
import IconUnbookmark from '#/components/icons/icon-unbookmark';
import IconBookmark from '#/components/icons/icon-bookmark';
import IconShare from '#/components/icons/icon-share';
import IconRegister from '#/components/icons/icon-register';
import IconImport from '#/components/icons/icon-import';
import IconSearch from '#/components/icons/icon-search';
import IconUpload from '#/components/icons/icon-upload';
import IconFullscreen from '#/components/icons/icon-fullscreen';
import IconPlusLinear from '#/components/icons/icon-plus-linear';

export type AnimatedIconName =
  | 'trash'
  | 'add'
  | 'edit'
  | 'forward'
  | 'generate'
  | 'shopping'
  | 'cross'
  | 'check'
  | 'print'
  | 'loader'
  | 'calendar'
  | 'book'
  | 'bag'
  | 'category'
  | 'user'
  | 'home'
  | 'play'
  | 'pause'
  | 'clock'
  | 'refresh'
  | 'backward'
  | 'plus'
  | 'plus-linear'
  | 'share'
  | 'bookmark'
  | 'unbookmark'
  | 'register'
  | 'import'
  | 'search'
  | 'upload'
  | 'fullscreen'
  | 'spinning-loader';

const iconComponents: Record<AnimatedIconName, JSX.Element> = {
  trash: <IconTrash />,
  add: <IconAdd />,
  edit: <IconEdit />,
  forward: <IconForward />,
  backward: <IconBack />,
  generate: <IconGenerate />,
  shopping: <IconShopping />,
  cross: <IconCross />,
  check: <IconCheck />,
  print: <IconPrint />,
  loader: <IconLoader />,
  calendar: <IconCalendar />,
  book: <IconBook />,
  bag: <IconBag />,
  category: <IconCategory />,
  user: <IconUser />,
  home: <IconHome />,
  play: <IconPlay />,
  pause: <IconPause />,
  clock: <IconClock />,
  refresh: <IconRefresh />,
  plus: <IconPlus />,
  'plus-linear': <IconPlusLinear />,
  bookmark: <IconBookmark />,
  unbookmark: <IconUnbookmark />,
  share: <IconShare />,
  register: <IconRegister />,
  import: <IconImport />,
  search: <IconSearch />,
  upload: <IconUpload />,
  fullscreen: <IconFullscreen />,
  'spinning-loader': <SpinningLoader />,
};

function getAnimatedIcon(lottiePlayer: MutableRefObject<Player | null>, icon: string) {
  if (icon === 'register') {
    return <IconRegister />;
  }

  if (icon === 'spinning-loader') {
    return (
      <div className="text-slate-300">
        <SpinningLoader />
      </div>
    );
  }

  if (icon === 'backward') {
    return (
      <div className="rotate-180">
        <Player
          ref={lottiePlayer}
          src="/lotties/forward.json"
          autoplay={true}
          speed={1.5}
        />
      </div>
    );
  }

  if (icon === 'plus' || icon === 'plus-linear') {
    return (
      <div className="rotate-45">
        <Player
          ref={lottiePlayer}
          src="/lotties/plus.json"
          autoplay={true}
          speed={1.5}
        />
      </div>
    );
  }

  return (
    <Player
      ref={lottiePlayer}
      src={`/lotties/${icon}.json`}
      autoplay={true}
      speed={1.5}
    />
  );
}

interface AnimatedIconProps {
  icon: AnimatedIconName;
  isPlaying: boolean;
  className?: string;
}

export default function AnimatedIcon({ icon, isPlaying, className }: AnimatedIconProps) {
  const lottiePlayer = useRef<null | Player>(null);

  useEffect(() => {
    if (isPlaying && lottiePlayer.current !== null) {
      lottiePlayer.current.play();
    }
  }, [isPlaying]);

  const staticIcon = iconComponents[icon];
  const animatedIcon = getAnimatedIcon(lottiePlayer, icon);

  return (
    <div
      className={`
        ${className ?? ''}

        h-full
        w-full
      `}
    >
      <div
        className={`
          block

          ${isPlaying ? 'tablet:hidden' : ''}
        `}
      >
        {staticIcon}
      </div>
      <div
        className={`
          hidden

          ${isPlaying ? 'tablet:block' : ''}
        `}
      >
        {animatedIcon}
      </div>
    </div>
  );
}
