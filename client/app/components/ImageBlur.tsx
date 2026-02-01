import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";
import React from "react";

const BLUR_DATA =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIHWP4z8DwHwAFgwJ/lv1nWQAAAABJRU5ErkJggg==";

export default async function ImageBlur({
  url,
  title,
  className,
}: {
  url: string;
  title: string;
  className?: string;
}) {
  // const buffer = await fetch(url).then(async (res) =>
  //   Buffer.from(await res.arrayBuffer()),
  // );

  // const { base64 } = await getPlaiceholder(buffer);
  return (
    <Image
      fill
      src={url}
      alt={title}
      placeholder="blur"
      blurDataURL={BLUR_DATA}
      className={className}
      unoptimized
    />
  );
}
