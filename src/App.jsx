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

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const addToWishlist = (product) => {
    const alreadyAdded = wishlist.find(
      (item) => item.id === product.id
    );

    if (!alreadyAdded) {
      setWishlist([...wishlist, product]);
    }
  };

  const removeWishlistItem = (id) => {
    setWishlist(
      wishlist.filter((item) => item.id !== id)
    );
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <>
      <Navbar
        cartCount={cartCount}
        wishlistCount={wishlist.length}
        search={search}
        setSearch={setSearch}
      />

      <Routes>
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

        <Route
          path="/product/:id"
          element={
            <ProductDetails
              addToCart={addToCart}
              addToWishlist={addToWishlist}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeItem={removeItem}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              total={total}
            />
          }
        />

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

        <Route path="/login" element={<Login />} />

        <Route
          path="/checkout"
          element={
            <Checkout
              cart={cart}
              total={total}
            />
          }
        />

        <Route path="/admin" element={<Admin />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;