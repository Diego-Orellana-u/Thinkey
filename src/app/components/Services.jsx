import Heading2 from "./Heading2";
import ServicesCard from "./ServicesCard";

export default function Services({ services, sectionPadding }) {
  return (
    <div className={`relative text-center mb-24 ${sectionPadding}`}>
      <Heading2
        title="Una nueva forma de acercar la ciencia a los niños"
        padding="mb-10 desktop-s:mb-7 desktop-l:mb-14"
      />

      <div className="wrapper flex flex-col tablet-s:flex-row tablet-s:flex-wrap tablet-s:justify-center desktop-s:justify-between gap-9 ">
        {services.map((service) => (
          <ServicesCard key={service.keys} {...service} />
        ))}
      </div>
    </div>
  );
}
