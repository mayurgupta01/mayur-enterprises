import { Link } from "react-router-dom";

function Wishlist({ wishlist, removeWishlistItem, addToCart }) {
  return (
    <div style={{ maxWidth: "1100px", margin: "40px auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#e91e63" }}>
        ❤️ My Wishlist
      </h1>

      {wishlist.length === 0 ? (
        <div style={{ textAlign: "center", marginTop: "60px" }}>
          <h2>Your wishlist is empty 💔</h2>
          <p>Add your favourite products here.</p>

          <Link to="/">
            <button>🛍 Continue Shopping</button>
          </Link>
        </div>
      ) : (
        wishlist.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "white",
              margin: "20px 0",
              padding: "20px",
              borderRadius: "15px",
              boxShadow: "0 5px 15px rgba(0,0,0,.1)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "100px", height: "100px", objectFit: "contain" }}
              />

              <div>
                <h3>{item.name}</h3>
                <p style={{ color: "#2e7d32", fontWeight: "bold" }}>
                  ₹{item.price}
                </p>
              </div>
            </div>

            <div>
              <button onClick={() => addToCart(item)}>🛒 Add to Cart</button>

              <button
                onClick={() => removeWishlistItem(item.id)}
                style={{ background: "#d32f2f", marginLeft: "10px" }}
              >
                🗑 Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Wishlist;