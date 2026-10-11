import Image from "next/image";

type TapedPhotoProps = {
    src: string;
    alt: string;
    caption?: string;
    priority?: boolean;
};

export default function TapedPhoto({
    src,
    alt,
    caption,
    priority = false,
}: TapedPhotoProps) {
    return (
        <figure className="relative rotate-[1deg]">
            {/* fita */}
            <div
                aria-hidden="true"
                className="
                    absolute
                    -top-4
                    left-1/2
                    z-20
                    h-8
                    w-28
                    -translate-x-1/2
                    -rotate-2
                    bg-[#d9c9a7]/70
                    shadow-sm
                    backdrop-blur-[1px]
                    "
            />

            <div className="relative aspect-[4/3] overflow-hidden bg-[var(--paper-dark)] p-2 shadow-[5px_8px_25px_rgba(0,0,0,0.12)]">
                <div className="relative h-full w-full overflow-hidden">
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        priority={priority}
                        sizes="(max-width: 768px) 100vw, 45vw"
                        className="object-cover"
                    />
                </div>
            </div>

            {caption && (
                <figcaption className="editorial mt-4 -rotate-1 text-right text-sm italic text-[var(--muted)]">
                    {caption}
                </figcaption>
            )}
        </figure>
    )
}