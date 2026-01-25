import React from "react";
import MainNav from "../components/layout/MainNav";

export default function page() {
  return (
    <>
      <MainNav />
      <div className="flex flex-col">
        <h1>Flexible Plans for Every Farm Size</h1>
        <h3>choose the perfert plan to grow your arricutural business</h3>
        <div>
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
    <div>
      <h1>free</h1>
      <h3>0/month</h3>
      <ul>
        <li>10 product</li>
        <li>Basic Vender Access</li>
        <li>Basic Vender</li>
        <li>Email support</li>
      </ul>
      <button>Get Started</button>
    </div>
  );
};
