import { Link } from "react-router-dom";
import products from "../data/products";

function ProductCard({
  addToCart,
  addToWishlist,
  search,
  selectedCategory,
}) {
  const filteredProducts = products.filter((item) => {
    const matchSearch = item.name
      .toLowerCase()
      .includes((search || "").toLowerCase());

    const matchCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    return matchSearch && matchCategory;
  });

  return (
    <section className="products">
      <h2>🔥 Popular Products</h2>

      {filteredProducts.length === 0 ? (
        <h2 style={{ color: "#666", marginTop: "40px" }}>
          😔 No products found.
        </h2>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((item) => (
            <div className="product-card" key={item.id}>
              <button
                onClick={() => addToWishlist(item)}
                style={{
                  float: "right",
                  background: "#fff",
                  color: "#e91e63",
                  border: "1px solid #e91e63",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  padding: "0",
                }}
              >
                ❤️
              </button>

              <div
                style={{
                  background: "#ff5252",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "20px",
                  display: "inline-block",
                  fontSize: "12px",
                  marginBottom: "10px",
                }}
              >
                {item.discount}
              </div>

              <Link
                to={`/product/${item.id}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <img src={item.image} alt={item.name} />

                <h3>{item.name}</h3>

                <p
                  style={{
                    color: "#f39c12",
                    margin: "5px 0",
                  }}
                >
                  ⭐ {item.rating} ({item.reviews})
                </p>

                <h2 style={{ color: "#2e7d32" }}>
                  ₹{item.price}
                </h2>

                <p
                  style={{
                    textDecoration: "line-through",
                    color: "#999",
                  }}
                >
                  ₹{item.oldPrice}
                </p>

                <p
                  style={{
                    color:
                      item.stock === "In Stock"
                        ? "green"
                        : "orange",
                    fontWeight: "bold",
                  }}
                >
                  {item.stock}
                </p>
              </Link>

              <button
                style={{ width: "100%" }}
                onClick={() => addToCart(item)}
              >
                🛒 Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductCard;