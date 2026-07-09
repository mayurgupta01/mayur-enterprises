import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

import products from "../data/products";
import { db } from "../services/firebase";

function ProductDetails({ addToCart, addToWishlist }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const localProduct = products.find((item) => String(item.id) === String(id));

      if (localProduct) {
        setProduct(localProduct);
        setLoading(false);
        return;
      }

      try {
        const productRef = doc(db, "products", id);
        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {
          setProduct({
            id: productSnap.id,
            ...productSnap.data(),
          });
        }
      } catch (error) {
        console.log("Product details error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="not-found">
        <h1>Loading product...</h1>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="not-found">
        <h1>❌ Product Not Found</h1>

        <Link to="/">
          <button>🏠 Back to Home</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="product-details-page">
      <div className="product-details-card">
        <div className="product-details-image">
          <img src={product.image} alt={product.name} loading="lazy" />
        </div>

        <div className="product-details-info">
          <span className="details-discount">{product.discount}</span>

          <h1>{product.name}</h1>

          <h3 className="details-rating">
            ⭐ {product.rating} ({product.reviews} Reviews)
          </h3>

          <p><b>🏷 Brand :</b> {product.brand}</p>
          <p><b>📂 Category :</b> {product.category}</p>
          <p><b>⚖ Weight :</b> {product.weight}</p>

          <h2 className="details-price">₹{product.price}</h2>

          <p className="details-old-price">₹{product.oldPrice}</p>

          <p
            className={
              product.stock === "In Stock"
                ? "details-stock in-stock"
                : "details-stock low-stock"
            }
          >
            📦 {product.stock}
          </p>

          <p className="details-description">{product.description}</p>

          <p>🚚 Delivery in <b>30-60 Minutes</b></p>

          <div className="details-buttons">
            <button onClick={() => addToCart(product)}>🛒 Add to Cart</button>

            <button
              className="wishlist-add-btn"
              onClick={() => addToWishlist(product)}
            >
              ❤️ Add to Wishlist
            </button>
          </div>

          <div className="back-shopping">
            <Link to="/">
              <button>⬅ Back to Shopping</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;