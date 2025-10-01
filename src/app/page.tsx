import { DotBackground } from "@/components/DotBackground";
import Hero from "@/components/Hero/Hero";
import PreviousRoles from "@/components/Hero/PreviousRoles";

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <div className="relative flex w-full h-screen items-center justify-center">
        <DotBackground />
      </div>
      <div className="absolute inset-0 flex items-center h-screen justify-center w-full">
        <div className="flex flex-col w-full justify-center items-center">
          <Hero />
          <PreviousRoles />
        </div>
      </div>
    </main>
  );
}