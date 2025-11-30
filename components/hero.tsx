import Image from "next/image";

export default function Hero() {
  return (
    <div className="text-center xl:text-7xl lg:text-6xl text-5xl font-(family-name:--font-caveat) space-y-4">
      <h1>Hey!</h1>
      <h1>I&apos;m Abhinav,</h1>
      <h1 className="line-through">A scatterbrain</h1>
      <h1>An Engineer.</h1>
      <Links />
    </div>
  );
}

function Links() {
  return (
    <div className="flex flex-row justify-center items-center gap-4 mt-8">
      <Link
        href="https://github.com/abhinavdwarapu"
        src="/github.svg"
        alt="GitHub"
        width={40}
        height={40}
      />
      <Link
        href="https://www.linkedin.com/in/abhinav-dwarapu"
        src="/linkedin.png"
        alt="LinkedIn"
        width={40}
        height={40}
      />
      <Link
        href="https://abhinavd.artstation.com/"
        src="/artstation.svg"
        alt="ArtStation"
        width={40}
        height={40}
        className="scale-150"
      />
    </div>
  );
}

function Link({ href, src, alt, width = 40, height = 40, className = "" }: { href: string; src: string; alt: string; width?: number; height?: number; className?: string }) {
  return (
    <div className="w-14 h-14 p-2 outline-dashed outline-2 rounded-xl outline-gray-300 hover:outline-gray-400 transition-all">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Image src={src} alt={alt} width={width} height={height} className={`object-contain ${className}`} />
      </a>
    </div>
  );
}

