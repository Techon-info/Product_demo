import { TProduct } from "@/app/utils/Type";
import React, { Suspense } from "react";
import ImageBlur from "./ImageBlur";

export default function ProductCard({
  id,
  title,
  price,
  image,
  category,
  description,
  unit,
}: TProduct) {
  return (
    <div
      className="
        group relative bg-white rounded-2xl overflow-hidden p-5
        xs:min-w-55 xs:h-105
        sm:min-w-65 sm:h-105
        md:min-w-75 md:h-115
        lg:min-w-[320px] lg:h-120
        xl:min-w-90 xl:h-130
        2xl:min-w-952xl:h-135
        shadow-sm hover:shadow-lg transition
        flex flex-col gap-2
      "
    >
      <div className="relative h-1/2">
        <Suspense
          fallback={
            <div className="bg-transparent w-full h-full animate-pulse" />
          }
        >
          <ImageBlur title={title} url={image} className="rounded-xl" />
        </Suspense>
      </div>
      <div>
        <p className="font-bold text-xl">{title}</p>
        <p className="text-lg text-gray-500">{category}</p>
      </div>
      <div>
        <p className="xs:text-2xl lg:text-4xl font-semibold text-green-darker">
          {price}/<span className="text-xl">{unit}</span>
        </p>
      </div>
      <div>
        <p className="text-sm text-green-darker line-clamp-1">
          {" "}
          {description.slice(0, 40)}....
        </p>
      </div>
    </div>
  );
}
