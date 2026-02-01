import React from "react";
import MainNav from "./components/layout/MainNav";
import Hero from "./components/layout/Hero";

export default function HomePage() {
  return (
    <main className="p-16 bg-gray-200 min-h-screen">
      <MainNav />
      <Hero />
    </main>
  );
}
