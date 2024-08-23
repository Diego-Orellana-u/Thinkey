import Heading2 from "./Heading2";

export default function ImpactTwo({
  data,
  borderColor,
  backgroundColor,
  title,
  desc,
  sectionPadding,
}) {
  return (
    <div
      className={`wrapper flex justify-center w-full ${
        sectionPadding ? sectionPadding : ""
      }`}
    >
      <div className="w-full max-w-2xl tablet-l:max-w-none">
        <div className="text-center">
          <Heading2 title={title} />
          <p className="mt-4 text-lg leading-8 text-gray-600">{desc}</p>
        </div>
        <div className="mt-16 pb-2 grid grid-cols-1 gap-5 text-center tablet-s:grid-cols-2 tablet-l:grid-cols-4">
          {data &&
            data.map((ind) => (
              <div key={ind.key} className="relative bg-gray-200/50 ">
                <span
                  className={`absolute rounded-xl top-0 left-0 w-full h-full mt-1 ml-1 ${backgroundColor} rounded-lg`}
                ></span>
                <div
                  className={`flex rounded-xl flex-col relative h-full p-5 bg-white border-2 ${borderColor}`}
                >
                  <span className="text-sm font-semibold leading-6 text-gray-600">
                    {ind.title}
                  </span>
                  <span className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                    {ind.data}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
