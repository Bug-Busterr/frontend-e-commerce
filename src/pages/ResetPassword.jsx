import { useState } from "react";
import "../styles/ResetPassword.css";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    try {
      const res = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: "", 
          password,
        }),
      });

      const data = await res.json();
      setMessage(data.message || "Password reset successfully! You can now login.");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      setMessage("Something went wrong, please try again!");
    }
  };

  return (
    <div className="reset-container">
        <div className="card2">
      <h2>Reset Password</h2>
      <p>Enter your new password below</p>
      <form onSubmit={handleSubmit}>
        <div className="container-input2">
        <input className="input1"
          type="password"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input className="input2"
          type="password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button className="btn2" type="submit">Reset Password</button>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
    </div>
  );
};

export default ResetPassword;
