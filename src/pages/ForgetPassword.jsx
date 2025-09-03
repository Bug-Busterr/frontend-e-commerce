import { useState } from "react";
import "../styles/ForgetPassword.css";
import Navbar from "../components/Navbar";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });

      const data = await res.json();

      setMessage(data.message || "Email found! Check your inbox for the reset code.");
      setEmail("");
    } catch (error) {
      setMessage("Email not found! Please check and try again.");
    }
  };

  return (
    <>
    <Navbar />
    <div className="forget-container">
        <div className="card">
      <h2>Forgot Password</h2>
      <p>Please enter your email address to reset your password</p>
      <form onSubmit={handleSubmit}>
        <div className="container-input">
        <input
          className="input1"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="btn" type="submit">Send Reset Link</button>
        </div>
      </form>
      {message && <p>{message}</p>}
      </div>
    </div>
    </>
  );
};

export default ForgetPassword;
