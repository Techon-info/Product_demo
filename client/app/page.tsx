import React from "react";
import Image from "next/image";
import Link from "next/link";
import MainNav from "./components/layout/MainNav";

/* ---------------- DATA ---------------- */

const categories = [
  "All",
  "Livestock",
  "Fertilizer",
  "Vehicles",
  "Seeds",
  "Tools",
];

const products = Array.from({ length: 8 });

/* ---------------- PAGE ---------------- */

export default function HomePage() {
  return (
    <main className="pt-16 bg-green-50 min-h-screen">
      <MainNav />
      {/* ================= BANNER ================= */}
      <section className="relative h-[40vh] sm:h-[45vh] lg:h-[50vh] bg-green-600 flex items-center px-4 sm:px-6 lg:px-20">
        <div className="text-white max-w-xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Smart Agriculture
            <br /> Marketplace
          </h1>

          <p className="mt-4 text-sm sm:text-base">
            Livestock, fertilizers, vehicles & AI-powered insights.
          </p>

          <Link
            href="/products"
            className="inline-block mt-6 bg-white text-green-700 px-6 py-3 rounded-lg font-medium hover:bg-green-100 transition"
          >
            Explore Market
          </Link>
        </div>

        {/* Banner Image */}
        <div className="hidden lg:block absolute right-10 bottom-0 w-[420px] h-[420px]">
          {/* <Image
            src="/agriculture.png"
            alt="Agriculture"
            fill
            priority
            className="object-contain"
          /> */}
        </div>
      </section>

      {/* ================= CATEGORY ROW ================= */}
      <section className="bg-white shadow-sm">
        <div className="px-4 sm:px-6 lg:px-20">
          <div className="flex gap-3 sm:gap-4 py-4 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                className="whitespace-nowrap px-5 py-2 rounded-full border border-green-600
                           text-green-700 hover:bg-green-600 hover:text-white
                           transition text-sm sm:text-base"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="px-4 sm:px-6 lg:px-20 py-10">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>
      </section>
    </main>
  );
}

/* ---------------- COMPONENTS ---------------- */

function ProductCard() {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 flex flex-col gap-3">
      <div className="h-36 bg-green-100 rounded-lg" />

      <h3 className="font-medium text-lg">Organic Fertilizer</h3>

      <p className="text-sm text-gray-600">
        High quality fertilizer for better yield.
      </p>

      <button className="mt-auto bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition text-sm">
        View Product
      </button>
    </div>
  );
}
