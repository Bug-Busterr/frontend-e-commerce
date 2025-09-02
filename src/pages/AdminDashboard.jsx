import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DashboardCards from "../Components/DashboardCards";
import Table from "../Components/Table";
import Navbar from "../components/Navbar";
import "../styles/AdminDashboard.css";

function AdminDashboard() {
  const [activePage, setActivePage] = useState("dashboard");

  const orders = [
    { id: "#123", user: "Ahmed", status: "Shipped", total: "$120" },
    { id: "#124", user: "Norhan", status: "Pending", total: "$80" },
    { id: "#125", user: "Omar", status: "Delivered", total: "$150" },
  ];

  return (
    <>
    <Navbar/>
    <div className="admin-container">
     
      <Sidebar setActivePage={setActivePage} />
      <div className="main-content">
        <Topbar />

        
        {activePage === "dashboard" && (
          <>
            <DashboardCards />
          </>
        )}
        {activePage === "products" && <h2>Products Page</h2>}
        {activePage === "orders" && <Table data={orders} />}
        {activePage === "users" && <h2>Users Page</h2>}
        {activePage === "settings" && <h2>Settings Page</h2>}
      </div>
    </div>
    </>
  );
}

export default AdminDashboard;
