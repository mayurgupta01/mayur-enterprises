function Checkout({ cart = [], total = 0 }) {
  const whatsappMessage = encodeURIComponent(
    `🛒 New Order - Mayur Enterprises

${cart
  .map(
    (item, index) =>
      `${index + 1}. ${item.name}
Qty : ${item.quantity}
Price : ₹${item.price}
Subtotal : ₹${item.price * item.quantity}`
  )
  .join("\n\n")}

-------------------------
💰 Total Amount : ₹${total}

Thank you!`
  );

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>💳 Checkout</h1>

        <input
          className="login-input"
          type="text"
          placeholder="Full Name"
        />

        <input
          className="login-input"
          type="tel"
          placeholder="Mobile Number"
        />

        <input
          className="login-input"
          type="text"
          placeholder="Full Address"
        />

        <input
          className="login-input"
          type="text"
          placeholder="City / Village"
        />

        <input
          className="login-input"
          type="text"
          placeholder="Pincode"
        />

        <select className="login-input">
          <option>Cash on Delivery</option>
          <option>UPI Payment</option>
          <option>WhatsApp Order</option>
        </select>

        <h2
          style={{
            textAlign: "center",
            color: "#2e7d32",
            marginTop: "20px",
          }}
        >
          Total : ₹{total}
        </h2>

        <a
          href={`https://wa.me/919752339458?text=${whatsappMessage}`}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <button
            style={{
              width: "100%",
              marginTop: "20px",
            }}
          >
            📲 Place Order on WhatsApp
          </button>
        </a>
      </div>
    </div>
  );
}

export default Checkout;