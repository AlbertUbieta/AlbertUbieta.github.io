export default function resolveImage(image: string): string {
  if (/^https?:\/\//i.test(image)) {
    return image;
  }

  return `${process.env.PUBLIC_URL}/${image.replace(/^\/+/, "")}`;
}