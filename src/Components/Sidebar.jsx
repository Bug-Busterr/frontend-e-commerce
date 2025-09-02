import React from "react";
import { FaTachometerAlt, FaBox, FaUsers, FaShoppingCart, FaCog } from "react-icons/fa";

function Sidebar({ setActivePage }) {
  return (
    <aside className="sidebar">
      <h2 className="logo">Admin</h2>
      <ul>
        <li onClick={() => setActivePage("dashboard")}><FaTachometerAlt /> Dashboard</li>
        <li onClick={() => setActivePage("products")}><FaBox /> Products</li>
        <li onClick={() => setActivePage("orders")}><FaShoppingCart /> Orders</li>
        <li onClick={() => setActivePage("users")}><FaUsers /> Users</li>
        <li onClick={() => setActivePage("settings")}><FaCog /> Settings</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
