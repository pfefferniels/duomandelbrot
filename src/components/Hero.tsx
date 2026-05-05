import Image from "next/image";

type Props = {
  image: string;
  alt: string;
  title: string;
  size?: "full" | "band";
  position?: string;
  priority?: boolean;
};

export function Hero({
  image,
  alt,
  title,
  size = "band",
  position = "center",
  priority = false,
}: Props) {
  const heightClass =
    size === "full"
      ? "h-[calc(100vh-5rem)] min-h-[480px]"
      : "h-[44vh] min-h-[280px] md:h-[52vh]";

  return (
    <section
      className={`relative w-full overflow-hidden ${heightClass}`}
      aria-label={title}
    >
      <Image
        src={image}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: position }}
      />
      <div className="absolute inset-0 bg-black/35" />
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <h1 className="font-serif text-5xl text-[#f7f3ec] drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] md:text-7xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
