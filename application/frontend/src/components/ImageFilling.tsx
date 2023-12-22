import Image from 'next/image';

interface ImageFillingProps {
  alt?: string;
  src: string;
}

export default function ImageFilling({
  src,
  alt = '',
}: ImageFillingProps) {
  return (
    <div
      className="relative bg-[image:var(--image-url)] bg-cover h-full w-full bg-center"
      // @ts-expect-error --image-url is not allowed in the style value
      // eslint-disable-next-line @typescript-eslint/naming-convention
      style={{'--image-url': `url(${src})`}}
    >
      <div className="filter blur bg-[image:var(--image-url)] bg-cover h-full w-full bg-center" />
      <Image
        src={src}
        fill={true}
        alt={alt}
        className="object-contain"
        sizes="100"
      />
    </div>
  );
}