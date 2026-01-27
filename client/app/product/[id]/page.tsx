"use client";

import React, { Suspense } from "react";
// import Image from "next/image";
import { Star, ShoppingCart, BadgeCheck } from "lucide-react";
import MainNav from "@/app/components/layout/MainNav";

export default function ProductPage() {
  return (
    <main className="pt-16 bg-green-50 min-h-screen">
      <Suspense>
        <MainNav />
      </Suspense>
      <section className="px-4 sm:px-6 lg:px-20 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* ---------------- IMAGE GALLERY ---------------- */}
          <div className="flex flex-col gap-4">
            <div className="relative w-full h-[280px] sm:h-[350px] lg:h-[420px] bg-white rounded-xl shadow-sm">
              {/* <Image
                src="/fertilizer.png"
                alt="Organic Fertilizer"
                fill
                className="object-contain p-6"
                priority
              /> */}
            </div>

            <div className="flex gap-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="relative w-20 h-20 bg-white rounded-lg shadow-sm cursor-pointer"
                >
                  {/* <Image
                    src="/fertilizer.png"
                    alt="Thumbnail"
                    fill
                    className="object-contain p-2"
                  /> */}
                </div>
              ))}
            </div>
          </div>

          {/* ---------------- PRODUCT INFO ---------------- */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                Organic Fertilizer – Premium
              </h1>

              <div className="flex items-center gap-3 text-sm">
                <span className="flex items-center gap-1 text-yellow-500">
                  <Star size={16} fill="currentColor" />
                  4.6
                </span>
                <span className="text-gray-500">(124 reviews)</span>
                <span className="flex items-center gap-1 text-green-600">
                  <BadgeCheck size={16} />
                  Verified Vendor
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-green-700">₹1,299</span>
              <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                Subscription Available
              </span>
            </div>

            {/* Short Info */}
            <p className="text-gray-700 leading-relaxed">
              High-quality organic fertilizer designed to improve soil health
              and increase crop yield. Suitable for all types of crops.
            </p>

            {/* Meta */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">Category:</span> Fertilizer
              </div>
              <div>
                <span className="font-medium">Stock:</span> In Stock
              </div>
              <div>
                <span className="font-medium">Delivery:</span> 3–5 Days
              </div>
              <div>
                <span className="font-medium">Vendor:</span> GreenGrow Pvt Ltd
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
                <ShoppingCart size={18} />
                Add to Cart
              </button>
              <button className="border border-green-600 text-green-700 px-6 py-3 rounded-lg hover:bg-green-100 transition">
                Subscribe & Save
              </button>
            </div>
          </div>
        </div>

        {/* ---------------- DETAILS ---------------- */}
        <div className="mt-16 bg-white rounded-xl shadow-sm p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Product Details
          </h2>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>100% organic and eco-friendly</li>
            <li>Improves soil fertility and structure</li>
            <li>Boosts crop yield naturally</li>
            <li>Safe for all types of crops</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
