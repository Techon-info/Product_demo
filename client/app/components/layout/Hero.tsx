import React from "react";
import SearchBarHome from "../SearchBarHome";
import HeroSlider from "../HeroSlider";
import Category from "../Category";
import ProductCard from "../ProductCard";
import { TProduct } from "@/app/utils/Type";

const products: TProduct[] = [
  {
    id: 1,
    title: "Rice Seed",
    price: 1200,
    image: "https://images.pexels.com/photos/4057041/pexels-photo-4057041.jpeg",
    category: "Seed",
    description: "High quality rice seeds suitable for all soil types.",
    unit: "1kg",
  },
  {
    id: 2,
    title: "Wheat Seed",
    price: 950,
    image: "https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg",
    category: "Seed",
    description: "Premium wheat seeds with high germination rate.",
    unit: "1kg",
  },
  {
    id: 3,
    title: "Corn Seed",
    price: 1500,
    image: "https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg",
    category: "Seed",
    description: "Hybrid corn seeds for commercial farming.",
    unit: "1kg",
  },
  {
    id: 4,
    title: "Sunflower Seed",
    price: 800,
    image: "https://images.pexels.com/photos/1250575/pexels-photo-1250575.jpeg",
    category: "Seed",
    description: "Sunflower seeds with excellent oil content.",
    unit: "1kg",
  },
  {
    id: 5,
    title: "Mustard Seed",
    price: 700,
    image: "https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg",
    category: "Seed",
    description: "Mustard seeds suitable for Indian climate.",
    unit: "1kg",
  },
  {
    id: 6,
    title: "Cotton Seed",
    price: 1800,
    image: "https://images.pexels.com/photos/5529606/pexels-photo-5529606.jpeg",
    category: "Seed",
    description: "High yield cotton seeds for farming.",
    unit: "1kg",
  },
  {
    id: 7,
    title: "Soybean Seed",
    price: 1100,
    image: "https://images.pexels.com/photos/4110254/pexels-photo-4110254.jpeg",
    category: "Seed",
    description: "Protein-rich soybean seeds.",
    unit: "1kg",
  },
  {
    id: 8,
    title: "Peanut Seed",
    price: 900,
    image: "https://images.pexels.com/photos/5945658/pexels-photo-5945658.jpeg",
    category: "Seed",
    description: "Groundnut seeds with fast growth.",
    unit: "1kg",
  },
  {
    id: 9,
    title: "Chilli Seed",
    price: 600,
    image: "https://images.pexels.com/photos/1437598/pexels-photo-1437598.jpeg",
    category: "Seed",
    description: "Spicy chilli seeds with strong yield.",
    unit: "500g",
  },
  {
    id: 10,
    title: "Tomato Seed",
    price: 500,
    image: "https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg",
    category: "Seed",
    description: "Hybrid tomato seeds for all seasons.",
    unit: "500g",
  },
  {
    id: 11,
    title: "Onion Seed",
    price: 650,
    image: "https://images.pexels.com/photos/4197447/pexels-photo-4197447.jpeg",
    category: "Seed",
    description: "Onion seeds with long shelf life.",
    unit: "500g",
  },
  {
    id: 12,
    title: "Carrot Seed",
    price: 450,
    image: "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg",
    category: "Seed",
    description: "Healthy carrot seeds for kitchen gardens.",
    unit: "500g",
  },
  {
    id: 13,
    title: "Spinach Seed",
    price: 400,
    image: "https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg",
    category: "Seed",
    description: "Fast-growing spinach seeds.",
    unit: "500g",
  },
  {
    id: 14,
    title: "Cucumber Seed",
    price: 480,
    image: "https://images.pexels.com/photos/3756498/pexels-photo-3756498.jpeg",
    category: "Seed",
    description: "Cucumber seeds with high water content.",
    unit: "500g",
  },
  {
    id: 15,
    title: "Pumpkin Seed",
    price: 520,
    image: "https://images.pexels.com/photos/5502587/pexels-photo-5502587.jpeg",
    category: "Seed",
    description: "Pumpkin seeds for healthy crops.",
    unit: "500g",
  },
];

export default function Hero() {
  return (
    <div className="p-2 flex flex-col gap-3">
      <SearchBarHome />
      <HeroSlider />
      <div>
        <h2 className="text-xl font-extrabold uppercase text-green-darker">
          Categories
        </h2>
        <Category />
      </div>
      <div
        className="  grid gap-4
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
  "
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            category={product.category}
            description={product.description}
            unit={product.unit}
          />
        ))}
      </div>
    </div>
  );
}
