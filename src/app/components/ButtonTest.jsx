export default function ButtonTest() {
  return (
    <div>
      <a
        className="group relative  inline-block focus:outline-none focus:ring"
        href="#"
      >
        <span className="absolute inset-0 translate-x-0 translate-y-0 bg-[#0240A3] transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"></span>

        <span className="relative inline-block border-2 text-white-body-color border-black-heading-color  px-8 py-3 text-sm font-bold uppercase tracking-widest">
          Download
        </span>
      </a>
    </div>
  );
}
