import Image from "next/image";
import Heading2 from "./Heading2";
import ServicesCard from "./ServicesCard";
import HeadingTwoHighlight from "@/components/HeadingTwoHighlight";

export default function Services({ servicesInfo }) {
  return (
    <div className={`relative text-center ${servicesInfo.sectionPadding}`}>
      {servicesInfo.highlightTitle ? (
        <HeadingTwoHighlight
          titleCss={servicesInfo.titleCss}
          first={servicesInfo.title}
          second={servicesInfo.highlightTitle}
          highlightTitleCss={servicesInfo.highlightTitleCss}
        />
      ) : (
        <Heading2 title={servicesInfo.title} padding={servicesInfo.titleCss} />
      )}

      <div className="wrapper flex flex-col tablet-s:flex-row tablet-s:flex-wrap tablet-s:justify-center desktop-s:justify-between gap-9 ">
        {servicesInfo.cardInfo.map((service) => (
          <ServicesCard key={service.keys} {...service} />
        ))}
      </div>
    </div>
  );
}
