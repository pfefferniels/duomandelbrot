export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://duomandelbrot.com";

export const contactEmail = "duo.mandelbrot@gmail.com";

export const youtubeChannel = "https://www.youtube.com/@duo.mandelbrot";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact" },
] as const;
