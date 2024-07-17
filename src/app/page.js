import Image from "next/image";
import test from "../../public/test.svg";

export default function Home() {
  return (
    <>
      <Image className="w-full" src={test} />
    </>
  );
}
