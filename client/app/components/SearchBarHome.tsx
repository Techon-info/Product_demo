import { Bell, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function SearchBarHome() {
  return (
    <section className="flex gap-6 xs:flex-col md:flex-row lg:flex-row md:items-center lg:items-center">
      <div className="flex flex-1 items-center border border-gray-400 rounded-lg p-1 px-2 gap-2">
        <Search className="text-gray-400" />
        <input
          type="text"
          className="flex-1 border-0 border-gray-400 outline-none p-1 px-2 rounded-lg tracking-wider md:text-lg lg:text-lg"
          placeholder="Search..."
        />
      </div>
      <div className="xs:hidden sm:hidden md:flex gap-3">
        <Link href="/cart">
          <ShoppingCart />
        </Link>
        <Link href="/notifications">
          <Bell />
        </Link>
      </div>
    </section>
  );
}
