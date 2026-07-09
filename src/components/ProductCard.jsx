import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";

import staticProducts from "../data/products";
import { db } from "../services/firebase";

function ProductCard({
  addToCart,
  addToWishlist,
  search,
  selectedCategory,
  sortOption,
}) {
  const [allProducts, setAllProducts] = useState(staticProducts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));

        const firebaseProducts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setAllProducts([...staticProducts, ...firebaseProducts]);
      } catch (error) {
        console.log("Firebase products error:", error);
        setAllProducts(staticProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = allProducts
    .filter((item) => {
      const matchSearch = item.name
        ?.toLowerCase()
        .includes((search || "").toLowerCase());

      const matchCategory =
        selectedCategory === "All" ||
        !selectedCategory ||
        item.category === selectedCategory;

      return matchSearch && matchCategory;
    })
    .slice()
    .sort((a, b) => {
      switch (sortOption) {
        case "low":
          return Number(a.price) - Number(b.price);

        case "high":
          return Number(b.price) - Number(a.price);

        case "rating":
          return Number(b.rating) - Number(a.rating);

        default:
          return 0;
      }
    });

  if (loading) {
    return (
      <section className="products">
        <h2>Loading products...</h2>
      </section>
    );
  }

  return (
    <section className="products">
      <h2>🔥 Popular Products</h2>

      {filteredProducts.length === 0 ? (
        <h2 style={{ color: "#666" }}>😔 No products found.</h2>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((item) => (
            <div className="product-card" key={item.id}>
              <button
                className="wishlist-btn"
                onClick={() => addToWishlist(item)}
              >
                ❤️
              </button>

              <div className="discount-badge">{item.discount}</div>

              <Link to={`/product/${item.id}`} style={{ color: "inherit" }}>
                <img src={item.image} alt={item.name} loading="lazy" />

                <h3>{item.name}</h3>

                <p style={{ color: "#f39c12" }}>
                  ⭐ {item.rating} ({item.reviews})
                </p>

                <h2 style={{ color: "#2e7d32" }}>₹{item.price}</h2>

                <p style={{ textDecoration: "line-through", color: "#999" }}>
                  ₹{item.oldPrice}
                </p>

                <p
                  style={{
                    color: item.stock === "In Stock" ? "green" : "orange",
                    fontWeight: "bold",
                  }}
                >
                  {item.stock}
                </p>
              </Link>

              <button onClick={() => addToCart(item)}>🛒 Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductCard;