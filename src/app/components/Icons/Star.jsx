export default function Star({
  fillColor,
  x,
  y,
  starOpacity,
  zIndex,
  anyCss,
  position,
  width,
  height,
}) {
  return (
    <svg
      width={`${width ? width : "50"}`}
      height={`${height ? height : "50"}`}
      viewBox="0 0 145 145"
      className={`${fillColor && fillColor} ${
        position ? position : "absolute"
      } ${y && y} ${x && x} ${starOpacity && starOpacity} ${zIndex && zIndex} ${
        anyCss && anyCss
      }`}
    >
      <rect x="65.7355" width="14.0291" height="144.5" />
      <rect
        x="0.5"
        y="79.2646"
        width="14.0291"
        height="144.5"
        transform="rotate(-90 0.5 79.2646)"
      />
      <rect
        x="16.7015"
        y="26.1216"
        width="14.0291"
        height="144.5"
        transform="rotate(-45 16.7015 26.1216)"
      />
      <rect
        x="26.6216"
        y="128.298"
        width="14.0291"
        height="144.5"
        transform="rotate(-135 26.6216 128.298)"
      />
    </svg>
  );
}
