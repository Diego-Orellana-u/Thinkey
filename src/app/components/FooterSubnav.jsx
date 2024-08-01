import Link from "next/link";

export default function FooterSubnav(info) {
  return (
    <div className="max-w-fit">
      <div className="mb-3">
        <span className="font-semibold text-p-l">{info.name}</span>
      </div>
      <div className="flex flex-col gap-4">
        {info.links.map((subnav) => (
          <Link key={subnav.link} href={subnav.link} className="max-w-fit">
            {subnav.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
