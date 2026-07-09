import { Link } from "react-router-dom";

function Wishlist({ wishlist, removeWishlistItem, addToCart }) {
  return (
    <div className="wishlist-page">
      <h1 className="wishlist-title">❤️ My Wishlist</h1>

      {wishlist.length === 0 ? (
        <div className="empty-wishlist">
          <h2>Your wishlist is empty 💔</h2>
          <p>Add your favourite products here.</p>

          <Link to="/">
            <button>🛍 Continue Shopping</button>
          </Link>
        </div>
      ) : (
        wishlist.map((item) => (
          <div className="wishlist-row" key={item.id}>
            <div className="wishlist-product">
              <img src={item.image} alt={item.name} loading="lazy" />

              <div>
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
              </div>
            </div>

            <div className="wishlist-actions">
              <button onClick={() => addToCart(item)}>🛒 Add to Cart</button>

              <button
                className="remove-btn"
                onClick={() => removeWishlistItem(item.id)}
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