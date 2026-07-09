function Categories({ selectedCategory, setSelectedCategory }) {
  const categories = [
    { emoji: "🛒", name: "All", items: "All Items" },
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

      <p className="section-subtitle">
        Choose your favourite category and start shopping.
      </p>

      <div className="category-grid">
        {categories.map((category) => (
          <div
            className={`category-card ${
              selectedCategory === category.name ? "active-category" : ""
            }`}
            key={category.name}
          >
            <div className="category-emoji">{category.emoji}</div>

            <h3>{category.name}</h3>

            <p>{category.items}</p>

            <button onClick={() => setSelectedCategory(category.name)}>
              View Products
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;