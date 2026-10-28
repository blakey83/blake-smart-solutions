import { getImageProps, type ImageProps } from "next/image";

type ServerImageProps = Omit<
  ImageProps,
  "placeholder" | "onLoad" | "onLoadingComplete" | "onError" | "preload" | "priority"
>;

// Static photos need responsive URLs and lazy loading, but no client-side state.
export function ServerImage(props: ServerImageProps) {
  const { props: imageProps } = getImageProps(props);
  // eslint-disable-next-line @next/next/no-img-element -- URLs and dimensions are optimized by getImageProps.
  return <img {...imageProps} alt={imageProps.alt} />;
}
