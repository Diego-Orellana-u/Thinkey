import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TestimonyCard from "./TestimonyCard";
import { testimonies } from "data/testimonies";

export default function Testimonies() {
  return (
    <div className="px-5 mobile-l:px-7 tablet-xl:px-12 desktop-l:px-[92px] text-p-l mb-28">
      <h2 className="text-h2-s tablet-s:text-h2-l font-bold text-[#002A54] desktop-l:text-h2-xl mb-8 desktop-s:mb-12 desktop-l:mb-16 text-center">
        What our clients say about us
      </h2>
      <Carousel>
        <CarouselContent className="tablet-l:-ml-10 desktop-s:-ml-6 desktop-l:-ml-12">
          {testimonies.map((testimony) => (
            <CarouselItem
              key={testimony.name}
              className="min-[600px]:basis-1/2 tablet-l:pl-10 desktop-s:basis-1/3 desktop-s:pl-6 desktop-l:pl-12"
            >
              <TestimonyCard {...testimony} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
