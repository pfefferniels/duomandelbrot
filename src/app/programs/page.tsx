import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programmes",
  description:
    "à toi — a reflection on sound across centuries, performed on baroque lute and violin by Duo Mandelbrot.",
  alternates: { canonical: "/programs" },
};

export default function ProgramsPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <header className="mb-16">
        <p className="text-sm uppercase tracking-[0.3em] text-muted">Programmes</p>
        <h1 className="mt-3 font-serif text-5xl md:text-6xl">Programmes</h1>
      </header>

      <section>
        <h2 className="font-serif text-4xl italic md:text-5xl">à toi</h2>
        <p className="mt-3 text-lg text-muted">
          a reflection on sound across centuries
        </p>

        <div className="mt-10 space-y-6 text-lg leading-8 text-foreground/90">
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

        <ul className="mt-12 flex flex-wrap gap-2 border-t border-rule pt-8 text-sm text-muted">
          <li className="rounded-full border border-rule px-4 py-1">Bartók</li>
          <li className="rounded-full border border-rule px-4 py-1">Debussy</li>
          <li className="rounded-full border border-rule px-4 py-1">Satie</li>
          <li className="rounded-full border border-rule px-4 py-1">Rebel</li>
          <li className="rounded-full border border-rule px-4 py-1">De Visée</li>
        </ul>
      </section>
    </article>
  );
}
