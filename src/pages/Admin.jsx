function Admin() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1>🛠 Admin Panel</h1>

        <input className="login-input" type="text" placeholder="Product Name" />
        <input className="login-input" type="number" placeholder="Price" />
        <input className="login-input" type="text" placeholder="Category" />
        <input className="login-input" type="text" placeholder="Image URL" />

        <button>➕ Add Product</button>
      </div>
    </div>
  );
}

export default Admin;