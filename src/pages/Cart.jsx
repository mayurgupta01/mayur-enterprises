import { Link } from "react-router-dom";

function Cart({
  cart,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  total,
}) {
  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#2e7d32",
          marginBottom: "40px",
        }}
      >
        🛒 Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            marginTop: "80px",
          }}
        >
          <h2>Your cart is empty 😔</h2>

          <p>Add some products to continue shopping.</p>

          <Link to="/">
            <button style={{ marginTop: "20px" }}>
              🛍 Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#fff",
                marginBottom: "20px",
                padding: "20px",
                borderRadius: "15px",
                boxShadow: "0 5px 15px rgba(0,0,0,.1)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "contain",
                  }}
                />

                <div>
                  <h3>{item.name}</h3>

                  <p
                    style={{
                      color: "#2e7d32",
                      fontWeight: "bold",
                    }}
                  >
                    ₹{item.price}
                  </p>

                  <p>{item.stock}</p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginTop: "10px",
                    }}
                  >
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      ➖
                    </button>

                    <strong>{item.quantity}</strong>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                    >
                      ➕
                    </button>
                  </div>
                </div>
              </div>

              <button
                onClick={() => removeItem(item.id)}
                style={{
                  background: "#d32f2f",
                }}
              >
                🗑 Remove
              </button>
            </div>
          ))}

          <div
            style={{
              textAlign: "right",
              marginTop: "40px",
            }}
          >
            <h2 style={{ color: "#2e7d32" }}>
              Total : ₹{total}
            </h2>

            <Link to="/checkout">
              <button
                style={{
                  marginTop: "15px",
                  padding: "15px 40px",
                  fontSize: "18px",
                }}
              >
                💳 Proceed to Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;