import Heading2 from "./Heading2";
import ServicesCard from "./ServicesCard";

export default function Services({ servicesInfo }) {
  return (
    <div className={`relative text-center ${servicesInfo.sectionPadding}`}>
      <Heading2 title={servicesInfo.title} padding={servicesInfo.titleCss} />

      <div className="wrapper flex flex-col tablet-s:flex-row tablet-s:flex-wrap tablet-s:justify-center desktop-s:justify-between gap-9 ">
        {servicesInfo.cardInfo.map((service) => (
          <ServicesCard key={service.keys} {...service} />
        ))}
      </div>
    </div>
  );
}
