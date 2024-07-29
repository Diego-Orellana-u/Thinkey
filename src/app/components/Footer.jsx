import FooterSubnav from "./FooterSubnav";
import Newsletter from "./Newsletter";
import { footerSubnavArr } from "data/footer";

export default function Footer() {
  return (
    <div>
      <div className="flex flex-col gap-9 mb-16 px-5 min-[425px]:px-7">
        {footerSubnavArr.map((info, index) => (
          <FooterSubnav key={info.name} {...info} />
        ))}
        <Newsletter />
      </div>

      <div className="flex justify-center border-t-[0.5px] border-[#888] py-2">
        <span className="text-[13px] text-[#444]">
          ® Thinkey, todos los derechos reservados 2024
        </span>
      </div>
    </div>
  );
}
