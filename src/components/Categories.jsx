function Categories() {
  const categories = [
    { emoji: "🍚", name: "Grocery", items: "250+ Items" },
    { emoji: "🥛", name: "Dairy", items: "80+ Items" },
    { emoji: "🥤", name: "Beverages", items: "120+ Items" },
    { emoji: "🍪", name: "Snacks", items: "150+ Items" },
    { emoji: "🧴", name: "Personal Care", items: "90+ Items" },
    { emoji: "🧹", name: "Home Essentials", items: "110+ Items" },
    { emoji: "🍎", name: "Fruits", items: "60+ Items" },
    { emoji: "🥦", name: "Vegetables", items: "70+ Items" },
  ];

  return (
    <section className="categories">
      <h2>🛍️ Shop by Category</h2>

      <p
        style={{
          color: "#666",
          marginBottom: "35px",
          fontSize: "18px",
        }}
      >
        Choose your favourite category and start shopping.
      </p>

      <div className="category-grid">
        {categories.map((category, index) => (
          <div className="category-card" key={index}>
            <div
              style={{
                fontSize: "60px",
                marginBottom: "15px",
              }}
            >
              {category.emoji}
            </div>

            <h3
              style={{
                color: "#222",
                marginBottom: "8px",
              }}
            >
              {category.name}
            </h3>

            <p
              style={{
                color: "#2e7d32",
                fontWeight: "bold",
              }}
            >
              {category.items}
            </p>

            <button
              style={{
                marginTop: "15px",
                width: "100%",
              }}
            >
              View Products
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;