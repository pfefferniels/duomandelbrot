import Image from "next/image";
import Link from "next/link";
import { siteUrl, contactEmail } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "Duo Mandelbrot",
  url: siteUrl,
  email: contactEmail,
  genre: ["Baroque", "Early Music", "Classical"],
  member: [
    {
      "@type": "Person",
      name: "Maya Webne-Behrman",
      nationality: "American",
      jobTitle: "Baroque violinist",
    },
    {
      "@type": "Person",
      name: "Niels Pfeffer",
      nationality: "German",
      jobTitle: "Lutenist",
    },
  ],
  sameAs: ["https://www.youtube.com/@duo.mandelbrot"],
  description:
    "Duo Mandelbrot is dedicated to exploring music throughout the centuries via the baroque violin and lute.",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="relative">
        <div className="relative h-[calc(100vh-5rem)] min-h-[520px] w-full overflow-hidden">
          <Image
            src="/images/3w4a6603.jpg"
            alt="Duo Mandelbrot — Maya Webne-Behrman and Niels Pfeffer"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60" />
          <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-start justify-end px-6 pb-20 text-[#f7f3ec]">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#f7f3ec]/80">
              Baroque violin & lute
            </p>
            <h1 className="font-serif text-5xl leading-tight md:text-7xl">
              Duo Mandelbrot
            </h1>
            <p className="mt-4 max-w-xl text-base text-[#f7f3ec]/90 md:text-lg">
              Music throughout the centuries — explored on baroque violin and
              lute by Maya Webne-Behrman and Niels Pfeffer.
            </p>
            <div className="mt-8 flex gap-4 text-sm uppercase tracking-[0.18em]">
              <Link
                href="/programs"
                className="border border-[#f7f3ec]/70 px-5 py-3 transition-colors hover:bg-[#f7f3ec] hover:text-foreground"
              >
                Programmes
              </Link>
              <Link
                href="/about"
                className="border border-transparent px-5 py-3 underline-offset-4 hover:underline"
              >
                About the duo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="font-serif text-2xl leading-relaxed text-foreground md:text-3xl">
          “The exploration of musical intimacy and sound — colour and texture
          across centuries.”
        </p>
      </section>
    </>
  );
}
