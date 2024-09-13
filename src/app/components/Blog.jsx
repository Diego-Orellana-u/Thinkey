import Image from "next/image";
import Link from "next/link";
import HeadingTwoHighlight from "./HeadingTwoHighlight";
export default function Blog({ blogInfo }) {
  return (
    <div
      className={`${
        blogInfo.sectionPadding ? blogInfo.sectionPadding : "pb-20"
      } w-full dark:bg-gray-800`}
    >
      <div className="wrapper max-w-7xl desktop-s:max-w-none pt-8">
        <div className="mb-10 flex flex-col items-center">
          <HeadingTwoHighlight
            color="text-black-heading-color"
            title={blogInfo.title}
            titleCss={blogInfo.titleCss}
          />
          <p className="text-gray-body-color mt-3 desktop-s:mt-8 text-p-s tablet-l:text-p-l text-center tablet-l:w-2/4 desktop-l:w-1/3">
            Cada día nos preocupamos de entregarte las últimas novedades sobre
            la educación cientifica para tus niños
          </p>
        </div>
        <div className="mt-8 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 mobile-l:mt-12 tablet-l:gap-16 desktop-s:gap-8 desktop-l:gap-16 tablet-l:max-w-none desktop-s:grid-cols-3 ">
          <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-xl bg-gray-900 dark:bg-gray-700 px-8 py-8 pb-8 pt-32 mobile-l:pt-80 desktop-s:pt-52 desktop-l:pt-80">
            <Image
              width={1280}
              height={720}
              src="/Slime.jpg"
              alt=""
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-200">
              <time dateTime="2023-10-11" className="mr-8">
                Oct 11, 2023
              </time>
              <div className="-ml-4 flex items-center gap-x-4">
                <svg
                  viewBox="0 0 2 2"
                  className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                >
                  <circle cx="1" cy="1" r="1"></circle>
                </svg>
                <div className="flex gap-x-2.5">
                  <Image
                    width={1280}
                    height={720}
                    src="/suit.webp"
                    alt=""
                    className="h-6 w-6 flex-none rounded-full bg-white/10"
                  />
                  John
                </div>
              </div>
            </div>
            <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
              <Link href="/tech-blog/post1">
                <span className="absolute inset-0"></span>The Future of
                Artificial Intelligence: Trends and Challenges
              </Link>
            </h3>
          </article>
          <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-8 py-8 pb-8 pt-32 sm:pt-48">
            <Image
              width={1280}
              height={720}
              src="/imagen-equipo-colbun.webp"
              alt=""
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-200">
              <time datetime="2023-09-25" className="mr-8">
                Sept 25, 2023
              </time>
              <div className="-ml-4 flex items-center gap-x-4">
                <svg
                  viewBox="0 0 2 2"
                  className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                >
                  <circle cx="1" cy="1" r="1"></circle>
                </svg>
                <div className="flex gap-x-2.5">
                  <Image
                    width={1280}
                    height={720}
                    src="/suit.webp"
                    alt=""
                    className="h-6 w-6 flex-none rounded-full bg-white/10"
                  />
                  Jane
                </div>
              </div>
            </div>
            <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
              <Link href="/tech-blog/post2">
                <span className="absolute inset-0"></span>The Rise of Blockchain
                Technology: A Comprehensive Guide
              </Link>
            </h3>
          </article>
          <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-8 py-8 pb-8 pt-32 sm:pt-48">
            <Image
              width={1280}
              height={720}
              src="/kidsRobotics.webp"
              alt=""
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-200">
              <time datetime="2023-09-24" className="mr-8">
                Sept 24, 2023
              </time>
              <div className="-ml-4 flex items-center gap-x-4">
                <svg
                  viewBox="0 0 2 2"
                  className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                >
                  <circle cx="1" cy="1" r="1"></circle>
                </svg>
                <div className="flex gap-x-2.5">
                  <Image
                    width={1280}
                    height={720}
                    src="/suit.webp"
                    alt=""
                    className="h-6 w-6 flex-none rounded-full bg-white/10"
                  />
                  Michael
                </div>
              </div>
            </div>
            <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
              <Link href="/tech-blog/post3">
                <span className="absolute inset-0"></span>How Quantum Computing
                Will Revolutionize Data Security
              </Link>
            </h3>
          </article>
        </div>
      </div>
    </div>
  );
}
