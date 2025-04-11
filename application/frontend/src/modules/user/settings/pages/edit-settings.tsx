import EditHouse from '#/modules/user/house/components/edit-house';
import EditProfile from '#/modules/user/profile/components/edit-profile';

export default function EditSettings() {
  return (
    <div>
      <div
        className={`
          flex
          flex-wrap
          gap-4

          laptop:flex-nowrap
        `}
      >
        <div
          className={`
            flex
            w-full
            flex-col
            justify-between
            rounded
            bg-slate-100
            p-4

            laptop:w-2/5
          `}
        >
          <EditProfile />
        </div>
        <div
          className={`
            w-full

            laptop:w-3/5
          `}
        >
          <EditHouse />
        </div>
      </div>
    </div>
  );
}
