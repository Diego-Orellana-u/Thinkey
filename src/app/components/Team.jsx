import Image from "next/image";

export default function Team() {
  return (
    <div className="wrapper">
      <div className="flex flex-col bg-slate-600 rounded-[10px]">
        <Image
          src="/testphoto.png"
          width={300}
          height={300}
          className="rounded-[10px] w-full"
        />
        <div className="p-5 bg-yellowish-white-bg">
          <div>
            <span className="text-h3-s block">Bonnie Green</span>
            <span className="block">CEO & Web Developer</span>
            <p>
              Bonnie drives the technical strategy of the flowbite platform and
              brand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
