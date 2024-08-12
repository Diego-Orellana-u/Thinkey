import Heading2 from "./Heading2";

export default function ImpactTwo({ data, borderColor, backgroundColor }) {
  return (
    <div className="wrapper flex justify-center w-full">
      <div className="w-full max-w-2xl tablet-l:max-w-none">
        <div className="text-center">
          <Heading2 title="Otra sección de estadisticas" />
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Our platform is trusted by organizations worldwide to boost
            productivity, streamline operations, and enhance customer
            experiences.
          </p>
        </div>
        <div className="mt-16 pb-2 grid grid-cols-1 gap-5 text-center tablet-s:grid-cols-2 tablet-l:grid-cols-4">
          {data &&
            data.map((ind) => (
              <div key={ind.key} className="relative bg-gray-200/50 ">
                <span
                  className={`absolute top-0 left-0 w-full h-full mt-1 ml-1 ${backgroundColor} rounded-lg`}
                ></span>
                <div
                  className={`flex flex-col relative h-full p-5 rounded-lg bg-white border-2 ${borderColor}`}
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
