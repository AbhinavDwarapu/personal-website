import Hero from "./hero";
import { Background } from "./background";
import MLModels from "./my-models";
import MyApps from "./my-apps";
import { BounceCardsProvider } from "../contexts/bounce-cards-context";
import MyArt from "./my-art";

export default function HomePage() {
  return (
    <BounceCardsProvider>
      <div className="relative flex min-h-screen items-center justify-center">
        <Background />
        <Hero />
        <div className="hidden desktop:block absolute top-64 right-64 transform translate-x-1/2 -translate-y-1/2">
          <MLModels />
        </div>
        <div className="hidden desktop:block absolute bottom-48 2xl:right-110 right-80 transform translate-x-1/2 translate-y-1/2">
          <MyApps />
        </div>
        <div className="hidden desktop:block absolute bottom-82 2xl:left-16 -left-20 transform translate-x-1/2 translate-y-1/2">
          <MyArt />
        </div>
        {/* Mobile message */}
        <div className="desktop:hidden absolute bottom-24 left-0 right-0 text-center text-2xl font-(family-name:--font-caveat) text-gray-600">
          I'm better on desktop :)
        </div>
      </div>
    </BounceCardsProvider>
  );
}
