import React from "react";
import SearchBarHome from "../SearchBarHome";
import HeroSlider from "../HeroSlider";

export default function Hero() {
  return (
    <div className="p-2 w-screen">
      <SearchBarHome />
      <HeroSlider />
    </div>
  );
}
