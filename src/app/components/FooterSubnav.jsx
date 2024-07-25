import Link from "next/link";

export default function FooterSubnav(info) {
  return (
    <div>
      <div className="mb-3">
        <span className="font-semibold text-lg">{info.name}</span>
      </div>
      <div className="flex flex-col gap-4">
        {info.links.map((subnav) => (
          <Link key={subnav.link} href={subnav.link} className="">
            {subnav.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
