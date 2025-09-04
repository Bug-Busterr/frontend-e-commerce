import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Image from "../assets/images/image.png";
import "../styles/LogIn.css";
import Navbar from "../Components/Navbar";

const Login = ({ handleLogin }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [data, setData] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.email) errors.email = "Email is required!";
    else if (!regex.test(values.email)) errors.email = "Please enter a valid email!";
    if (!values.password) errors.password = "Password is required!";
    else if (values.password.length < 4) errors.password = "Password must be more than 4 characters";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate(data);
    setFormErrors(errors);

    if (Object.keys(errors).length !== 0) return;

    setMessage({ text: "", type: "" });

    try {
      localStorage.clear();

      const res = await fetch("https://e-comerce-111.vercel.app/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email.trim(),
          password: data.password,
        }),
      });

      const userData = await res.json();
      console.log(userData)
      if (res.ok && userData.data.token) {
        localStorage.setItem("token", userData.data.token);
        localStorage.setItem("role", userData.data.role || "user");

        if (handleLogin) handleLogin(userData.data.token, userData.data.role || "user");

        setMessage({ text: "Logged in successfully", type: "success" });

        if (userData.data.role === "ADMIN") navigate("/AdminDashboard");
        else navigate("/Account");
      } 
      else {
        setMessage({ text: userData.message || "Invalid credentials", type: "error" });
      }
    } catch (error) {
      setMessage({ text: "Server error. Try again later", type: "error" });
    }
  };

  if (isLoading)
    return (
      <div className="app-loading">
        <h2>Loading Log in Page...</h2>
        <div className="loading-spinner"></div>
      </div>
    );

  return (
    <>
      <Navbar role={localStorage.getItem("role")} />
      <div className="login-container">
        <div className="img">
          <img src={Image} alt="img" />
        </div>
        <div className="inform">
          <h2>Log in to Exclusive</h2>
          <p>Enter your details below</p>

          {message.text && <div className={`message ${message.type}`}>{message.text}</div>}

          <div className="login">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={data.email}
                onChange={handleChange}
                required
              />
              <p>{formErrors.email}</p>

              <input
                type="password"
                placeholder="Password"
                name="password"
                value={data.password}
                onChange={handleChange}
                required
              />
              <p>{formErrors.password}</p>

              <div className="log">
                <button type="submit">Log In</button>
                <Link to="/Forget">Forget Password?</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
