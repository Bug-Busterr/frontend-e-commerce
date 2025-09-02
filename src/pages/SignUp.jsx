import { useState, useEffect } from "react";
import Image from "../assets/images/image.png";
import "../styles/SignUp.css";
import Navbar from "../components/Navbar";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState({
    Username: "",
    Email: "",
    Password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      alert("Signed up successfully");
    }
    console.log(data);
  }, [formErrors, isSubmit]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.Username) {
      errors.Username = "Username is required!";
    }
    if (!values.Email) {
      errors.Email = "Email is required!";
    } else if (!regex.test(values.Email)) {
      errors.Email = "This is not a valid email format!";
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

    try {
      const res = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const forData = await res.json();
      console.log(forData);
      setData({
        Username: "",
        Email: "",
        Password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return (
      <div className="app-loading">
        <h2>Loading Sign up Page...</h2>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <>
    <Navbar/>
    <div className="container">
      <div className="img">
        <img src={Image} alt="img" />
      </div>
      <div className="inform">
        <h2>Create an account</h2>
        <p>Enter your details below</p>
        <div className="signUp">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="Username"
              value={data.Username}
              onChange={handleChange}
              required
            />
            <p>{formErrors.Username}</p>
            <br />
            <input
              type="email"
              placeholder="Email or Phone Number"
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
            <button type="submit">Create Account</button>
          </form>
        </div>
        <span>
          Already have account? <a href="/Login"> log in</a>
        </span>
      </div>
    </div>
  </>
  );
};

export default SignUp;
