import { useState } from "react";

import Hero from "../components/Hero";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";

function Home({
  addToCart,
  addToWishlist,
  search,
}) {
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  return (
    <>
      <Hero />

      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <ProductCard
        addToCart={addToCart}
        addToWishlist={addToWishlist}
        search={search}
        selectedCategory={selectedCategory}
      />
    </>
  );
}

export default Home;