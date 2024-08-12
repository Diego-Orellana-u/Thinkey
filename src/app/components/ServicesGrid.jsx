import Heading2 from "./Heading2";

export default function ServicesGrid({ servicesTop, servicesBottom }) {
  return (
    <div className="wrapper relative flex flex-col justify-between h-full px-10 mx-auto xl:px-0 mt-5">
      <Heading2 title="Servicios" padding="pb-10" />
      <div className="w-full">
        {servicesTop && (
          <div className="flex flex-col w-full tablet-l:mb-10 desktop-s:mb-16 tablet-l:flex-row tablet-l:gap-10 desktop-s:gap-16">
            {servicesTop &&
              servicesTop.map((card) => (
                <div
                  key={card.key}
                  className="w-full mb-10 tablet-l:mb-0 tablet-l:w-1/2"
                >
                  <div className="relative h-full ml-0">
                    <span
                      className={`absolute top-0 left-0 w-full h-full mt-1 ml-1 ${
                        card.bgColor && card.bgColor
                      } rounded-lg`}
                    ></span>
                    <div
                      className={`relative h-full p-5 bg-white border-2 ${
                        card.borderColor && card.borderColor
                      }  rounded-lg`}
                    >
                      <div className="flex items-center -mt-1">
                        <h3 className="my-2 text-lg font-bold text-gray-800">
                          {card.title}
                        </h3>
                      </div>
                      <span
                        className={`block mt-3 mb-3 text-xs font-medium ${
                          card.lineColor && card.lineColor
                        } uppercase`}
                      >
                        ------------
                      </span>
                      <p className="mb-2 text-gray-600">{card.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}

        {servicesBottom && (
          <div className="flex flex-col w-full mb-10 tablet-l:flex-row tablet-l:gap-10 desktop-s:gap-16">
            {servicesBottom &&
              servicesBottom.map((card) => (
                <div
                  key={card.key}
                  className="w-full mb-10 tablet-l:mb-0 tablet-l:w-1/2"
                >
                  <div className="relative h-full ml-0">
                    <span
                      className={`absolute top-0 left-0 w-full h-full mt-1 ml-1 ${
                        card.bgColor && card.bgColor
                      } rounded-lg`}
                    ></span>
                    <div
                      className={`relative h-full p-5 bg-white border-2 ${
                        card.borderColor && card.borderColor
                      }  rounded-lg`}
                    >
                      <div className="flex items-center -mt-1">
                        <h3 className="my-2 text-lg font-bold text-gray-800">
                          {card.title}
                        </h3>
                      </div>
                      <span
                        className={`block mt-3 mb-3 text-xs font-medium ${
                          card.lineColor && card.lineColor
                        } uppercase`}
                      >
                        ------------
                      </span>
                      <p className="mb-2 text-gray-600">{card.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
