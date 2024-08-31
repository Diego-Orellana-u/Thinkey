import Image from "next/image";
import Clock from "./Icons/Clock";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Product({}) {
  return (
    <section>
      <div className="wrapper flex flex-col desktop-s:flex-row">
        <div className="">
          <Carousel>
            <CarouselContent className="tablet-l:-ml-10 desktop-s:-ml-6 desktop-l:-ml-12">
              <CarouselItem className=" desktop-s:pl-6 desktop-l:pl-12 pb-1">
                <Image
                  src="/familias-slime.webp"
                  className="rounded-xl"
                  width={1270}
                  height={720}
                />
              </CarouselItem>
              <CarouselItem className=" desktop-s:pl-6 desktop-l:pl-12 pb-1">
                <Image
                  src="/familias-slime.webp"
                  className="rounded-xl"
                  width={1270}
                  height={720}
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious variant="testSmall" component="products" />
            <CarouselNext variant="testSmall" component="products" />
          </Carousel>
        </div>

        <div className="text-blue-900 px-4">
          <div className="py-4 border-b border-gray-300/30">
            <div className="py-3">
              <h2 className="font-bold text-h1-s leading-10">
                Cumpleaños Cientifico Slime
              </h2>
            </div>

            <div>
              {/* Add conditional here for previous price and new price */}
              <span className="flex gap-3 font-semibold text-h2-s mb-2">
                <s className="opacity-50">$35.000</s>
                $25.000
              </span>
              <span className="text-orange-500 text-[14px] font-semibold">
                Armado de evento gratis
              </span>
            </div>
          </div>

          <div className="py-7">
            <div className="mb-5">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi
              </p>
            </div>

            <div className="mb-5">
              <ul className="grid grid-cols-3 gap-x-4 gap-y-6 margin-0">
                <li className="flex flex-col items-center gap-1 max-w-32 w-full">
                  <Clock />
                  <span className="text-center text-[14px] leading-4 font-semibold">
                    Shade for up to 6 people
                  </span>
                </li>

                <li className="flex flex-col items-center gap-1 max-w-32 w-full">
                  <Clock />
                  <span className="text-center text-[14px] leading-4 font-semibold">
                    Shade for up to 6 people
                  </span>
                </li>

                <li className="flex flex-col items-center gap-1 max-w-32 w-full">
                  <Clock />
                  <span className="text-center text-[14px] leading-4 font-semibold">
                    Shade for up to 6 people
                  </span>
                </li>

                <li className="flex flex-col items-center gap-1 max-w-32 w-full">
                  <Clock />
                  <span className="text-center text-[14px] leading-4 font-semibold">
                    Shade for up to 6 people
                  </span>
                </li>

                <li className="flex flex-col items-center gap-1 max-w-32 w-full">
                  <Clock />
                  <span className="text-center text-[14px] leading-4 font-semibold">
                    Shade for up to 6 people
                  </span>
                </li>

                <li className="flex flex-col items-center gap-1 max-w-32 w-full">
                  <Clock />
                  <span className="text-center text-[14px] leading-4 font-semibold">
                    Shade for up to 6 people
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <Accordion type="single" collapsible className="w-full max-w-4xl">
                <AccordionItem value="item-1">
                  <AccordionTrigger triggerPadding="py-2" iconSize="h-5 w-5">
                    Pregunta 1
                  </AccordionTrigger>
                  <AccordionContent>
                    Esta es la respuesta de la pregunta 1
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger triggerPadding="py-2" iconSize="h-5 w-5">
                    Pregunta 2
                  </AccordionTrigger>
                  <AccordionContent>
                    Esta es la respuesta de la pregunta 2
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
