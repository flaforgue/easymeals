import IconHome from '#/components/icons/icon-home';
import IconSolidAdd from '#/components/icons/icon-solid-add';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import IconTeam from '#/components/icons/icon-team';
import IconKitchen from '#/components/icons/icon-kitchen';
import IconBook from '#/components/icons/icon-book';
import IconCalendar from '#/components/icons/icon-calendar';
import IconShopping from '#/components/icons/icon-shopping';
import VideoPlayer from '#/components/video-player';
import IconClock from '#/components/icons/icon-clock';
import IconPlainBook from '#/components/icons/icon-plain-book';
import IconBag from '#/components/icons/icon-bag';
import IconSolidBulb from '#/components/icons/icon-solid-bulb';
import IconBuild from '#/components/icons/icon-build';
import FeatureIdeaButton from '#/components/buttons/feature-idea-button';

export default function Home() {
  const { isAuthenticated } = useAuth0();

  return (
    <main className="-m-4">
      <div
        className={`
          relative
          flex
          content-center
          items-center
          justify-center
          pb-32
          pt-16
        `}
        style={{
          minHeight: '75vh',
        }}
      >
        <div
          className={`
            absolute
            top-0
            h-full
            w-full
            overflow-hidden
          `}
        >
          <div
            className={`
              -mt-46
              bg-white
              text-sky-500

              laptop:-mt-60
            `}
          >
            <IconKitchen />
          </div>
          <span
            className={`
              absolute
              left-0
              top-0
              h-full
              w-full
              bg-black
              opacity-60
            `}
          />
        </div>
        <div
          className={`
            container
            relative
            mx-auto
          `}
        >
          <div
            className={`
              flex
              flex-wrap
              items-center
            `}
          >
            <div
              className={`
                w-full
                px-4
                text-center
              `}
            >
              <h1
                className={`
                  mx-auto
                  font-title
                  text-5xl
                  font-semibold
                  text-white

                  laptop:w-1/2
                `}
              >
                La Beta Easymeals™️ est ouverte&nbsp;!
              </h1>
              <p
                className={`
                  mx-auto
                  mt-8
                  text-lg
                  text-slate-300

                  laptop:w-1/2
                `}
              >
                Réunissez toutes les recettes que vous aimez faire au même endroit, gérez vos menus et générez vos
                listes de courses en quelques clics&nbsp;!
              </p>
            </div>
          </div>
        </div>
        <div
          className={`
            pointer-events-none
            absolute
            -bottom-1
            left-0
            right-0
            w-full
            overflow-hidden
          `}
          style={{ height: '70px' }}
        >
          <svg
            className={`
              absolute
              bottom-0
              overflow-hidden
            `}
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className={`
                fill-current
                text-sky-50
              `}
              points="2560 0 2560 100 0 100"
            />
          </svg>
        </div>
      </div>

      <section
        className={`
          -mt-24
          bg-sky-50
          pb-14
        `}
      >
        <div
          className={`
            container
            mx-auto
            px-4
          `}
        >
          <div
            className={`
              flex
              flex-wrap
            `}
          >
            <div
              className={`
                w-full
                px-4
                pt-6
                text-center

                laptop:w-4/12
                laptop:pt-12
              `}
            >
              <div
                className={`
                  relative
                  mb-8
                  flex
                  w-full
                  flex-col
                  break-words
                  rounded-lg
                  bg-white
                  shadow-lg
                `}
              >
                <div
                  className={`
                    flex-auto
                    px-4
                    py-5
                  `}
                >
                  <div
                    className={`
                      mb-5
                      inline-flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      bg-green-500
                      p-3
                      text-center
                      text-green-100
                      shadow-lg
                    `}
                  >
                    <IconBook />
                  </div>
                  <h6
                    className={`
                      font-title
                      text-2xl
                      font-semibold
                      text-slate-900
                    `}
                  >
                    Recettes
                  </h6>
                  <p
                    className={`
                      mb-4
                      mt-2
                      text-slate-600
                    `}
                  >
                    Réunissez vos recette préférées, qu&apos;elles viennent de livres, d&apos;autres sites ou de votre
                    imagiation&nbsp;!
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`
                w-full
                px-4
                text-center

                laptop:w-4/12
              `}
            >
              <div
                className={`
                  relative
                  mb-8
                  flex
                  w-full
                  flex-col
                  break-words
                  rounded-lg
                  bg-white
                  shadow-lg
                `}
              >
                <div
                  className={`
                    flex-auto
                    px-4
                    py-5
                  `}
                >
                  <div
                    className={`
                      mb-5
                      inline-flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      bg-sky-500
                      p-3
                      text-center
                      text-blue-100
                      shadow-lg
                    `}
                  >
                    <IconCalendar />
                  </div>
                  <h6
                    className={`
                      font-title
                      text-2xl
                      font-semibold
                      text-slate-900
                    `}
                  >
                    Menus
                  </h6>
                  <p
                    className={`
                      mb-4
                      mt-2
                      text-slate-600
                    `}
                  >
                    Planifiez vos repas de semaine en semaine en choisissant parmi vos recettes préférées
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`
                w-full
                px-4
                pt-6
                text-center

                laptop:w-4/12
              `}
            >
              <div
                className={`
                  relative
                  mb-8
                  flex
                  w-full
                  flex-col
                  break-words
                  rounded-lg
                  bg-white
                  shadow-lg
                `}
              >
                <div
                  className={`
                    flex-auto
                    px-4
                    py-5
                  `}
                >
                  <div
                    className={`
                      mb-5
                      inline-flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      bg-orange-500
                      p-3
                      text-center
                      text-orange-100
                      shadow-lg
                    `}
                  >
                    <IconShopping />
                  </div>
                  <h6
                    className={`
                      font-title
                      text-2xl
                      font-semibold
                      text-slate-900
                    `}
                  >
                    Courses
                  </h6>
                  <p
                    className={`
                      mb-4
                      mt-2
                      text-slate-600
                    `}
                  >
                    Générez vos listes de courses en 1&nbsp;clic&nbsp;! Terminé la recopie manuelle et les produits en
                    croix dans tous les sens&nbsp;!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`
              mt-20
              flex
              flex-wrap
              items-center
            `}
          >
            <div
              className={`
                mx-auto
                w-full
                px-4
              `}
            >
              <h3
                className={`
                  flex
                  items-center
                  gap-4
                  font-title
                  text-3xl
                  font-semibold
                  leading-none
                `}
              >
                <div
                  className={`
                    flex
                    h-12
                    w-12
                    flex-shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-sky-500
                    p-3
                    text-center
                    text-sky-100
                    shadow-lg
                  `}
                >
                  <IconClock />
                </div>
                <p className="text-slate-700">Gagnez du temps au quotidien</p>
              </h3>
            </div>
            <div
              className={`
                mt-8
                w-full
                px-4

                laptop:w-3/4
              `}
            >
              <div
                className={`
                  relative
                  mb-10
                  flex
                  w-full
                  min-w-0
                  flex-col
                  overflow-hidden
                  break-words
                  rounded-lg
                  bg-sky-500
                  shadow-lg
                `}
              >
                <VideoPlayer
                  src="https://storage.googleapis.com/easymeals-storage/static/plan-and-shop-tutorial.mp4"
                  poster="https://storage.googleapis.com/easymeals-storage/static/plan-and-shop-tutorial-poster.png"
                />
                <blockquote
                  className={`
                    relative
                    px-8
                    py-4
                  `}
                >
                  <h4
                    className={`
                      font-title
                      text-2xl
                      font-bold
                      leading-snug
                      text-white
                    `}
                  >
                    Comment ça marche&nbsp;?
                  </h4>
                </blockquote>
              </div>
            </div>
            <div
              className={`
                relative
                hidden
                w-1/4

                laptop:block
              `}
            >
              <img
                width="54"
                className={`
                  absolute
                  -top-44
                  right-10
                  opacity-20
                  grayscale
                `}
                src="/icons/spatule.png"
              />
              <img
                width="54"
                className={`
                  absolute
                  -top-10
                  left-12
                  opacity-20
                  grayscale

                  [transform:rotateY(180deg)]
                `}
                src="/icons/planche.png"
              />
              <img
                width="54"
                className={`
                  absolute
                  -bottom-40
                  left-40
                  opacity-20
                  grayscale
                `}
                src="/icons/pomme.png"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className={`
          relative
          py-28
        `}
      >
        <div
          className={`
            pointer-events-none
            absolute
            left-0
            right-0
            top-20
            -mt-20
            w-full
            overflow-hidden

            [transform:rotateX(180deg)]
          `}
          style={{ height: '80px' }}
        >
          <svg
            className={`
              absolute
              bottom-0
              overflow-hidden
            `}
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className={`
                fill-current
                text-sky-50
              `}
              points="2560 0 2560 100 0 100"
            />
          </svg>
        </div>
        <div
          className={`
            container
            mx-auto
            px-4
          `}
        >
          <div
            className={`
              flex
              flex-col-reverse
              flex-wrap
              items-center

              laptop:flex-row
            `}
          >
            <div
              className={`
                mx-auto
                w-full
                px-4
                py-8

                laptop:w-5/12
              `}
            >
              <div>
                <h3
                  className={`
                    flex
                    items-center
                    gap-4
                    font-title
                    text-3xl
                    font-semibold
                    leading-none
                  `}
                >
                  <div
                    className={`
                      inline-flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      bg-green-500
                      p-4
                      text-center
                      text-green-100
                      shadow-lg
                    `}
                  >
                    <IconHome />
                  </div>
                  <p>Travaillez en équipe</p>
                </h3>
                <p
                  className={`
                    mt-8
                    text-lg
                    leading-relaxed
                    text-slate-600
                  `}
                >
                  Grâce au lien disponible dans vos&nbsp;
                  {isAuthenticated ? (
                    <Link
                      className="underline"
                      to="/app/settings"
                      target="_blank"
                      referrerPolicy="no-referrer"
                    >
                      paramètres
                    </Link>
                  ) : (
                    'paramètres'
                  )}
                  {' vous pouvez inviter d\'autres personnes à rejoindre votre "maison" et leur permettre de :'}
                </p>
                <ul
                  className={`
                    mt-2
                    list-none
                  `}
                >
                  <li className="py-2">
                    <div className="flex">
                      <span
                        className={`
                          mr-3
                          mt-[7px]
                          h-2
                          rounded-full
                          bg-green-500
                          p-1
                        `}
                      />
                      <h4 className="text-slate-600">Participer à l&apos;élaboration des menus</h4>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex">
                      <span
                        className={`
                          mr-3
                          mt-[7px]
                          h-2
                          rounded-full
                          bg-green-500
                          p-1
                        `}
                      />
                      <h4 className="text-slate-600">
                        Accéder à vos listes de courses et cocher les éléments avec vous
                      </h4>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex">
                      <span
                        className={`
                          mr-3
                          mt-[7px]
                          h-2
                          rounded-full
                          bg-green-500
                          p-1
                        `}
                      />
                      <h4 className="text-slate-600">Accéder et contribuer à votre livre de recettes</h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={`
                mx-auto
                w-full
                px-4

                laptop:w-5/12
              `}
            >
              <div
                className={`
                  relative
                  mb-10
                  flex
                  w-full
                  min-w-0
                  flex-col
                  break-words
                  rounded-lg
                  bg-green-500
                  shadow-lg
                `}
              >
                <div
                  className={`
                    h-56
                    rounded-t
                    bg-slate-100
                    py-6
                    text-green-600
                  `}
                >
                  <IconTeam />
                </div>
                <blockquote
                  className={`
                    relative
                    p-8
                  `}
                >
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className={`
                      absolute
                      left-0
                      block
                      w-full
                    `}
                    style={{
                      height: '95px',
                      top: '-94px',
                    }}
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className={`
                        fill-current
                        text-green-500
                      `}
                    />
                  </svg>
                  <h4
                    className={`
                      mb-4
                      font-title
                      text-2xl
                      font-bold
                      leading-none
                      text-white
                    `}
                  >
                    Et ce n&apos;est pas tout !
                  </h4>
                  <p
                    className={`
                      text-md
                      mt-2
                      font-light
                      text-green-100
                    `}
                  >
                    Vous pouvez aussi partager vos recettes par lien et importer celles que l&apos;on vous partage à
                    votre propre livre de recettes.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`
          relative
          block
          bg-slate-900
          pb-20
        `}
      >
        <div
          className={`
            pointer-events-none
            absolute
            bottom-auto
            left-0
            right-0
            top-[1px]
            -mt-20
            w-full
            overflow-hidden
          `}
          style={{ height: '80px' }}
        >
          <svg
            className={`
              absolute
              bottom-0
              overflow-hidden
            `}
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className={`
                fill-current
                text-slate-900
              `}
              points="2560 0 2560 100 0 100"
            />
          </svg>
        </div>
        <div
          className={`
            container
            mx-auto
            px-4
            py-20

            laptop:pt-20
          `}
        >
          <div
            className={`
              flex
              flex-wrap
              justify-center
              text-center
            `}
          >
            <div
              className={`
                w-full
                px-4

                laptop:w-6/12
              `}
            >
              <div
                className={`
                  mb-6
                  inline-flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  bg-sky-700
                  p-4
                  text-center
                  text-blue-100
                  shadow-lg
                `}
              >
                <IconSolidBulb />
              </div>
              <h2
                className={`
                  font-title
                  text-4xl
                  font-semibold
                  leading-tight
                  text-white
                `}
              >
                Personnalisez votre espace
              </h2>
            </div>
          </div>
          <div
            className={`
              mt-12
              flex
              flex-wrap
              justify-center
              gap-4
            `}
          >
            <div
              className={`
                w-full
                px-4
                text-center

                laptop:w-3/12
              `}
            >
              <div
                className={`
                  inline-flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  p-2.5
                  text-sky-900
                  shadow-lg
                `}
              >
                <IconPlainBook />
              </div>
              <h5
                className={`
                  mt-5
                  font-title
                  text-2xl
                  font-semibold
                  text-white
                `}
              >
                En créant vos recettes
              </h5>
              <p
                className={`
                  mb-4
                  mt-2
                  text-slate-500
                `}
              >
                Regroupez toutes les recettes que vous aimez faire au même endroit&nbsp;!
              </p>
            </div>
            <div
              className={`
                w-full
                px-4
                text-center

                laptop:w-3/12
              `}
            >
              <div
                className={`
                  inline-flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  p-2.5
                  text-sky-900
                  shadow-lg
                `}
              >
                <IconSolidAdd />
              </div>
              <h5
                className={`
                  mt-5
                  font-title
                  text-2xl
                  font-semibold
                  text-white
                `}
              >
                En ajoutant des ingrédients
              </h5>
              <p
                className={`
                  mb-4
                  mt-2
                  text-slate-500
                `}
              >
                Si vous êtres plusieurs à ajouter un même ingrédient, il sera ajouté à la base
              </p>
            </div>
            <div
              className={`
                w-full
                px-4
                text-center

                laptop:w-3/12
              `}
            >
              <div
                className={`
                  inline-flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  p-2.5
                  text-sky-900
                  shadow-lg
                `}
              >
                <IconBag />
              </div>
              <h5
                className={`
                  mt-5
                  font-title
                  text-2xl
                  font-semibold
                  text-white
                `}
              >
                En ajoutant des produits
              </h5>
              <p
                className={`
                  mb-4
                  mt-2
                  text-slate-500
                `}
              >
                Vous contribuez ainsi à rendre Easymeals encore plus pratique&nbsp;!
              </p>
            </div>
          </div>
        </div>
        <div
          className={`
            mx-auto
            w-full
            px-4
            text-center

            laptop:w-4/12
          `}
        >
          <div
            className={`
              relative
              flex
              w-full
              flex-col
              break-words
              rounded-lg
              bg-white
              shadow-lg
            `}
          >
            <div
              className={`
                flex-auto
                px-4
                py-5
              `}
            >
              <div
                className={`
                  mb-5
                  inline-flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-amber-500
                  p-3
                  text-center
                  text-amber-100
                  shadow-lg
                `}
              >
                <IconBuild />
              </div>
              <h5
                className={`
                  font-title
                  text-2xl
                  font-semibold
                  text-slate-900
                `}
              >
                Une idée&nbsp;?
              </h5>
              <p
                className={`
                  mb-4
                  mt-2
                  text-slate-600
                `}
              >
                Vous avez une suggestion pour rendre Easymeals encore plus pratique&nbsp;?
              </p>
              <FeatureIdeaButton />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
