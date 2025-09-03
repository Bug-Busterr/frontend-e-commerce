import { useState } from "react"
import Table from "../components/Table"
import { FaTrash } from "react-icons/fa"

function Discounts() {
  const [discounts, setDiscounts] = useState([
    { code: "SALE20", type: "Percentage", value: "20%", status: "Active" }
  ])

  const [form, setForm] = useState({ code: "", type: "Percentage", value: "", status: "Active" })

  const handleSubmit = e => {
    e.preventDefault()
    setDiscounts([...discounts, form])
    setForm({ code: "", type: "Percentage", value: "", status: "Active" })
  }

  const handleDelete = i => {
    setDiscounts(discounts.filter((_, idx) => idx !== i))
  }

  return (
    <div>
      <h2>Discounts</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <input type="text" placeholder="Code" value={form.code} onChange={e => setForm({ ...form, code: e.target.value })} required />
        <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>
          <option>Percentage</option>
          <option>Fixed</option>
        </select>
        <input type="text" placeholder="Value" value={form.value} onChange={e => setForm({ ...form, value: e.target.value })} required />
        <select value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}>
          <option>Active</option>
          <option>Expired</option>
        </select>
        <button type="submit">Add Coupon</button>
      </form>

      <Table
        headers={["Code", "Type", "Value", "Status", ""]}
        data={discounts.map((d, i) => ({
          code: d.code,
          type: d.type,
          value: d.value,
          status: d.status,
          actions: (
            <div className="table-buttons">
              <FaTrash className="delete-btn" onClick={() => handleDelete(i)} />
            </div>
          )
        }))}
      />
    </div>
  )
}

export default Discounts
