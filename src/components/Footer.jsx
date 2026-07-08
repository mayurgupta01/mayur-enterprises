function Footer() {
  return (
    <footer
      style={{
        background: "#1b5e20",
        color: "white",
        padding: "40px 20px",
        marginTop: "60px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
          gap: "30px",
        }}
      >
        {/* Shop Info */}
        <div>
          <h2>🏪 Mayur Enterprises</h2>
          <p>Your Trusted General Store</p>
          <p>
            Grocery, Dairy, Snacks, Beverages, Personal Care & Daily
            Essentials.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3>📞 Contact Us</h3>
          <p>📍 Patera, Damoh, Madhya Pradesh</p>
          <p>📱 +91 XXXXXXXXXX</p>
          <p>📧 mayurenterprises@gmail.com</p>
        </div>

        {/* Shop Timings */}
        <div>
          <h3>🕒 Shop Timings</h3>
          <p>Monday - Sunday</p>
          <p>8:00 AM - 9:00 PM</p>
          <p>🚚 Home Delivery Available</p>
        </div>

        {/* Social */}
        <div>
          <h3>🌐 Connect With Us</h3>

          <p>💬 WhatsApp</p>
          <p>📘 Facebook</p>
          <p>📸 Instagram</p>
        </div>
      </div>

      <hr
        style={{
          margin: "30px 0",
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      />

      <p style={{ textAlign: "center" }}>
        © 2026 Mayur Enterprises | All Rights Reserved ❤️
      </p>
    </footer>
  );
}

export default Footer;