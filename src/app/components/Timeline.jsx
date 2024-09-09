"use client";
import VerticalLine from "@/components/VerticalLine";
import { useRef } from "react";

export default function Timeline() {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      className="wrapper h-[800px] relative border border-red-500"
    >
      <VerticalLine
        height="h-[800px]"
        strokeWidth="12"
        containerRef={containerRef}
      />
      <div className="mt-20 flex flex-col gap-16">
        <div className="p-5 h-fit  service-shadow bg-white w-full">
          <span className="block text-p-l font-semibold mb-3">
            17 de enero de 2008
          </span>
          <p>
            ThinKey crea su primer evento cientifico para 10 niños de forma
            gratuita, con la unica misión de entregar ciencia de calidad y
            entretenida.
          </p>
        </div>

        <div className="p-5 h-fit service-shadow bg-white w-full">
          <span className="block text-p-l font-semibold mb-3">
            20 de marzo de 2010
          </span>
          <p>
            Diego, nuestro fundador, establece un hito en la enseñanza
            cientifica en Chile, logrando enseñar a más de 1000 niños de
            diversas escuelas en todo el país.
          </p>
        </div>
      </div>
    </section>
  );
}
