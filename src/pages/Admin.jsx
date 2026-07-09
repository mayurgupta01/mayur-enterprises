import { useState } from "react";

function Admin() {
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("adminLogin") === "true"
  );

  const adminPassword = "mayur123";

  const handleLogin = () => {
    if (password === adminPassword) {
      localStorage.setItem("adminLogin", "true");
      setIsAdmin(true);
    } else {
      alert("Wrong password");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminLogin");
    setIsAdmin(false);
    setPassword("");
  };

  if (!isAdmin) {
    return (
      <div className="admin-container">
        <div className="admin-card">
          <h1>Admin Login</h1>

          <input
            className="form-input"
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <div className="admin-card">
        <h1>Admin Panel</h1>

        <p className="admin-note">
          Product add/edit/delete will work after Firebase database setup.
        </p>

        <input className="form-input" type="text" placeholder="Product Name" />
        <input className="form-input" type="number" placeholder="Price" />
        <input className="form-input" type="text" placeholder="Category" />
        <input className="form-input" type="text" placeholder="Image URL" />

        <button>Add Product</button>

        <button
          onClick={handleLogout}
          style={{ background: "#d32f2f", marginTop: "12px" }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Admin;