function Checkout() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1>💳 Checkout</h1>

        <input className="login-input" type="text" placeholder="Full Name" />
        <input className="login-input" type="tel" placeholder="Mobile Number" />
        <input className="login-input" type="text" placeholder="Full Address" />
        <input className="login-input" type="text" placeholder="City / Village" />
        <input className="login-input" type="text" placeholder="Pincode" />

        <select className="login-input">
          <option>Cash on Delivery</option>
          <option>UPI Payment</option>
          <option>WhatsApp Order</option>
        </select>

        <button style={{ width: "100%", marginTop: "15px" }}>
          ✅ Place Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;