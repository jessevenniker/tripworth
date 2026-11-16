import { getImage, imageUrl, type ImageKey } from "@/data/images";

/** Responsive photo. `sizes` tells the browser how wide it is shown, so it picks the smallest file. */
export function Photo({
  image,
  alt,
  sizes = "100vw",
  eager = false,
  className,
  style,
}: {
  image: ImageKey;
  alt: string;
  sizes?: string;
  eager?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  const widths = [500, 960, 1280, 1920] as const;
  return (
    // eslint-disable-next-line @next/next/no-img-element -- remote photos, sized by srcSet
    <img
      src={imageUrl(image, 1280)}
      srcSet={widths.map((width) => `${imageUrl(image, width)} ${width}w`).join(", ")}
      sizes={sizes}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      // The eager photo is the hero, which is the largest element on the page: fetch it first.
      fetchPriority={eager ? "high" : undefined}
      decoding="async"
      className={className}
      style={style}
    />
  );
}

export function PhotoCredit({ image, label, className = "" }: { image: ImageKey; label: string; className?: string }) {
  const { credit, license, source } = getImage(image);
  return (
    <a href={source} rel="noopener nofollow" target="_blank" className={`text-[11px] hover:underline ${className}`}>
      {label}: {credit} · {license}
    </a>
  );
}
