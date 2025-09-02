import React from "react";
import "../styles/AdminCart.css"; 

function AdminCart({ icon, title, value, color }) {
  return (
    <div className="admin-card" style={{ borderLeft: `5px solid ${color}` }}>
      <div className="admin-card-icon" style={{ color: color }}>
        {icon}
      </div>
      <div className="admin-card-info">
        <h4>{title}</h4>
        <p>{value}</p>
      </div>
    </div>
  );
}

export default AdminCart;
