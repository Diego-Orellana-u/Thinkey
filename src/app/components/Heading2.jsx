export default function Heading2({ title, color, padding }) {
  return (
    <h2
      className={`${
        color ? color : "text-main-heading-color"
      } text-h2-s tablet-s:text-h2-l font-bold tracking-tight desktop-l:text-h2-xl desktop-l:leading-[67px] ${
        padding && padding
      }`}
    >
      {title}
    </h2>
  );
}
