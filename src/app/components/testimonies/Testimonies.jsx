import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TestimonyCard from "@/components/testimonies/TestimonyCard";
import Heading2 from "../Heading2";
import HeadingTwoHighlight from "../HeadingTwoHighlight";

export default function Testimonies({ testimoniesInfo }) {
  return (
    <div
      className={`wrapper text-p-l ${
        testimoniesInfo.sectionPadding
          ? testimoniesInfo.sectionPadding
          : "mb-28"
      }`}
    >
      <HeadingTwoHighlight
        title={testimoniesInfo.title}
        titleCss={testimoniesInfo.titleCss}
      />
      <Carousel>
        <CarouselContent className="tablet-l:-ml-10 desktop-s:-ml-6 desktop-l:-ml-12">
          {testimoniesInfo.testimonies.map((testimony) => (
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
