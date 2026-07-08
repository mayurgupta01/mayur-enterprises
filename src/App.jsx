import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import Admin from "./pages/Admin";

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [search, setSearch] = useState("");

  // Add to Cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Add to Wishlist
  const addToWishlist = (product) => {
    const alreadyAdded = wishlist.find(
      (item) => item.id === product.id
    );

    if (!alreadyAdded) {
      setWishlist([...wishlist, product]);
    }
  };

  // Remove from Cart
  const removeItem = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  // Remove from Wishlist
  const removeWishlistItem = (id) => {
    setWishlist(
      wishlist.filter((item) => item.id !== id)
    );
  };

  // Total Price
  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <>
      <Navbar
        cartCount={cart.length}
        wishlistCount={wishlist.length}
        search={search}
        setSearch={setSearch}
      />

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <Home
              addToCart={addToCart}
              addToWishlist={addToWishlist}
              search={search}
            />
          }
        />

        {/* Product Details */}
        <Route
          path="/product/:id"
          element={
            <ProductDetails
              addToCart={addToCart}
              addToWishlist={addToWishlist}
            />
          }
        />

        {/* Cart */}
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeItem={removeItem}
              total={total}
            />
          }
        />

        {/* Wishlist */}
        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishlist={wishlist}
              removeWishlistItem={removeWishlistItem}
              addToCart={addToCart}
            />
          }
        />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Checkout */}
        <Route path="/checkout" element={<Checkout />} />

        {/* Admin */}
        <Route path="/admin" element={<Admin />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;