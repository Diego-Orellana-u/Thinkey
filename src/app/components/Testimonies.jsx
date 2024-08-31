import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TestimonyCard from "./TestimonyCard";
import Heading2 from "./Heading2";

export default function Testimonies({ title, testimonies, sectionPadding }) {
  return (
    <div
      className={`wrapper text-p-l ${
        sectionPadding ? sectionPadding : "mb-28"
      }`}
    >
      <Heading2
        title={title}
        padding="mb-8 desktop-s:mb-12 desktop-l:mb-16 text-center"
      />
      <Carousel>
        <CarouselContent className="tablet-l:-ml-10 desktop-s:-ml-6 desktop-l:-ml-12">
          {testimonies.map((testimony) => (
            <CarouselItem
              key={testimony.name}
              className="min-[600px]:basis-1/2 tablet-l:pl-10 desktop-s:basis-1/3 desktop-s:pl-6 desktop-l:pl-12 pb-1"
            >
              <TestimonyCard {...testimony} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant="testSmall" component="testimonials" />
        <CarouselNext variant="testSmall" component="testimonials" />
      </Carousel>
    </div>
  );
}
