import React from "react";
import MainNav from "./components/layout/MainNav";
import Hero from "./components/layout/Hero";

export default function HomePage() {
  return (
    <main className="pt-16 bg-green-50 min-h-screen">
      <MainNav />
      <Hero />
    </main>
  );
}
