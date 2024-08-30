import Image from "next/image";
import Heading2 from "./Heading2";

export default function Product() {
  return (
    <section>
      <div className="flex flex-col">
        <div>{/* carrousel from shadcn */}</div>

        <div>
          <div>
            <Heading2 />
          </div>
        </div>
      </div>
    </section>
  );
}
