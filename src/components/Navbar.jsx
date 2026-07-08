import { Link } from "react-router-dom";

function Navbar({
  cartCount,
  wishlistCount,
  search,
  setSearch,
}) {
  return (
    <nav
      style={{
        backgroundColor: "#2e7d32",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <h2 style={{ margin: 0 }}>
        🏪 Mayur Enterprises
      </h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          placeholder="🔍 Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px 15px",
            borderRadius: "25px",
            border: "none",
            width: "220px",
            outline: "none",
          }}
        />

        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          🏠 Home
        </Link>

        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          📂 Categories
        </Link>

        <Link
          to="/cart"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          🛒 Cart ({cartCount})
        </Link>

        <Link
          to="/wishlist"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          ❤️ Wishlist ({wishlistCount})
        </Link>

        <Link
          to="/login"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          👤 Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;