export default function Warning({ text }) {
  return (
    <div className="mt-3 mb-5">
      <div className="bg-blue-100 rounded-3xl px-3 tablet-l:px-6 py-2 text-p-s w-fit">
        <span>{text}</span>
      </div>
    </div>
  );
}
