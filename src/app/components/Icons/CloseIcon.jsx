export default function CloseIcon({ w, h, color }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color ? color : "#222"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${w ? w : "w-5"} ${h ? h : "h-5"}`}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
