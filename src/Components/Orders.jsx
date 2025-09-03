import { useState } from "react"
import Table from "../components/Table"
import { FaTrash } from "react-icons/fa"

function Orders({ apiData = [] }) {
  const [orders, setOrders] = useState(apiData || [])
  const [form, setForm] = useState({ user: "", status: "Pending", total: 0 })
  const [search, setSearch] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    setOrders([...orders, { ...form, id: orders.length + 1 }])
    setForm({ user: "", status: "Pending", total: 0 })
  }

  const handleDelete = i => setOrders(orders.filter((_, idx) => idx !== i))

  const filteredOrders = orders.filter(o =>
    o.user.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <h2>Orders</h2>

      <input type="text" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} className="search-input" />

      <form onSubmit={handleSubmit} className="admin-form">
        <input type="text" placeholder="User Name" value={form.user} onChange={e => setForm({ ...form, user: e.target.value })} required />
        <input type="number" placeholder="Total Amount ($)" value={form.total === 0 ? "" : form.total} onChange={e => setForm({ ...form, total: e.target.value })} required />
        <select value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}>
          <option>Pending</option>
          <option>Shipped</option>
          <option>Delivered</option>
          <option>Canceled</option>
        </select>
        <button type="submit">Add Order</button>
      </form>

      <Table
        headers={["Id", "User", "Status", "Total" , ""]}
        data={filteredOrders.map((o, i) => ({
          id: o.id,
          user: o.user,
          status: o.status,
          total: `$${o.total}`,
          actions: <FaTrash className="delete-btn" onClick={() => handleDelete(i)} />
        }))}
      />
    </div>
  )
}

export default Orders
