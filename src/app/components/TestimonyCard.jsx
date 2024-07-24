import Image from "next/image";

export default function TestimonyCard(info) {
  return (
    <div className="rounded-[20px] bg-white py-6 px-5">
      <div className="flex justify-between mb-4">
        <div>
          <Image className="pt-6" src={info.logo} width={108} height={45} />
        </div>
        <div className="w-[40%]">
          <Image src={info.portrait} width={129} height={152} />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <span className="font-medium text-2xl">{info.name}</span>
        <p className="mb-3">{info.testimony}</p>
        <span className="text-sm">{info.position}</span>
      </div>
    </div>
  );
}
