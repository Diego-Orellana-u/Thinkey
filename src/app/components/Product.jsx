import Image from "next/image";
import { Button } from "./ui/button";
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
        <div className="desktop-s:w-3/5 desktop-l:pr-10">
          <Carousel>
            <CarouselContent className="max-h-96 desktop-s:max-h-full h-[650px]">
              <CarouselItem carouselType="product" className="pb-1">
                <Image
                  src="/familias-slime.webp"
                  className="rounded-xl object-cover max-h-96 desktop-s:max-h-full h-[650px]"
                  width={1270}
                  height={720}
                />
              </CarouselItem>
              <CarouselItem carouselType="product" className="pb-1">
                <Image
                  src="/familias-slime.webp"
                  className="rounded-xl object-cover max-h-96 desktop-s:max-h-full h-[650px]"
                  width={1270}
                  height={720}
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious variant="testSmall" component="products" />
            <CarouselNext variant="testSmall" component="products" />
          </Carousel>
        </div>

        <div className="text-blue-900 px-2 desktop-s:ml-10 desktop-s:w-2/5 desktop-s:pt-4">
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
            <div className="mb-5 desktop-s:mb-8">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi
              </p>
            </div>

            <div className="mb-5 desktop-s:mb-8">
              <ul className="grid grid-cols-3 w-full items-center gap-x-4 gap-y-6 margin-0">
                <li className="my-0 mx-auto flex flex-col items-center gap-1 max-w-32 w-full">
                  <Clock />
                  <span className="text-center text-[14px] leading-4 font-semibold">
                    Shade for up to 6 people
                  </span>
                </li>

                <li className="my-0 mx-auto flex flex-col items-center gap-1 max-w-32 w-full">
                  <Clock />
                  <span className="text-center text-[14px] leading-4 font-semibold">
                    Shade for up to 6 people
                  </span>
                </li>

                <li className="my-0 mx-auto flex flex-col items-center gap-1 max-w-32 w-full">
                  <Clock />
                  <span className="text-center text-[14px] leading-4 font-semibold">
                    Shade for up to 6 people
                  </span>
                </li>

                <li className="my-0 mx-auto flex flex-col items-center gap-1 max-w-32 w-full">
                  <Clock />
                  <span className="text-center text-[14px] leading-4 font-semibold">
                    Shade for up to 6 people
                  </span>
                </li>

                <li className="my-0 mx-auto flex flex-col items-center gap-1 max-w-32 w-full">
                  <Clock />
                  <span className="text-center text-[14px] leading-4 font-semibold">
                    Shade for up to 6 people
                  </span>
                </li>

                <li className="my-0 mx-auto flex flex-col items-center gap-1 max-w-32 w-full">
                  <Clock />
                  <span className="text-center text-[14px] leading-4 font-semibold">
                    Shade for up to 6 people
                  </span>
                </li>
              </ul>
            </div>

            <div className="mb-10 mt-6">
              <Accordion type="single" collapsible className="w-full max-w-4xl">
                <AccordionItem value="item-1">
                  <AccordionTrigger
                    triggerPadding="py-2"
                    iconSize="h-5 w-5 tablet-l:h-7 w-7"
                    fontSize="tablet-l:text-p-l"
                  >
                    Pregunta 1
                  </AccordionTrigger>
                  <AccordionContent>
                    Esta es la respuesta de la pregunta 1
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger
                    triggerPadding="py-2"
                    iconSize="h-5 w-5 tablet-l:h-7 w-7"
                    fontSize="tablet-l:text-p-l"
                  >
                    Pregunta 2
                  </AccordionTrigger>
                  <AccordionContent>
                    Esta es la respuesta de la pregunta 2
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="flex flex-col min-[650px]:flex-row desktop-s:flex-col">
              <div className="mb-6 font-medium text-[15px] min-[650px]:w-2/4 desktop-s:w-full">
                <span className="block">
                  Free 2-Day Shipping, Free Returns.
                </span>
                <span className="block">100% Satisfaction Guarantee.</span>
                <span className="block">3 Year Warranty</span>
              </div>
              <Button
                variant="testLarge"
                className={`relative tablet-l large-btn-card w-full border-none shadow-none min-[650px]:w-2/4 desktop-s:w-full`}
              >
                <span className="z-10">Contratar</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
