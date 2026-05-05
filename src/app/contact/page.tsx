import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { contactEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact us",
  description: `Get in touch with Duo Mandelbrot — ${contactEmail}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Hero
        image="/images/hero-bg.jpeg"
        alt=""
        title="Contact us"
      />

      <article className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24">
        <p className="text-lg leading-8 text-foreground/90">
          We&apos;d love to hear from you!
        </p>
        <p className="mt-4 text-lg leading-8 text-foreground/90">
          Please send us an email at{" "}
          <Link
            href={`mailto:${contactEmail}`}
            className="text-accent underline-offset-4 hover:underline"
          >
            {contactEmail}
          </Link>
        </p>

        <figure className="relative mx-auto mt-16 aspect-[3/4] max-w-md overflow-hidden">
          <Image
            src="/images/3w4a6622.jpg"
            alt="Duo Mandelbrot"
            fill
            sizes="(min-width: 768px) 448px, 100vw"
            className="object-cover"
          />
        </figure>
      </article>
    </>
  );
}
