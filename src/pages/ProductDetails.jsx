import { useParams, Link } from "react-router-dom";
import products from "../data/products";

function ProductDetails({ addToCart, addToWishlist }) {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div style={{ textAlign: "center", padding: "100px" }}>
        <h1>❌ Product Not Found</h1>

        <Link to="/">
          <button>🏠 Back to Home</button>
        </Link>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "50px auto",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          background: "white",
          padding: "35px",
          borderRadius: "20px",
          boxShadow: "0 8px 25px rgba(0,0,0,.08)",
        }}
      >
        <div>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              height: "420px",
              objectFit: "contain",
            }}
          />
        </div>

        <div>
          <span
            style={{
              background: "#ff5252",
              color: "white",
              padding: "6px 12px",
              borderRadius: "20px",
              fontSize: "14px",
            }}
          >
            {product.discount}
          </span>

          <h1>{product.name}</h1>

          <h3 style={{ color: "#f39c12" }}>
            ⭐ {product.rating} ({product.reviews} Reviews)
          </h3>

          <p>
            <b>🏷 Brand :</b> {product.brand}
          </p>

          <p>
            <b>📂 Category :</b> {product.category}
          </p>

          <p>
            <b>⚖ Weight :</b> {product.weight}
          </p>

          <h2 style={{ color: "#2e7d32" }}>
            ₹{product.price}
          </h2>

          <p
            style={{
              textDecoration: "line-through",
              color: "#999",
              fontSize: "18px",
            }}
          >
            ₹{product.oldPrice}
          </p>

          <p
            style={{
              color:
                product.stock === "In Stock"
                  ? "green"
                  : "orange",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            📦 {product.stock}
          </p>

          <p
            style={{
              lineHeight: "1.7",
              color: "#555",
            }}
          >
            {product.description}
          </p>

          <p>
            🚚 Delivery in <b>30-60 Minutes</b>
          </p>

          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "30px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => addToCart(product)}
            >
              🛒 Add to Cart
            </button>

            <button
              onClick={() => addToWishlist(product)}
              style={{
                background: "#e91e63",
              }}
            >
              ❤️ Add to Wishlist
            </button>
          </div>

          <div style={{ marginTop: "30px" }}>
            <Link to="/">
              <button
                style={{
                  background: "#555",
                }}
              >
                ⬅ Back to Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;