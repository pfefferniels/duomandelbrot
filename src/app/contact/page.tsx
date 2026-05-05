import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { contactEmail, youtubeChannel } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with Duo Mandelbrot — ${contactEmail}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <article className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-muted">Contact</p>
        <h1 className="mt-3 font-serif text-5xl md:text-6xl">Contact us</h1>

        <div className="mt-10 space-y-6 text-lg leading-8 text-foreground/90">
          <p>We&apos;d love to hear from you!</p>
          <p>
            Please send us an email at{" "}
            <Link
              href={`mailto:${contactEmail}`}
              className="text-accent underline-offset-4 hover:underline"
            >
              {contactEmail}
            </Link>
            .
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 text-sm uppercase tracking-[0.18em]">
          <Link
            href={`mailto:${contactEmail}`}
            className="border border-foreground px-5 py-3 transition-colors hover:bg-foreground hover:text-background"
          >
            Write to us
          </Link>
          <Link
            href={youtubeChannel}
            target="_blank"
            rel="noopener"
            className="border border-rule px-5 py-3 text-muted transition-colors hover:border-foreground hover:text-foreground"
          >
            YouTube
          </Link>
        </div>
      </div>

      <figure className="relative aspect-[3/4] w-full overflow-hidden md:aspect-auto md:min-h-[480px]">
        <Image
          src="/images/3w4a6622.jpg"
          alt="Duo Mandelbrot"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </figure>
    </article>
  );
}
