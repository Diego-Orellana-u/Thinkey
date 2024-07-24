import Link from "next/link";
import { buttonVariants } from "./ui/button";

export default function ServicesCard() {
  return (
    <div className="bg-[#6159BC] px-4 py-9 flex flex-col gap-6 rounded-[20px] h-auto">
      <h3 className="text-2xl font-semibold">Familias</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
      </p>
      <Link
        href="/"
        className={`${buttonVariants({
          variant: "link",
        })} w-full rounded-[50px] bg-[#EA624A]`}
      >
        SEE MORE
      </Link>
    </div>
  );
}
