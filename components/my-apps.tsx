import BounceCards from "./bounce-notes";
import StickyNote from "./sticky-note";

export default function MyApps() {
  return (
    <BounceCards
      items={[
        <StickyNote
          title="MiniPomo"
          content="A TINY MacOS native app to keep track of time."
          link="https://github.com/AbhinavDwarapu/MiniPomo"
          color="blue"
          key="minipomo"
        />,
        <StickyNote
          title="Rephrase-Me.com"
          content="A web app to rephrase text, find synonyms, and format it to be more professional, casual, or fluent."
          link="https://www.rephrase-me.com/"
          color="pink"
          key="rephrase-me"
        />,
        <StickyNote
          title="InSynth"
          content="A small web audio synthesizer that takes input from a real MIDI keyboard."
          link="https://in-synth.vercel.app/"
          color="green"
          key="insynth"
        />,
        <StickyNote
          title="Research-Bot"
          content="An AI research assistant that gathers, synthesizes, and cites sources on any topic, with Slack integration."
          link="https://github.com/AbhinavDwarapu/Research-Bot"
          color="orange"
          key="research-bot"
        />,
        <StickyNote
          title="VE2.Studio"
          content="A live video editor with distributed rendering, file upload, and AI-generated widgets."
          link="https://ve2.studio/"
          color="purple"
          key="ve2-studio"
        />,
      ]}
      enableHover
      fanDirection="top-left"
      radius={300}
    />
  );
}
