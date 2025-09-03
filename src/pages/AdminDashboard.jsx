import { useState } from "react"
import Sidebar from "../components/Sidebar"
import DashboardCards from "../components/DashboardCards"
import Products from "../components/adminproducts"
import Orders from "../components/Orders"
import Discounts from "../components/Discounts"
import Navbar from "../components/Navbar"
import useFetch from "../useFetch"
import Users from "../components/Users"
import "../styles/AdminDashboard.css"
import "../styles/admin.css"

function AdminDashboard() {
  const [activePage, setActivePage] = useState("dashboard")
  const [search, setSearch] = useState("")

  const { data: products } = useFetch("https://fakestoreapi.com/products")
  const { data: users } = useFetch("https://jsonplaceholder.typicode.com/users")
  const { data: posts } = useFetch("https://jsonplaceholder.typicode.com/posts?_limit=5")

  const orders = posts?.map((o, i) => ({
    id: i + 1,
    user: users?.[i]?.name,
    status: "Pending",
    total: `${(Math.random() * 200).toFixed(2)}`
  })) || []

  return (
    <>
      <Navbar />
      <div className="admin-dashboard">
        <Sidebar setActivePage={setActivePage} />
        <div className="admin-container">
          <div className="main-content">

            {activePage === "dashboard" && <DashboardCards />}
            {activePage === "products" && <Products apiData={products?.filter(p => p.title.toLowerCase().includes(search.toLowerCase()))} />}
            {activePage === "orders" && <Orders apiData={orders?.filter(o => o.user?.toLowerCase().includes(search.toLowerCase()))} />}
            {activePage === "users" && <Users />}
            {activePage === "discounts" && <Discounts />}
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminDashboard
