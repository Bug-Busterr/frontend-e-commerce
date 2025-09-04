import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Profile.css";
import Navbar from "../Components/Navbar";

const Account = () => {
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords({ ...passwords, [name]: value });
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();

    if (!passwords.currentPassword || !passwords.newPassword || !passwords.confirmNewPassword) {
      setMessage("Please fill all password fields");
      return;
    }

    if (passwords.newPassword !== passwords.confirmNewPassword) {
      setMessage("New Password and Confirm Password do not match!");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setMessage("You are not logged in. Please login first.");
        return;
      }

      const res = await fetch(
        "https://e-comerce-111.vercel.app/api/auth/updatePassword",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            currentPassword: passwords.currentPassword,
            newPassword: passwords.newPassword,
            confirmPassword: passwords.confirmNewPassword,
          }),
        }
      );

      const data = await res.json();

      if (res.status === 401 || res.status === 403) {
        setMessage("Token invalid or expired, please login again.");
        localStorage.removeItem("token");
        setTimeout(() => navigate("/"), 1500);
        return;
      }

      if (!res.ok) {
        throw new Error(data.message || "Failed to update password");
      }

      setMessage("Password updated successfully!");
      setPasswords({ currentPassword: "", newPassword: "", confirmNewPassword: "" });

      localStorage.removeItem("token");
      setTimeout(() => navigate("/Login"), 1500);

    } catch (error) {
      console.error("Error:", error.message);
      setMessage(`${error.message}`);
    }
  };

  return (
    <>
      <Navbar />
      <div className="account-container">
        <div className="change">
          <div className="left-side">
            <div>
              <h3>Manage My Account</h3>
              <div className="p1">
                <p className="active">Password Settings</p>
              </div>
            </div>
            <div>
              <h3>My Orders</h3>
              <div className="p2">
                <p onClick={() => navigate("/Orders")}>Go to My Orders</p>
                <p>My Returns</p>
                <p>My Cancellations</p>
              </div>
            </div>
            <div>
              <h3 onClick={() => navigate("/Wishlist")}>My WishList</h3>
            </div>
          </div>

          <div className="right-side">
            <div>
              <p className="edit">Change Your Password</p>
              {message && <p className="message">{message}</p>}

              <form onSubmit={handleUpdatePassword}>
                <div className="div2">
                  <input
                    className="pass"
                    type="password"
                    name="currentPassword"
                    placeholder="Current Password"
                    value={passwords.currentPassword}
                    onChange={handlePasswordChange}
                  />
                  <input
                    className="pass"
                    type="password"
                    name="newPassword"
                    placeholder="New Password"
                    value={passwords.newPassword}
                    onChange={handlePasswordChange}
                  />
                  <input
                    className="pass"
                    type="password"
                    name="confirmNewPassword"
                    placeholder="Confirm New Password"
                    value={passwords.confirmNewPassword}
                    onChange={handlePasswordChange}
                  />
                </div>

                <div className="btn">
                  <button type="submit" className="btn2">
                    Update Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
