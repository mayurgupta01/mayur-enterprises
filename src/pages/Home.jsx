import { useState } from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";

function Home({ addToCart, addToWishlist, search }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");

  return (
    <>
      <Hero />

      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="sort-box">
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="sort-select"
        >
          <option value="default">Sort Products</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>

      <ProductCard
        addToCart={addToCart}
        addToWishlist={addToWishlist}
        search={search}
        selectedCategory={selectedCategory}
        sortOption={sortOption}
      />
    </>
  );
}

export default Home;