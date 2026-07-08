import Hero from "../components/Hero";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";

function Home({
  addToCart,
  addToWishlist,
  search,
}) {
  return (
    <>
      <Hero />

      <Categories />

      <ProductCard
        addToCart={addToCart}
        addToWishlist={addToWishlist}
        search={search}
      />
    </>
  );
}

export default Home;