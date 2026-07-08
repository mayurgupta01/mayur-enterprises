import { Link } from "react-router-dom";
import products from "../data/products";

function ProductCard({ addToCart, addToWishlist, search, selectedCategory, sortOption }) {
  let filteredProducts = products.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes((search || "").toLowerCase());
    const matchCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  if (sortOption === "low") filteredProducts.sort((a, b) => a.price - b.price);
  if (sortOption === "high") filteredProducts.sort((a, b) => b.price - a.price);
  if (sortOption === "rating") filteredProducts.sort((a, b) => b.rating - a.rating);

  return (
    <section className="products">
      <h2>🔥 Popular Products</h2>

      {filteredProducts.length === 0 ? (
        <h2 style={{ color: "#666" }}>😔 No products found.</h2>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((item) => (
            <div className="product-card" key={item.id}>
              <button className="wishlist-btn" onClick={() => addToWishlist(item)}>❤️</button>

              <div className="discount-badge">{item.discount}</div>

              <Link to={`/product/${item.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p style={{ color: "#f39c12" }}>⭐ {item.rating} ({item.reviews})</p>
                <h2 style={{ color: "#2e7d32" }}>₹{item.price}</h2>
                <p style={{ textDecoration: "line-through", color: "#999" }}>₹{item.oldPrice}</p>
                <p style={{ color: item.stock === "In Stock" ? "green" : "orange", fontWeight: "bold" }}>
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