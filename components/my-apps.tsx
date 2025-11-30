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
                />,
                <StickyNote
                    title="Rephrase-Me.com"
                    content="A web app to rephrase text, find synonyms, and format it to be more professional, casual, or fluent."
                    link="https://www.rephrase-me.com/"
                    color="pink"
                />,
                <StickyNote
                    title="InSynth"
                    content="A small web audio synthesizer that takes input from a real MIDI keyboard."
                    link="https://in-synth.vercel.app/"
                    color="green"
                />,
                <StickyNote
                    title="Task Planner"
                    content="A simple task planner with a timer."
                    link="https://taskplanning.netlify.app/"
                />,
            ]}
            enableHover
            fanDirection="top-left"
            radius={300}
        />
    );
}