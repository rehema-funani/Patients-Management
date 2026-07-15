export default function Card({
  children,
  accent = false,
}: {
  children: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <div
      className={`bg-white rounded-xl border border-[#DCE4E4] p-8 ${
        accent ? "border-t-[3px] border-t-[#1B4B91]" : ""
      }`}
    >
      {children}
    </div>
  );
}