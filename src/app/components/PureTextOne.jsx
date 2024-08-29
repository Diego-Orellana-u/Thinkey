import Heading2 from "./Heading2";
import Star from "./Icons/Star";

export default function PureTextOne({ sectionPadding, sectionMargin }) {
  return (
    <section
      className={` ${
        sectionPadding ? sectionPadding : "py-20"
      } bg-accent-800 flex flex-col wrapper text-white`}
    >
      <div className="text-left mb-4 mobile-l:mb-7 tablet-l:max-w-[450px] desktop-l:max-w-[850px]">
        <Heading2
          orientation="text-left"
          color="text-white"
          title="¿Qué Son los Cumpleaños Científicos?"
          padding={"pb-5 tablet-l:pb-10"}
        />
      </div>

      <div className="flex flex-col gap-5 mobile-m:pl-20 items-end">
        <p className="max-w-[450px] desktop-s:max-w-full desktop-s:w-[588px] text-p-l tablet-l:text-p-xl tablet-l:leading-7 text-white-body-color">
          En THINKey, los cumpleaños no solo son una celebración, sino una
          oportunidad para que los niños exploren, descubran y se enamoren de la
          ciencia.
        </p>
        <p className="max-w-[450px] desktop-s:max-w-full desktop-s:w-[588px] text-p-l tablet-l:text-p-xl tablet-l:leading-7 text-white-body-color">
          Nuestros cumpleaños científicos combinan juegos, experimentos
          interactivos y actividades educativas para crear una experiencia única
          que los niños recordarán por siempre.
        </p>
        <div className="relative flex justify-end left-0">
          <Star
            fillColor="fill-[#333]"
            y="top-1/4 desktop-s:bottom-0"
            x="-left-[90px] tablet-l:-left-10"
            starOpacity="opacity-90"
            zIndex=""
            anyCss="hidden mobile-m:block"
            position="absolute tablet-l:relative"
            width="70"
            height="70"
          />
          <p className="max-w-[450px] desktop-s:max-w-full desktop-s:w-[588px] text-p-l tablet-l:text-p-xl tablet-l:leading-7 text-white-body-color">
            Cada cumpleaños es dirigido por nuestros entusiastas 'científicos
            locos', que se aseguran de que cada niño participe y se divierta
            mientras aprende.
          </p>
        </div>
      </div>
    </section>
  );
}
