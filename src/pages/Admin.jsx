function Admin() {
  return (
    <div className="admin-container">
      <div className="admin-card">
        <h1>🛠 Admin Panel</h1>

        <p className="admin-note">
          Product add/edit/delete will work after database setup.
        </p>

        <input className="form-input" type="text" placeholder="Product Name" />
        <input className="form-input" type="number" placeholder="Price" />
        <input className="form-input" type="text" placeholder="Category" />
        <input className="form-input" type="text" placeholder="Image URL" />

        <button>➕ Add Product</button>
      </div>
    </div>
  );
}

export default Admin;