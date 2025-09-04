import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../assets/images/image.png";
import "../styles/SignUp.css";
import Navbar from "../Components/Navbar";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    avatar: null, 
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiMessage, setApiMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "avatar") {
      setData({ ...data, avatar: e.target.files[0] });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#-_])/;

    if (!values.name) errors.name = "Name is required";
    if (!values.email) errors.email = "Email is required";
    else if (!emailRegex.test(values.email))
      errors.email = "Invalid email format";
    if (!values.password) errors.password = "Password is required";
    else if (values.password.length < 6)
      errors.password = "Password must be at least 6 characters";
    else if (!passwordRegex.test(values.password))
      errors.password =
        "Password must contain 1 capital, 1 number, and 1 special char (@#-_)";
    if (!values.confirmPassword) errors.confirmPassword = "Confirm password is required";
    else if (values.password !== values.confirmPassword)
      errors.confirmPassword = "Passwords do not match";

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(data));
    if (Object.keys(validate(data)).length > 0) return;

    setIsSubmitting(true);
    setApiMessage("");

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone || "");
      formData.append("password", data.password);
      if (data.avatar) formData.append("avatar", data.avatar);

      const res = await fetch("https://e-comerce-111.vercel.app/api/auth/register", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setApiMessage("Account created successfully!");
        setData({
          name: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
          avatar: null,
        });
        setTimeout(() => navigate("/Login"), 1500);
      } else {
        const errorData = await res.json();
        setApiMessage(errorData.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      setApiMessage("Server error. Please try later.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          {apiMessage && <div className={`api-message`}>{apiMessage}</div>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={data.name}
              onChange={handleChange}
              required
            />
            <p>{formErrors.name}</p>

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
              type="text"
              placeholder="Phone"
              name="phone"
              value={data.phone}
              onChange={handleChange}
            />

            <input
              type="password"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={handleChange}
              required
            />
            <p>{formErrors.password}</p>

            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={handleChange}
              required
            />
            <p>{formErrors.confirmPassword}</p>

            <input type="file" name="avatar" onChange={handleChange} />

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Creating..." : "Create Account"}
            </button>
          </form>
          <span>
            Already have account? <a href="/Login">Log in</a>
          </span>
        </div>
      </div>
    </>
  );
};

export default SignUp;
