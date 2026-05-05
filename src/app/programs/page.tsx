import type { Metadata } from "next";
import { Hero } from "@/components/Hero";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "à toi — a reflection on sound across centuries, performed on baroque lute and violin by Duo Mandelbrot.",
  alternates: { canonical: "/programs" },
};

export default function ProgramsPage() {
  return (
    <>
      <Hero
        image="/images/banners/programs.png"
        alt=""
        title="Programs"
      />

      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <h2 className="text-center font-serif text-4xl italic md:text-5xl">
          à toi
        </h2>
        <p className="mt-3 text-center text-lg text-muted">
          a reflection on sound across centuries
        </p>

        <div className="mt-12 space-y-6 text-lg leading-8 text-foreground/90">
          <p>
            <em>à toi</em> is a reflection on the ephemeral nature of sound as
            it intermingles and coexists in time and space, with the focus
            being less on the historical context of a given composition and
            more on the music itself as it exists today. We have made two
            short video-collages with music from this programme during a
            3-week residency in the south of France. Inspired by the varied
            landscape of rolling waves, stoic mountains, a serene mediaeval
            church, and the melancholic atmosphere of a deserted beach town,
            our programme aims to seamlessly flow together and create an
            intimate sound experience using the colours of many centuries.
          </p>
          <p>
            Using the baroque lute and violin, we search for freedom through
            the sound of our instruments with improvisation and the
            side-by-side exploration of music by Bartók, Debussy, Satie,
            Rebel, and De Visée.
          </p>
        </div>
      </article>
    </>
  );
}
