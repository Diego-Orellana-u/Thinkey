"use client";

import { useEffect, useRef } from "react";

export default function VerticalLine({ height, strokeWidth, containerRef }) {
  const pathRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const path = pathRef.current;
    const circle = circleRef.current;
    const pathLength = path.getTotalLength();

    path.style.strokeDasharray = `${pathLength}`;

    let ticking = false;

    const updatePath = () => {
      const containerRect = container.getBoundingClientRect();
      const viewportMiddle = window.innerHeight / 2;

      let progress =
        (viewportMiddle - containerRect.top) / containerRect.height;

      progress = Math.max(0, Math.min(1, progress));

      const drawLength = pathLength * progress;
      path.style.strokeDashoffset = pathLength - drawLength;

      const circlePosition = drawLength;
      circle.style.transform = `translateY(${circlePosition}px)`;

      circle.style.opacity = circlePosition > 0 ? 1 : 0;
      path.style.opacity = circlePosition > 0 ? 1 : 0;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updatePath();
          ticking = false;
        });
        ticking = true;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          window.addEventListener("scroll", handleScroll);
          handleScroll();
        } else {
          window.removeEventListener("scroll", handleScroll);
        }
      },
      { threshold: 0 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="-z-50 absolute top-0 left-0 w-full h-full text-center overflow-hidden flex items-center justify-center">
      <svg
        viewBox="0 0 20 1030"
        fill="none"
        className="inline-block h-full w-10"
        preserveAspectRatio="xMidYMax meet"
      >
        <path
          ref={pathRef}
          d="M10 0V1030"
          stroke="black"
          strokeWidth={strokeWidth}
          className="timeline-path-transition"
          style={{ opacity: 0 }}
          strokeDashoffset={1030}
        />
        <circle
          ref={circleRef}
          cx="10"
          cy="0"
          r={strokeWidth / 2}
          fill="black"
          className="timeline-path-transition"
          style={{
            transform: "translateY(-6px)",
            opacity: 0,
          }}
        />
      </svg>
    </div>
  );
}
