import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../services/firebase";

const emptyProduct = {
  name: "",
  brand: "",
  category: "",
  weight: "",
  price: "",
  oldPrice: "",
  image: "",
  rating: "4.5",
  reviews: "0",
  discount: "0% OFF",
  stock: "In Stock",
  description: "",
};

function Admin() {
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("adminLogin") === "true"
  );
  const [firebaseProducts, setFirebaseProducts] = useState([]);
  const [product, setProduct] = useState(emptyProduct);
  const [editId, setEditId] = useState(null);

  const adminPassword = "mayur123";

  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = querySnapshot.docs.map((item) => ({
      id: item.id,
      ...item.data(),
    }));

    setFirebaseProducts(products);
  };

  useEffect(() => {
    if (isAdmin) {
      fetchProducts();
    }
  }, [isAdmin]);

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

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setProduct(emptyProduct);
    setEditId(null);
  };

  const handleSubmitProduct = async () => {
    if (!product.name || !product.price || !product.category || !product.image) {
      alert("Please fill product name, price, category and image URL");
      return;
    }

    const productData = {
      ...product,
      price: Number(product.price),
      oldPrice: Number(product.oldPrice || 0),
      rating: Number(product.rating || 0),
      reviews: Number(product.reviews || 0),
    };

    if (editId) {
      await updateDoc(doc(db, "products", editId), productData);
      alert("Product updated successfully");
    } else {
      await addDoc(collection(db, "products"), {
        ...productData,
        createdAt: serverTimestamp(),
      });
      alert("Product added successfully");
    }

    resetForm();
    fetchProducts();
  };

  const handleEditProduct = (item) => {
    setEditId(item.id);

    setProduct({
      name: item.name || "",
      brand: item.brand || "",
      category: item.category || "",
      weight: item.weight || "",
      price: item.price || "",
      oldPrice: item.oldPrice || "",
      image: item.image || "",
      rating: item.rating || "4.5",
      reviews: item.reviews || "0",
      discount: item.discount || "0% OFF",
      stock: item.stock || "In Stock",
      description: item.description || "",
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDeleteProduct = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    await deleteDoc(doc(db, "products", id));
    alert("Product deleted successfully");
    fetchProducts();
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
    <div className="admin-page">
      <div className="admin-card">
        <h1>{editId ? "Edit Product" : "Admin Panel"}</h1>

        <input className="form-input" name="name" value={product.name} onChange={handleChange} placeholder="Product Name" />
        <input className="form-input" name="brand" value={product.brand} onChange={handleChange} placeholder="Brand" />
        <input className="form-input" name="category" value={product.category} onChange={handleChange} placeholder="Category" />
        <input className="form-input" name="weight" value={product.weight} onChange={handleChange} placeholder="Weight" />
        <input className="form-input" name="price" type="number" value={product.price} onChange={handleChange} placeholder="Price" />
        <input className="form-input" name="oldPrice" type="number" value={product.oldPrice} onChange={handleChange} placeholder="Old Price" />
        <input className="form-input" name="image" value={product.image} onChange={handleChange} placeholder="Image URL" />
        <input className="form-input" name="rating" value={product.rating} onChange={handleChange} placeholder="Rating" />
        <input className="form-input" name="reviews" value={product.reviews} onChange={handleChange} placeholder="Reviews" />
        <input className="form-input" name="discount" value={product.discount} onChange={handleChange} placeholder="Discount" />
        <input className="form-input" name="stock" value={product.stock} onChange={handleChange} placeholder="Stock" />
        <textarea className="form-input" name="description" value={product.description} onChange={handleChange} placeholder="Description" />

        <button onClick={handleSubmitProduct}>
          {editId ? "Update Product" : "Add Product"}
        </button>

        {editId && (
          <button className="cancel-edit-btn" onClick={resetForm}>
            Cancel Edit
          </button>
        )}

        <button onClick={handleLogout} className="admin-logout">
          Logout
        </button>
      </div>

      <div className="admin-products">
        <h2>Firebase Products</h2>

        {firebaseProducts.length === 0 ? (
          <p>No Firebase products added yet.</p>
        ) : (
          firebaseProducts.map((item) => (
            <div className="admin-product-row" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div>
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
                <p>{item.category}</p>
              </div>

              <div className="admin-product-actions">
                <button onClick={() => handleEditProduct(item)}>Edit</button>

                <button
                  className="remove-btn"
                  onClick={() => handleDeleteProduct(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Admin;