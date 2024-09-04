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

export default function Product({ productInfo }) {
  return (
    <section>
      <div className="wrapper flex flex-col desktop-s:flex-row">
        <div className="desktop-s:w-3/5 desktop-l:pr-10">
          <Carousel position="sticky top-5">
            <CarouselContent className="max-h-96 desktop-s:max-h-full h-[650px]">
              {productInfo &&
                productInfo.images.map((image) => (
                  <CarouselItem
                    key={image.key}
                    carouselType="product"
                    className="pb-1"
                  >
                    <Image
                      src={image.imageLink}
                      className="rounded-xl object-cover max-h-96 desktop-s:max-h-full h-[650px]"
                      width={image.imageWidth}
                      height={image.imageHeight}
                      alt={image.imageAlt}
                    />
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious variant="testSmall" component="products" />
            <CarouselNext variant="testSmall" component="products" />
          </Carousel>
        </div>

        <div className="text-blue-900 px-2 desktop-s:ml-10 desktop-s:w-2/5 desktop-s:pt-4">
          <div className="py-4 border-b border-gray-300/30">
            <div className="py-3">
              <h2 className="font-bold text-h1-s desktop-s:text-h2-l leading-10">
                {productInfo.productTitle}
              </h2>
            </div>

            <div className="mt-3 mb-5">
              <div className="bg-blue-100 rounded-3xl px-3 tablet-l:px-6 py-2 text-p-s w-fit">
                <span>{productInfo.warningPill}</span>
              </div>
            </div>

            <div>
              <span className="flex gap-3 font-semibold text-h2-s mb-2">
                {productInfo.hasDiscount && (
                  <s className="opacity-50">{productInfo.previousPrice}</s>
                )}
                {productInfo.currentPrice}
              </span>
              <span className="text-orange-500 text-[14px] font-semibold">
                {productInfo.highlight}
              </span>
            </div>
          </div>

          <div className="py-7">
            <div className="mb-5 desktop-s:mb-8">
              <p>{productInfo.productDesc}</p>
            </div>
            {productInfo.iconsSection && (
              <div className="mb-5 desktop-s:mb-8">
                <ul className="grid grid-cols-3 w-full items-center gap-x-4 gap-y-6 margin-0">
                  {productInfo.iconsSection.map((li) => (
                    <li
                      key={li.key}
                      className="my-0 mx-auto flex flex-col items-center gap-1 max-w-32 w-full"
                    >
                      <Image
                        src={li.iconHref}
                        width={25}
                        height={25}
                        className="mb-1"
                      />
                      <span className="text-center text-[14px] leading-4 font-semibold">
                        {li.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-col min-[650px]:flex-row desktop-s:flex-col">
              <div className="mb-6 font-medium text-[15px] min-[650px]:w-2/4 desktop-s:w-full">
                {productInfo.convincingText ? (
                  productInfo.convincingText.map((text) => (
                    <span className="block" key={text.key}>
                      {text.content}
                    </span>
                  ))
                ) : (
                  <>
                    <span className="block">
                      Free 2-Day Shipping, Free Returns.
                    </span>
                    <span className="block">100% Satisfaction Guarantee.</span>
                    <span className="block">3 Year Warranty</span>
                  </>
                )}
              </div>
              <Button
                variant="testLarge"
                className={`relative tablet-l large-btn-card w-full border-none shadow-none min-[650px]:w-2/4 desktop-s:w-full`}
              >
                <span className="z-10">Contratar</span>
              </Button>
            </div>

            <div className="mb-6 mt-12">
              <Accordion type="single" collapsible className="w-full max-w-4xl">
                {productInfo.questions &&
                  productInfo.questions.map((question) => (
                    <AccordionItem key={question.key} value={question.value}>
                      <AccordionTrigger
                        triggerPadding="py-2"
                        iconSize="h-5 w-5 tablet-l:h-7 w-7"
                        fontSize="tablet-l:text-p-l"
                      >
                        {question.question}
                      </AccordionTrigger>
                      <AccordionContent>{question.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
