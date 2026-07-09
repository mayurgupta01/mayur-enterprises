import { Link } from "react-router-dom";

function Cart({ cart, removeItem, increaseQuantity, decreaseQuantity, total }) {
  return (
    <div className="cart-page">
      <h1 className="page-title">🛒 Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty 😔</h2>
          <p>Add some products to continue shopping.</p>

          <Link to="/">
            <button>🛍 Continue Shopping</button>
          </Link>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-row" key={item.id}>
              <div className="cart-product">
                <img src={item.image} alt={item.name} loading="lazy" />

                <div>
                  <h3>{item.name}</h3>
                  <p className="cart-price">₹{item.price}</p>
                  <p>{item.stock}</p>

                  <div className="quantity-box">
                    <button onClick={() => decreaseQuantity(item.id)}>➖</button>
                    <strong>{item.quantity}</strong>
                    <button onClick={() => increaseQuantity(item.id)}>➕</button>
                  </div>
                </div>
              </div>

              <button className="remove-btn" onClick={() => removeItem(item.id)}>
                🗑 Remove
              </button>
            </div>
          ))}

          <div className="cart-total">
            <h2>Total : ₹{total}</h2>

            <Link to="/checkout">
              <button>💳 Proceed to Checkout</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;