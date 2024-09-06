import Image from "next/image";
import Link from "next/link";

export default function Team({ teamInfo }) {
  return (
    <section className="wrapper pb-16">
      <div className="mb-10">
        <h2 className="text-black-heading-color relative flex flex-col items-center text-h2-s tablet-l:text-h2-l tablet-l:leading-10 desktop-s:text-h2-xl leading-8 desktop-s:leading-[3.5rem] text-center mb-5 font-bold">
          {teamInfo.title}
          <span className="relative">
            {teamInfo.highlightTitle}
            <Image
              className="absolute left-[20%] -top-2 min-[379px]:left-[-6%] w-[60%] min-[379px]:w-[55%] min-[379px]:top-1 desktop-s:top-2 -z-10 object-cover max-h-[80%]"
              src="/highlight-marker.svg"
              width={210}
              height={61}
              alt="Highlight marker image"
            />
          </span>
        </h2>
        <p className="text-gray-body-color text-p-s text-center">
          {teamInfo.desc}
        </p>
      </div>
      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-12 desktop-s:gap-10">
        {teamInfo.members &&
          teamInfo.members.map((member) => (
            <div key={member.key} className="relative">
              <div>
                <Image
                  src={member.imgHref}
                  width={member.imgWidth}
                  height={member.imgHeight}
                  className="rounded-xl"
                />
              </div>

              {member.socials &&
                member.socials.map((social, index) => (
                  <div
                    key={social.key}
                    className={`absolute bg-white px-3 py-[2px] text-black font-medium ${
                      index === 0 && "top-5"
                    } ${index === 1 && "top-[3.4rem]"} ${
                      index === 2 && "top-[5.55rem]"
                    } left-4 rounded-[7rem]`}
                  >
                    <Link href="/">{social.socialText}</Link>
                  </div>
                ))}

              <div className="pt-5">
                <span className="block text-black-heading-color font-medium text-p-xl tablet-s:text-h3-s">
                  {member.name}
                </span>
                <span className="block text-gray-body-color/70 font-medium text-p-l">
                  {member.position}
                </span>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
