import React from "react";
import MainNav from "../components/layout/MainNav";

export default function page() {
  return (
    <>
      <MainNav />
      <div className="flex flex-col w-full lg:h-[93vh] bg-green-50 pt-20 items-center">
        <h1 className="lg:text-6xl lg:font-bold">
          Flexible Plans for Every Farm Size
        </h1>
        <h3 className="lg:text-3xl mt-5">
          choose the perfert plan to grow your arricutural business
        </h3>
        <div className="flex gap-10 mt-20">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

const Card = function () {
  return (
    <div className="flex lg:flex-col items-start gap-2 lg:w-72 bg-red-300 lg:p-10">
      <h1 className="lg:text-2xl lg:font-bold">Free</h1>
      <h3 className="lg:text-4xl tracking-wider">0/month</h3>
      <ul className="lg:text-lg flex flex-col gap-3">
        <li>10 product</li>
        <li>Basic Vender Access</li>
        <li>Basic Vender</li>
        <li>Email support</li>
      </ul>
      <button>Get Started</button>
    </div>
  );
};
