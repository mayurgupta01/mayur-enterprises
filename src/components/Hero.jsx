function Hero() {
  return (
    <section className="hero">
      <div className="hero-offer">
        🎉 Grand Opening Offer | 🚚 Free Delivery on Orders Above ₹499
      </div>

      <h1>🏪 Welcome to Mayur Enterprises</h1>

      <h2>Your One-Stop Grocery & Daily Essentials Store</h2>

      <p>
        Fresh groceries, dairy products, snacks, beverages, personal care,
        home essentials and much more — all at affordable prices with fast
        delivery.
      </p>

      <div className="hero-buttons">
        <button>🛒 Shop Now</button>

        <a
          href="https://wa.me/919752339458"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <button className="secondary-btn">
            💬 Order on WhatsApp
          </button>
        </a>
      </div>

      <div
        style={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap",
          color: "white",
        }}
      >
        <div>
          <h2>🚚</h2>
          <p>Fast Delivery</p>
        </div>

        <div>
          <h2>💯</h2>
          <p>Quality Products</p>
        </div>

        <div>
          <h2>💰</h2>
          <p>Best Prices</p>
        </div>

        <div>
          <h2>⭐</h2>
          <p>Trusted Store</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;