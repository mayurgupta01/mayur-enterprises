function Hero() {
  return (
    <section className="hero">
      <div className="hero-offer">
        🎉 Grand Opening Offer | 🚚 Free Delivery on Orders Above ₹499
      </div>

      <h1>🏪 Welcome to Mayur Enterprises</h1>

      <h2>🇮🇳 India's Most Trusted Grocery Store ❤️</h2>

      <p>
        Fresh groceries, dairy products, snacks, beverages, personal care, home
        essentials and much more — all at affordable prices with fast delivery.
      </p>

      <div className="hero-buttons">
        <button>🛒 Shop Now</button>

        <a
          href="https://wa.me/919752339458"
          target="_blank"
          rel="noreferrer"
        >
          <button className="secondary-btn">💬 Order on WhatsApp</button>
        </a>
      </div>

      <div className="hero-features">
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