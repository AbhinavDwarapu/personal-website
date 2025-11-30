import BounceCards from "./bounce-notes";
import PhotoCard from "./photo-card";

export default function MyArt() {
    return (
        <BounceCards
            items={[
                <PhotoCard
                    src="https://cdzpi6btmsee6ggg.public.blob.vercel-storage.com/NightTree.jpg"
                    alt="A 3D rendering of a tree at night with the moon and stars in the background."
                    title="Midnight Retreat"
                />, <PhotoCard
                    src="https://cdzpi6btmsee6ggg.public.blob.vercel-storage.com/Grave%20Hill.jpg"
                    alt="A 3D rendering of a grave hill with the bright sun in the background."
                    title="Mourning"
                />, <PhotoCard
                    src="https://cdzpi6btmsee6ggg.public.blob.vercel-storage.com/TeddyByTree.jpg"
                    alt="A 3D rendering of a teddy bear laying by a tree stump."
                    title="Teddy Bear"
                />
            ]}
            enableHover
            fanDirection="top-right"
            radius={250}
        />
    );
}