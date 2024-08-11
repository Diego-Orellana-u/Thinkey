import Link from "next/link";

export default function ButtonLink({ href, className, title }) {
  return (
    <Link href={href} className={className}>
      {title}
    </Link>
  );
}
