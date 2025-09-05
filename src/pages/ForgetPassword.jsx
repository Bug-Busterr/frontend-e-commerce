import { useState } from "react";
import "../styles/ForgetPassword.css";
import Navbar from "../Components/Navbar";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmNewPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    try {
      const res = await fetch("https://e-comerce-111.vercel.app/api/auth/forgotPassword", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          newPassword,
          confirmNewPassword,
        }),
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        setMessage(data.message + "Password reset successfully!");
        setEmail("");
        setNewPassword("");
        setConfirmNewPassword("");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("Something went wrong, please try again later.");
    }
  };

  return (
    <div className="ForgetPassword-container">
      <div className="card">
        <h2>Forgot Password</h2>
        <br />
        <p>Please enter your email and new password</p>
        <br />
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
            <input
              className="input2"
              type="password"
              placeholder="New password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <input
              className="input3"
              type="password"
              placeholder="Confirm new password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              required
            />
            <button className="btn" type="submit">Reset Password</button>
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default ForgetPassword;