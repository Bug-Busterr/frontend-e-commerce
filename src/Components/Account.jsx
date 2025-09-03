import { useState } from "react";
import "../styles/Profile.css";
import Navbar from "../components/Navbar"
const Profile = () => {
  const [active, setActive] = useState("My Profile");

  const handleClick = (name) => {
    setActive(name);
  };

  return (
    <>
    <Navbar/>
    <div className="account-container">

      <div className="change">
        <div className="left-side">
          <div>
            <h3>Manage My Account</h3>
            <div className="p1">
              <p className={active === "My Profile" ? "active" : ""}
                onClick={() => handleClick("My Profile")}>
                My Profile
              </p>
              <div className="num2">
                <p className={active === "Address Book" ? "active" : ""}
                  onClick={() => handleClick("Address Book")}>
                  Address Book
                </p>
                <p className={active === "My Payment Options" ? "active" : ""}
                  onClick={() => handleClick("My Payment Options")}>
                  My Payment Options
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3>My Orders</h3>
            <div className="p2">
              <p className={active === "My Returns" ? "active" : ""}
                onClick={() => handleClick("My Returns")}>
                My Returns
              </p>
              <p className={active === "My Cancellations" ? "active" : ""}
                onClick={() => handleClick("My Cancellations")}>
                My Cancellations
              </p>
            </div>
          </div>

          <div>
            <h3>My WishList</h3>
          </div>
        </div>

        <div className="right-side">
          <div>
            <p className="edit">Edit Your Profile</p>
            <div>
              <form>
                <div className="div1">
                  <div className="div3">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Md"
                    ></input>
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="rimelllll@gmail.com"
                    ></input>
                  </div>
                  <div className="div4">
                    <label>Last Name</label>
                    <input 
                    type="text" 
                    name="lastName" 
                    placeholder="Rimel"  
                    ></input>
                    <label>Address</label>
                    <input
                      type="text"
                      name="address"
                      placeholder="Kingston, 5236, United State"
                    ></input>
                  </div>
                </div>
                <div className="div2">
                  <label>Password Changes</label>
                  <input
                    className="pass"
                    type="password"
                    name="password"
                    placeholder="Current Password"
                  ></input>
                  <br />
                  <input
                    className="pass"
                    type="password"
                    name="newPassword"
                    placeholder="New Password"
                  ></input>
                  <br />
                  <input
                    className="pass"
                    type="password"
                    name="confirmNewPassword"
                    placeholder="Confirm New Password"
                  ></input>
                </div>
                <br />
                <div className="btn">
                  <button type="button" className="btn1">
                    Cancel
                  </button>
                  <button type="button" className="btn2">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Profile;