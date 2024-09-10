export default function OnlyTextCenter({ info }) {
  return (
    <section
      className={`${
        info.sectionPadding && info.sectionPadding
      } w-full wrapper flex items-center justify-center`}
    >
      <div className="w-full max-w-[830px] font-medium text-[2.1rem] desktop-s:text-[3.1rem] text-center show-circled-italic leading-[1.22]">
        <p>
          {info.paragraph &&
            info.paragraph.map((word) =>
              word.highlight ? (
                <em key={word.key}>{word.text}</em>
              ) : (
                <span key={word.key}> {word.text} </span>
              )
            )}
        </p>
      </div>
    </section>
  );
}
