import Image from "next/image";

export default function PhotoCard({
    src,
    alt,
    title,
}: {
    src: string;
    alt: string;
    title: string;
}) {
    return (
        <div className="relative lg:w-80 lg:h-80 5xl:w-64 5xl:h-64 w-52 h-52 bg-white border-20 border-b-64 border-gray-50 shadow-lg rounded-sm overflow-hidden">
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                draggable={false}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-4">
                <h3 className="text-gray-300 font-bold text-xl italic font-(family-name:--font-caveat)">{title}</h3>
            </div>
        </div>
    );
}