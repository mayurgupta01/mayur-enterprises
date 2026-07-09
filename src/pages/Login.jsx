function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1>👤 Customer Login</h1>

        <input className="login-input" type="text" placeholder="Full Name" />
        <input className="login-input" type="tel" placeholder="Mobile Number" />
        <input className="login-input" type="email" placeholder="Email Address" />
        <input className="login-input" type="password" placeholder="Password" />

        <button>Login / Register</button>
      </div>
    </div>
  );
}

export default Login;