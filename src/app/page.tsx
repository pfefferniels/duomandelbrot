import { Hero } from "@/components/Hero";
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
      <Hero
        image="/images/hero-bg.jpeg"
        alt="Duo Mandelbrot"
        title="Duo Mandelbrot"
        size="full"
        priority
      />
    </>
  );
}
