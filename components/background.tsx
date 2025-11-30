export function Background() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px]">
      {/* Top-left corner */}
      <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-gray-300 rounded-tl-lg"></div>
      {/* Top-right corner */}
      <div className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-gray-300 rounded-tr-lg"></div>
      {/* Bottom-left corner */}
      <div className="absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-gray-300 rounded-bl-lg"></div>
      {/* Bottom-right corner */}
      <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-gray-300 rounded-br-lg"></div>
      <div className="hidden desktop:block desktop:absolute text-4xl -rotate-16 bottom-16 right-16 font-(family-name:--font-caveat)">
        My Apps
      </div>
      <div className="hidden desktop:block desktop:absolute text-4xl right-12 top-14 rotate-16 font-(family-name:--font-caveat)">
        My ML Models
      </div>
      <div className="hidden desktop:block desktop:absolute text-4xl left-12 bottom-14 rotate-5 font-(family-name:--font-caveat)">
        My Art :)
      </div>
    </div>
  );
}
