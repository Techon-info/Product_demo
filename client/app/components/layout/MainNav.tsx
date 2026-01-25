import React from "react";
import Link from "next/link";

export default function MainNav() {
  return (
    <nav className="h-16 flex flex-1 justify-between items-center p-5 bg-green-normal">
      <h2 className="font-bold font-mono tracking-widest text-3xl text-white">
        <Link href={"/"}>Fresh Agri</Link>
      </h2>
      <div className="flex lg:gap-10 text-white">
        <ul className="flex gap-3 lg:text-xl">
          <li>Featurs</li>
          <li>Products</li>
          <li>
            <Link href="/plans">Plans</Link>
          </li>
          <li>contact</li>
        </ul>
        <div className="flex gap-5 lg:text-xl">
          <Link href="/auth/login">Login</Link>
          <Link href="/auth/signup">Signup</Link>
        </div>
      </div>
    </nav>
  );
}
