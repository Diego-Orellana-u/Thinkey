export default function Heading2({ title, color, padding, orientation }) {
  return (
    <h2
      className={`${
        color ? color : "text-main-heading-color"
      } leading-9 tablet-l:leading-10 text-h2-s tablet-s:text-h2-l font-bold tracking-tight desktop-l:text-h2-xl desktop-l:leading-[67px] ${
        orientation ? orientation : "text-center"
      } ${padding && padding}`}
    >
      {title}
    </h2>
  );
}
