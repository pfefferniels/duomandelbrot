import Image from "next/image";
import type { Metadata } from "next";
import { Hero } from "@/components/Hero";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Photos and video performances of Duo Mandelbrot — baroque violin and lute.",
  alternates: { canonical: "/media" },
};

const photos = [
  { src: "/images/3w4a6603.jpg", alt: "Duo Mandelbrot" },
  { src: "/images/3w4a6570.jpg", alt: "Duo Mandelbrot" },
  { src: "/images/3w4a6611.jpg", alt: "Duo Mandelbrot" },
  { src: "/images/3w4a6593.jpg", alt: "Duo Mandelbrot" },
];

const videoIds = ["PAsIOHaSbNI", "cpsBNwhWEzI"];

export default function MediaPage() {
  return (
    <>
      <Hero
        image="/images/banners/media.png"
        alt=""
        title="Media"
      />

      <article className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2">
          {videoIds.map((id) => (
            <div key={id} className="relative aspect-video w-full overflow-hidden bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${id}`}
                title="Duo Mandelbrot"
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          ))}
        </div>

        <p className="mt-16 text-center text-sm text-muted">
          photos by Elam Rotem
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {photos.map((p) => (
            <div
              key={p.src}
              className="relative aspect-[3/2] w-full overflow-hidden"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 1024px) 600px, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </article>
    </>
  );
}
