import Image from "next/image";

import Fertilizer from "@/public/categories/fertilizer.png";
import livestock from "@/public/categories/poultry.png";
import seed from "@/public/categories/seeding.png";
import tractor from "@/public/categories/tractor.png";

const categories = [
  { label: "Fertilizer", img: Fertilizer },
  { label: "Live Stock", img: livestock },
  { label: "Seeds", img: seed },
  { label: "Vehicles", img: tractor },
];

export default function Category() {
  return (
    <ul
      className="
        flex items-center gap-6
        overflow-x-auto
        h-24
        rounded-lg
        scrollbar-hide
      "
    >
      {categories.map((cat) => (
        <li
          key={cat.label}
          className="
            flex items-center gap-3
            min-w-40
            px-4 py-3
            rounded-xl
            bg-green-light
            text-black
            font-semibold
            xs:text-sm md:text-base
            cursor-pointer
            transition-all duration-300
            hover:bg-green-normal hover:text-white
            active:scale-95
          "
        >
          <Image
            src={cat.img}
            width={36}
            height={36}
            alt={cat.label}
            className="shrink-0"
          />
          <span className="whitespace-nowrap tracking-widest">{cat.label}</span>
        </li>
      ))}
    </ul>
  );
}
