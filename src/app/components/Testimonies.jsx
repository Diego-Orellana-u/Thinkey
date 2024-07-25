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
    <div className="px-5 min-[425px]:px-7 text-lg mb-28">
      <h2 className="text-3xl font-semibold text-[#002A54] tracking-tight mb-8 text-center">
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
