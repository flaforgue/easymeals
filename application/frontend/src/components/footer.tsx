import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div
      className={`
        z-1
        relative
        mb-16
        border-t
        bg-slate-50
        p-4
        font-title
        text-slate-300

        tablet:mb-0
        tablet:ml-20

        laptop:ml-60

        print:hidden
      `}
    >
      <div
        className={`
          flex-wrap
          justify-evenly
          gap-2
          overflow-hidden

          tablet:flex
        `}
      >
        {/* <div className="flex flex-col gap-4 items-center">
          <p>Directly support us</p>
          <div className="w-44">
            <BuyMeACoffeeButton />
          </div>
        </div>
        <span className="block my-4 border-t tablet:inline tablet:my-0 tablet:border-t-0 tablet:border-r" /> */}
        <div
          className={`
            flex
            flex-col
            items-center
            gap-2
          `}
        >
          <a
            target="_blank"
            href="https://lordicon.com/"
            className="hover:text-slate-500"
            rel="noreferrer"
          >
            Icons by Lordicon.com
          </a>
          <a
            target="_blank"
            href="https://storyset.com"
            className="hover:text-slate-500"
            rel="noreferrer"
            title="Icônes par Storyset"
          >
            Images by Storyset.com
          </a>
          <a
            target="_blank"
            href="https://www.flaticon.com"
            className="hover:text-slate-500"
            rel="noreferrer"
            title="Icônes par Flaticon"
          >
            Icons by Flaticon.com
          </a>
        </div>
        <span
          className={`
            my-4
            block
            border-t

            tablet:my-0
            tablet:inline
            tablet:border-r
            tablet:border-t-0
          `}
        />
        <div
          className={`
            flex
            flex-col
            items-center
            gap-2
          `}
        >
          <Link
            target="_blank"
            to="/conditions-generales-utilisation"
            className="hover:text-slate-500"
            rel="noreferrer"
          >
            Conditions Générales d&apos;Utilisation
          </Link>
          <Link
            target="_blank"
            to="/protection-des-donnees"
            className="hover:text-slate-500"
            rel="noreferrer"
          >
            Protection des Données
          </Link>
          <Link
            target="_blank"
            to="/mentions-legales"
            className="hover:text-slate-500"
            rel="noreferrer"
          >
            Mentions Légales
          </Link>
          <p
            className={`
              cursor-pointer

              hover:text-slate-500
            `}
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return
            onClick={() => (window as any).axeptioSDK.openCookies()}
          >
            Cookies
          </p>
        </div>
      </div>
    </div>
  );
}
