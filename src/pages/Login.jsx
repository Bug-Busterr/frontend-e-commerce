import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../assets/images/image.png";
import "../styles/LogIn.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";


const LogIn = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState({ text: "", type: "" });

  const [data, setData] = useState({
    Email: "",
    Password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.Email) {
      errors.Email = "Email is required!";
    } else if (!regex.test(values.Email)) {
      errors.Email = "Please enter the correct email!";
    }
    if (!values.Password) {
      errors.Password = "Password is required!";
    } else if (values.Password.length < 4) {
      errors.Password = "Password must be more than 4 characters";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(data));
    setIsSubmit(true);

    if (Object.keys(validate(data)).length !== 0) return;

    try {
      if (
        data.Email === "admin@exclusive.com" &&
        data.Password === "admin-1234567"
      ) {
        localStorage.setItem("role", "admin");
        localStorage.setItem("token", "admin-token");

        setMessage({ text: "Admin logged in successfully", type: "success" });

        setTimeout(() => {
          navigate("/");
        }, 1200);

        setData({ Email: "", Password: "" });
        return;
      }

      const usersRes = await fetch("https://e-comerce-111.vercel.app/api/auth/login");
      const users = await usersRes.json();

      const foundUser = users.find((u) => u.email === data.Email);

      if (!foundUser) {
        setMessage({ text: "Account not found", type: "error" });
        return;
      }

      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: foundUser.username,
          password: data.Password,
        }),
      });

      const userData = await res.json();

      if (userData && userData.token) {
        localStorage.setItem("token", userData.token);
        localStorage.setItem("role", "user");

        setMessage({ text: "User logged in successfully", type: "success" });

        setTimeout(() => {
          navigate("/");
        }, 1200);

        setData({ Email: "", Password: "" });
      } else {
        setMessage({ text: "Invalid credentials", type: "error" });
      }
    } catch (error) {
      console.log(error);
      setMessage({
        text: "Something went wrong, try again later",
        type: "error",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="app-loading">
        <h2>Loading Log in Page...</h2>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="img">
          <img src={Image} alt="img" />
        </div>
        <div className="inform">
          <h2>Log in to Exclusive</h2>
          <p>Enter your details below</p>

          {message.text && (
            <div className={`message ${message.type}`}>{message.text}</div>
          )}

          <div className="login">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                name="Email"
                value={data.Email}
                onChange={handleChange}
                required
              />
              <p>{formErrors.Email}</p>
              <br />
              <input
                type="password"
                placeholder="Password"
                name="Password"
                value={data.Password}
                onChange={handleChange}
                required
              />
              <p>{formErrors.Password}</p>
              <br />
              <div className="log">
                <button type="submit">Log In</button>
                <Link to ="/Forget">Forget Password?</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
