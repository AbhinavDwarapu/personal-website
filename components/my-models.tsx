import BounceCards from "./bounce-notes";
import StickyNote from "./sticky-note";

export default function MLModels() {
    return (
        <BounceCards
            items={[
                <StickyNote
                    title="Vision Recontruction Pipeline"
                    content="A CNN+AE TensorFlow pipeline to recreate a patient's vision from an fMRI dataset."
                    link="https://github.com/AbhinavDwarapu/Vision-Reconstruction-Pipeline"
                    color="orange"
                />,
                <StickyNote
                    title="Beat Tracker"
                    content="A beat tracking implementation using PyTorch and TCNs."
                    link="https://github.com/AbhinavDwarapu/beat-tracker-using-TCNs"
                    color="purple"
                />,
                <StickyNote
                    title="Shazam Reimpl."
                    content="An audio search re-implementation of the original Shazam audio identification system."
                    link="https://github.com/AbhinavDwarapu/shazam-search-algorithm"
                    color="blue"
                />,
                <StickyNote
                    title="Source Sep. & Chord Recognition"
                    content="An investigation on combining a source separation model (spleeter) and a chord recognition model (a custom CNN-BiLSTM model)."
                    link="https://github.com/AbhinavDwarapu/audio-source-separation-and-chord-recognition"
                    color="pink"
                />,
                <StickyNote
                    title="Guitar Music Transcription"
                    content="Reimplemented several deep learning transcription models, for guitar tablature transcription using novel datasets."
                    color="yellow"
                />,
            ]}
            enableHover
            fanDirection="bottom-left"
            radius={200}
        />
    );
}