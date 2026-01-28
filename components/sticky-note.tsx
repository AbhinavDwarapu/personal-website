type StickyNoteColor = "yellow" | "blue" | "pink" | "green" | "orange" | "purple";

const colorMap: Record<StickyNoteColor, string> = {
  yellow: "bg-yellow-200",
  blue: "bg-blue-200",
  pink: "bg-pink-200",
  green: "bg-green-200",
  orange: "bg-orange-200",
  purple: "bg-purple-200",
};

export default function StickyNote({
  title,
  content,
  link,
  color = "yellow",
}: {
  title: string;
  content?: string;
  link?: string;
  color?: StickyNoteColor;
}) {
  const bgColor = colorMap[color];

  const NoteContent = (
    <div className="relative">
      <div
        className={`${bgColor} xl:w-74 xl:min-h-62 w-64 min-h-52`}
        style={{
          clipPath: `polygon(0 0, 100% 0, 100% calc(100% - ${32}px), calc(100% - ${32}px) 100%, 0 100%)`,
          borderRadius: "0.5rem 0.5rem 0.5rem 0.5rem",
        }}
      >
        <div className="flex flex-col w-full h-full">
          <h1 className="pt-8 pl-2 pr-2 font-(family-name:--font-caveat) text-left text-3xl font-bold w-full">
            {title}
          </h1>
          <p className="p-4 font-(family-name:--font-indie-flower) text-sm font-semibold">
            {content}
          </p>
        </div>
      </div>

      {/* Folded Corner */}
      <div
        className="absolute bottom-0 right-0"
        style={{
          width: `${32}px`,
          height: `${32}px`,
        }}
      >
        <div
          className="absolute bottom-0 right-0"
          style={{
            width: `${32}px`,
            height: `${32}px`,
          }}
        >
          <div
            className={`w-full h-full absolute inset-0 ${bgColor}`}
            style={{
              filter: "brightness(0.90)",
              clipPath: "polygon(0 0, 0 100%, 100% 0)",
              borderRadius: "0 0 0 4px",
            }}
          />
        </div>
      </div>

      {/* Gray "sticked" part */}
      <div className="absolute top-0 left-0 right-0 h-12 rounded-t-lg bg-black/10 pointer-events-none mask-b-from-yellow-200 mask-b-from-20% mask-b-to-transparent" />
    </div>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block cursor-pointer"
      >
        {NoteContent}
      </a>
    );
  }

  return NoteContent;
}
