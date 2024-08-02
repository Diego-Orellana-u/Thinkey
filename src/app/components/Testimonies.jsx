import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TestimonyCard from "./TestimonyCard";

export default function Testimonies() {
  const testimonies = [
    {
      name: "Roberto John",
      testimony:
        "Thinkey's expertise in creating interactive scientific activities brought a unique and dynamic element to our event.",
      position: "Gerente general de Colbún",
      logo: "/mui-logo.svg",
      portrait: "/testimonies-portrait.jpg",
    },
    {
      name: "Roberto John",
      testimony:
        "Thinkey's expertise in creating interactive scientific activities brought a unique and dynamic element to our event.",
      position: "Gerente general de Colbún",
      logo: "/mui-logo.svg",
      portrait: "/testimonies-portrait.jpg",
    },
  ];
  return (
    <div className="px-5 mobile-l:px-7 text-p-l mb-28">
      <h2 className="text-h2-s tablet-s:text-h2-l font-bold text-[#002A54] desktop-l:text-h2-xl mb-8 text-center">
        What does our clients say about us?
      </h2>
      <Carousel>
        <CarouselContent>
          {testimonies.map((testimony) => (
            <CarouselItem key={testimony.name}>
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
