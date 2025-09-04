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
    ConfirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiMessage, setApiMessage] = useState(""); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("Validation passed");
    }
  }, [formErrors, isSubmit]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#-_])/;

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
    } else if (values.Password.length < 6) {
      errors.Password = "Password must be at least 6 characters";
    } else if (!passwordRegex.test(values.Password)) {
      errors.Password =
        "Password must contain 1 capital, 1 number, and 1 special char(@ # - _)";
    }
    if (!values.ConfirmPassword) {
      errors.ConfirmPassword = "Confirm Password is required!";
    } else if (values.Password !== values.ConfirmPassword) {
      errors.ConfirmPassword = "Passwords do not match!";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(data));
    setIsSubmit(true);

    if (Object.keys(validate(data)).length > 0) return;

    setIsSubmitting(true);
    setApiMessage("");

    try {
      
      const usersRes = await fetch("https://e-comerce-111.vercel.app/api/auth/register");
      const users = await usersRes.json();

      const isDuplicate = users.some(
        (user) =>
          user.email?.toLowerCase() === data.Email.toLowerCase() ||
          user.username?.toLowerCase() === data.Username.toLowerCase()
      );

      if (isDuplicate) {
        setApiMessage("User already exists with this Email or Username!");
        setIsSubmitting(false);
        return;
      }

      const res = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        const forData = await res.json();
        console.log(forData);
        setApiMessage("Account created successfully!");
        setData({
          Username: "",
          Email: "",
          Password: "",
          ConfirmPassword: "",
        });

      } else {
        setApiMessage("Something went wrong, please try again.");
      }
    } catch (error) {
      console.log(error);
      setApiMessage("Server error. Please try later.");
    } finally {
      setIsSubmitting(false);
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
      <Navbar />
      <div className="signup-container">
        <div className="img">
          <img src={Image} alt="img" />
        </div>
        <div className="inform">
          <h2>Create an account</h2>
          <p>Enter your details below</p>
          <div className="signUp">
            {apiMessage && (
              <div
                className={`api-message ${
                  apiMessage.includes("successfully")
                    ? "success"
                    : apiMessage.includes("exists")
                    ? "warning"
                    : "error"
                }`}
              >
                {apiMessage}
              </div>
            )}

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
              <input
                type="password"
                placeholder="Confirm Password"
                name="ConfirmPassword"
                value={data.ConfirmPassword}
                onChange={handleChange}
                required
              />
              <p>{formErrors.ConfirmPassword}</p>
              <br />
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Creating..." : "Create Account"}
              </button>
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
