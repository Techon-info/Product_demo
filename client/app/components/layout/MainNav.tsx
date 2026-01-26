"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { name: "Features", href: "/features" },
  { name: "Products", href: "/products" },
  { name: "Plans", href: "/plans" },
  { name: "Contact", href: "/contact" },
];

export default function MainNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-green-normal">
      <div className="h-16 flex items-center justify-between px-5 mx-auto">
        <Link
          href="/"
          className="font-bold font-mono tracking-widest text-lg sm:text-xl md:text-2xl lg:text-3xl text-white"
        >
          Fresh Agri
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-white">
          <ul className="flex gap-6 lg:text-lg xl:text-xl relative">
            {navLinks.map((link) => (
              <li key={link.name} className="relative">
                <Link
                  href={link.href}
                  className={`transition ${
                    isActive(link.href)
                      ? "text-green-200"
                      : "hover:text-green-200"
                  }`}
                >
                  {link.name}
                </Link>

                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 h-0.5 w-full bg-green-200"
                  />
                )}
              </li>
            ))}
          </ul>

          <div className="flex gap-6 lg:text-lg">
            <Link
              href="/auth/login"
              className={
                "bg-white text-green-700 px-4 py-1.5 rounded-lg font-medium hover:bg-green-100 transition"
              }
            >
              Login
            </Link>
            <Link
              href="/auth/signup"
              className="bg-white text-green-700 px-4 py-1.5 rounded-lg font-medium hover:bg-green-100 transition"
            >
              Signup
            </Link>
          </div>
        </div>
        <button onClick={() => setOpen(true)} className="md:hidden text-white">
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-green-normal text-white p-6 md:hidden "
          >
            <div className="flex justify-end">
              <button onClick={() => setOpen(false)}>
                <X size={28} />
              </button>
            </div>

            <ul className="mt-10 flex flex-col gap-6 text-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`${
                    isActive(link.href)
                      ? "bg-green-200 font-semibold text-black p-3"
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </ul>

            <div className="mt-20 flex flex-col gap-4">
              <Link
                href="/auth/login"
                onClick={() => setOpen(false)}
                className="text-center bg-white text-green-700 py-2 rounded-lg font-medium"
              >
                Login{" "}
              </Link>
              <Link
                href="/auth/signup"
                onClick={() => setOpen(false)}
                className="text-center bg-white text-green-700 py-2 rounded-lg font-medium"
              >
                Signup
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
