"use client";

import React, { useState } from "react";
import MainNav from "../components/layout/MainNav";
import clsx from "clsx";

export default function Page() {
  const [active, setActive] = useState(1);

  return (
    <>
      <MainNav />

      <section className="w-full min-h-svh bg-green-50 pt-24 pb-20 px-4 flex flex-col items-center">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center">
          Flexible Plans for Every Farm Size
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-2xl text-gray-600 text-center max-w-3xl">
          Choose the perfect plan to grow your agricultural business
        </p>

        {/* Cards Wrapper */}
        <div
          className="
          mt-14
          w-full
          flex
          lg:flex-row
          xl:flex-row
          2xl:flex-row
          xs:flex-col
          xs:items-center
          gap-6
          items-stretch
          justify-start
          overflow-x-auto
          md:overflow-x-auto
          lg:overflow-visible
          lg:justify-center
          snap-x snap-mandatory
          pb-6
        "
        >
          <PricingCard
            title="Free"
            price="₹0"
            features={[
              "10 Products",
              "Basic Vendor Access",
              "Limited Dashboard",
              "Email Support",
            ]}
            active={active === 0}
            onClick={() => setActive(0)}
          />

          <PricingCard
            title="Pro"
            price="₹999"
            highlight
            features={[
              "Unlimited Products",
              "Full Vendor Access",
              "Advanced Dashboard",
              "Priority Support",
            ]}
            active={active === 1}
            onClick={() => setActive(1)}
          />

          <PricingCard
            title="Enterprise"
            price="₹2999"
            features={[
              "Unlimited Products",
              "Multi-vendor Access",
              "Analytics & Reports",
              "Dedicated Support",
            ]}
            active={active === 2}
            onClick={() => setActive(2)}
          />
        </div>
      </section>
    </>
  );
}

type CardProps = {
  title: string;
  price: string;
  features: string[];
  active?: boolean;
  highlight?: boolean;
  onClick?: () => void;
};

const PricingCard = ({
  title,
  price,
  features,
  active,
  highlight,
  onClick,
}: CardProps) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        `
        snap-center
        cursor-pointer
        transition-all duration-300
        rounded-3xl
        bg-white
        shadow-md
        flex flex-col
        p-6 sm:p-8
        `,
        active
          ? "border-2 border-green-600 scale-105 shadow-xl"
          : "opacity-90 hover:opacity-100",
        // widths per device
        "w-[260px] sm:w-[280px] md:w-[300px]",
        active && "lg:w-[380px] xl:w-[420px]",
      )}
    >
      {highlight && (
        <span className="mb-2 self-start bg-green-600 text-white text-xs px-3 py-1 rounded-full">
          Most Popular
        </span>
      )}

      <h2 className="text-xl sm:text-2xl font-bold">{title}</h2>

      <p className="text-3xl sm:text-4xl font-extrabold text-green-700 mt-2">
        {price}
        <span className="text-sm font-medium text-gray-500"> / month</span>
      </p>

      <ul className="mt-6 flex flex-col gap-3 text-sm sm:text-base text-gray-600">
        {features.map((item, i) => (
          <li key={i}>✓ {item}</li>
        ))}
      </ul>

      <button
        className={clsx(
          "mt-5 py-3 rounded-xl font-medium transition",
          active
            ? "bg-green-600 text-white hover:bg-green-700"
            : "border border-green-600 text-green-700 hover:bg-green-50",
        )}
      >
        Get Started
      </button>
    </div>
  );
};
