import Image from "next/image";
import test from "../../public/test.svg";

export default function Home() {
  return (
    <>
      <div className="">
        <Image className="w-full absolute top-0" src={test} />
      </div>
    </>
  );
}
