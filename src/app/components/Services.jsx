import Heading2 from "./Heading2";
import ServicesCard from "./ServicesCard";

export default function Services({ services }) {
  return (
    <div className="wrapper desktop-l:pb-24 text-center mb-24">
      <Heading2
        title="Una nueva forma de acercar la ciencia a los niños"
        padding="mb-10 desktop-s:mb-7 desktop-l:mb-14"
      />

      <div className="flex flex-col tablet-s:flex-row tablet-s:flex-wrap tablet-s:justify-center desktop-s:justify-between gap-9 ">
        {services.map((service) => (
          <ServicesCard key={service.keys} {...service} />
        ))}
      </div>
    </div>
  );
}
