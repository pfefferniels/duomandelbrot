import Link from "next/link";
import { contactEmail, youtubeChannel } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-rule bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p className="font-serif text-base text-foreground">Duo Mandelbrot</p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link href={`mailto:${contactEmail}`} className="hover:text-accent">
            {contactEmail}
          </Link>
          <Link
            href={youtubeChannel}
            target="_blank"
            rel="noopener"
            className="hover:text-accent"
          >
            YouTube
          </Link>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
