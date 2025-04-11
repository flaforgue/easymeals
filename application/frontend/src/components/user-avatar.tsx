import IconUser from '#/components/icons/icon-user';

interface AvatarProps {
  pictureUrl: undefined | string;
  onClick?: (e: React.MouseEvent) => void;
}

export default function UserAvatar({ pictureUrl, onClick }: AvatarProps) {
  const avatarComponent =
    pictureUrl === undefined ? (
      <div
        className={`
          rounded-full
          bg-slate-100
          p-1
          text-slate-300
        `}
      >
        <IconUser />
      </div>
    ) : (
      <img
        referrerPolicy="no-referrer"
        src={pictureUrl}
        alt="avatar"
        className="rounded-full"
      />
    );

  return (
    <div
      onClick={onClick ?? (() => {})}
      className={`
        mx-auto
        h-full
        w-full
        rounded-full
        shadow
        shadow-slate-700

        ${onClick !== undefined ? `cursor-pointer` : ''}
      `}
    >
      {avatarComponent}
    </div>
  );
}
