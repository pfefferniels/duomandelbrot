import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Photos and video performances of Duo Mandelbrot — baroque violin and lute.",
  alternates: { canonical: "/media" },
};

const photos = [
  { src: "/images/3w4a6603.jpg", alt: "Duo Mandelbrot — performance still" },
  { src: "/images/3w4a6570.jpg", alt: "Duo Mandelbrot — performance still" },
  { src: "/images/3w4a6611.jpg", alt: "Duo Mandelbrot — performance still" },
  { src: "/images/3w4a6593.jpg", alt: "Duo Mandelbrot — performance still" },
];

const videos = [
  { id: "PAsIOHaSbNI", title: "Duo Mandelbrot — à toi (video collage I)" },
  { id: "cpsBNwhWEzI", title: "Duo Mandelbrot — à toi (video collage II)" },
];

export default function MediaPage() {
  return (
    <article className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <header className="mb-14 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-muted">Media</p>
        <h1 className="mt-3 font-serif text-5xl md:text-6xl">Media</h1>
      </header>

      <section className="mb-20">
        <h2 className="mb-8 font-serif text-3xl">Video</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {videos.map((v) => (
            <figure key={v.id} className="space-y-3">
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <figcaption className="text-sm text-muted">{v.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-serif text-3xl">Photographs</h2>
          <p className="text-xs uppercase tracking-wider text-muted">
            photos by Elam Rotem
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
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
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
