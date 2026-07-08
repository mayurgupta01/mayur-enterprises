function Login() {
  return (
    <div style={{ minHeight: "70vh", padding: "60px 20px" }}>
      <div
        style={{
          maxWidth: "420px",
          margin: "auto",
          background: "white",
          padding: "30px",
          borderRadius: "18px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#2e7d32" }}>
          👤 Customer Login
        </h1>

        <input className="login-input" type="text" placeholder="Full Name" />
        <input className="login-input" type="tel" placeholder="Mobile Number" />
        <input className="login-input" type="email" placeholder="Email Address" />
        <input className="login-input" type="password" placeholder="Password" />

        <button style={{ width: "100%", marginTop: "15px" }}>
          Login / Register
        </button>
      </div>
    </div>
  );
}

export default Login;