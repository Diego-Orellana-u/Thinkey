import Image from "next/image";
import phoneIcon from "../../assets/icons/phone-icon.svg";
import mailIcon from "../../assets/icons/mail-icon.svg";

export default function InfoBar() {
  return (
    <section className="relative text-xs info-bar z-10 py-2 justify-around flex items-center bg-slate-400">
      <div className="flex gap-2">
        <Image src={phoneIcon} />
        <div className="flex items-center">
          <span className="text-white pt-[3px]">+ 569 7791 7078</span>
        </div>
      </div>

      <div className="flex gap-2">
        <Image src={mailIcon} />
        <div className="flex items-center">
          <span className="text-white pt-[3px]">INFO@THINKEY.CL</span>
        </div>
      </div>
    </section>
  );
}
