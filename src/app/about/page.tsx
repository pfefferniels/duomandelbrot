import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Duo Mandelbrot — Maya Webne-Behrman (USA) and Niels Pfeffer (Germany) — co-directors and historical performance specialists on baroque violin and lute.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <header className="mb-14">
        <p className="text-sm uppercase tracking-[0.3em] text-muted">About</p>
        <h1 className="mt-3 font-serif text-5xl md:text-6xl">Biography</h1>
      </header>

      <div className="space-y-6 text-lg leading-8 text-foreground/90">
        <p>
          <strong className="font-semibold">Duo Mandelbrot</strong> is dedicated
          to exploring music throughout the centuries via the baroque violin
          and lute. Maya Webne-Behrman (USA) and Niels Pfeffer (Germany),
          co-directors of <em>Duo Mandelbrot</em>, met at the Schola Cantorum
          Basiliensis, where they both completed masters degrees in the study
          of historical performance practice from Renaissance through the
          Romantic periods under the direction of Leila Schayegh,
          Jörg-Andreas Bötticher, Amandine Beyer, and Julian Behr.
        </p>
        <p>
          Individually, Maya and Niels are sought-after freelance musicians all
          over Europe and abroad, having performed with Rudolf Lutz and the
          Bachstiftung, Holland Baroque, Leila Schayegh, René Jacobs,
          Václav Luks, and more.
        </p>
        <p>
          Both scholars of 17th- and 18th-century historical performance
          practice, Maya and Niels focus on the effects of colour and texture
          in their modest instrumentation, creating music in a fulfilling and
          detailed manner. Through the exploration of musical intimacy and
          sound, <em>Duo Mandelbrot</em> delves into repertoire from an array
          of periods and styles, with particular interest in and inspiration
          from folk music, the impressionist period, improvisation, playing
          from memory, and the fusing of all these methods of music-making to
          create an engaging sonic experience.
        </p>
        <p>
          <em>Duo Mandelbrot</em> was awarded a residency with Les Amis de
          l&apos;Esparrou through the Odyssée Artist-in-Residency Programme,
          which allowed Maya and Niels to pursue their project about intimacy
          through music, using their baroque instruments to explore the vast
          array of sound-colours throughout the centuries. This residency
          resulted in their newly-developed programme, <em>à toi</em>, which
          they performed at the Utrecht Fringe Festival in 2024.
        </p>
      </div>

      <hr className="my-20 border-rule" />

      <section id="maya" className="mb-24 scroll-mt-24">
        <div className="mb-10 grid gap-8 md:grid-cols-[260px_1fr] md:items-end">
          <figure>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/photo-maya.jpg"
                alt="Maya Webne-Behrman"
                fill
                sizes="(min-width: 768px) 260px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-2 text-xs uppercase tracking-wider text-muted">
              photo by Elam Rotem
            </figcaption>
          </figure>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted">
              Musician
            </p>
            <h2 className="mt-2 font-serif text-4xl md:text-5xl">
              Maya Webne-Behrman
            </h2>
          </div>
        </div>
        <div className="space-y-6 text-lg leading-8 text-foreground/90">
          <p>
            <strong className="font-semibold">Maya Webne-Behrman</strong> is an
            American violinist and multi-instrumentalist specialising in
            historical stringed instruments from the Mediaeval to Romantic
            periods. Performing regularly on the baroque violin, viola,
            mediaeval fiddle, and viola da gamba, Maya is in high demand as a
            chamber and orchestral musician, as well as a soloist. Celebrated
            for her sensitive musicality, wide use of colours, and empathic
            nature, Maya performs throughout Europe and the Americas. Having
            had the pleasure of playing at exciting venues, including
            Carnegie Hall, the Amsterdam Concertgebouw, and even atop a
            beautiful mountain in the Pyrenees, Maya has appeared with
            inspiring artists such as Amandine Beyer, Leila Schayegh,
            Jörg-Andreas Bötticher, René Jacobs, Václav Luks, Rachel Podger,
            ARTEK, and Holland Baroque.
          </p>
          <p>
            Maya co-directs the ensemble <em>pseudonym</em>, which is
            comprised of traverso, violin, gamba, and harpsichord.{" "}
            <em>pseudonym</em>&apos;s performances and research redefine the
            standards of modern-day historical performance practice by shining
            a light on the unique role of the traverso in 17
            <sup>th</sup>-century repertoire, the fluid implementation of
            improvisation, and the importance of rhetoric. Maya is also
            co-director of a long-standing duo, Mandelbrot, with lutenist
            Niels Pfeffer. Mandelbrot explores the intimate sound-relationship
            between the lute and violin through repertoire spanning all
            periods without borders. Having recently completed a 3-week
            residency through the ODYSSEE Program and the Ministère de la
            Culture with Les Amis de l&apos;Esparrou, Mandelbrot established a
            new program intertwining French baroque music and French
            impressionist music, utilising their strengths as researchers and
            performers to create an intuitive experience that celebrates
            French music over the course of centuries. This program has been
            performed this summer at the 2024 Early Music Festival in Utrecht,
            the Netherlands.
          </p>
          <p>
            Committed to a humanitarian approach in the dissemination of
            music, Maya is focused on her craft, who she reaches, and how.
            Engaged in reevaluating, reflecting on, and nurturing these vast
            questions, Maya is ever in search of avenues to further expand her
            community and use music as a catalyst for deep and meaningful
            connection in this world.
          </p>
          <p>
            In 2017, Maya completed a bachelor&apos;s degree in violin
            performance with an emphasis in vocal performance at the
            University of Wisconsin-Madison under the guidance of David Perry,
            Eugene Purdue, and Paul Rowe. She holds two master&apos;s degrees
            in historical performance in baroque violin from the Schola
            Cantorum Basiliensis under the guidance of Leila Schayegh and
            Amandine Beyer. She also holds a minor in Renaissance studies
            from the Schola under Baptiste Romain and Frithjof Smith. Maya
            has completed postgraduate studies with Amandine Beyer and
            Baptiste Romain, focusing on the art of self-accompaniment in
            monophonic, Mediaeval repertoire.
          </p>
        </div>
      </section>

      <section id="niels" className="scroll-mt-24">
        <div className="mb-10 grid gap-8 md:grid-cols-[260px_1fr] md:items-end">
          <figure>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/photo-niels.png"
                alt="Niels Pfeffer"
                fill
                sizes="(min-width: 768px) 260px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-2 text-xs uppercase tracking-wider text-muted">
              photo by Marc Wieber
            </figcaption>
          </figure>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted">
              Musician
            </p>
            <h2 className="mt-2 font-serif text-4xl md:text-5xl">
              Niels Pfeffer
            </h2>
          </div>
        </div>
        <div className="space-y-6 text-lg leading-8 text-foreground/90">
          <p>
            <strong className="font-semibold">Niels Pfeffer</strong> feels at
            home on (almost) every instrument that is either plucked or has
            keys – from historical lutes and guitar instruments to harpsichord
            and organ.
          </p>
          <p>
            At the Stuttgart University of Music, he teaches theorbo and
            accompanies on harpsichord and lute. He also accompanies on these
            instruments at the Schola Cantorum Basiliensis. Additionally, he
            serves as a research assistant at the University of Tübingen,
            where he is pursuing a dissertation project on early
            20<sup>th</sup>-century piano roll recordings.
          </p>
          <p>
            Niels has performed with groups such as the Capricornus Consort
            Basel and the Bach-Stiftung St. Gallen, among others. Numerous
            recordings and competition successes document his work as a
            musician. Most recently, he has performed with violinist Maya
            Webne-Behrmann in the Early Music Festival Utrecht (Duo
            Mandelbrot), collaborated with the ensemble &ldquo;The Levée&rdquo;
            on a recording of Etienne Delair&apos;s violin sonatas and,
            together with the ensemble &ldquo;Auditu Dignum&rdquo;, won the
            first prize at the Biagio Marini Competition in Neuburg.
          </p>
          <p>
            Niels Pfeffer has also appeared on television and radio
            broadcasts, as well as in concerts and master classes in Estonia,
            Lebanon, Armenia, and Mexico. He studied basso continuo,
            harpsichord, guitar, and lute in Stuttgart, Freiburg, The Hague,
            and Basel. His influential teachers included Johannes Monno,
            Jörg Halubek, Robert Hill, Zoran Dukic, Jörg-Andreas Bötticher,
            and Julian Behr. During his studies, he was supported by a
            Deutschlandstipendium as well as an Excellence Scholarship from
            the Royal Conservatory The Hague. For his master&apos;s recital
            and thesis at the Schola Cantorum, he received the
            Marchal-Stiftung Prize in 2023.
          </p>
        </div>
      </section>
    </article>
  );
}
