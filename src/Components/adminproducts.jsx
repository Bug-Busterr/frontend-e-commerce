import { useState } from "react"
import Table from "../components/Table"
import { FaTrash } from "react-icons/fa"

function Products({ apiData = [] }) {
  const [products, setProducts] = useState(apiData || [])
  const [form, setForm] = useState({ title: "", price: "", category: "", image: "" })
  const [editing, setEditing] = useState(null)
  const [search, setSearch] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    if (editing !== null) {
      const updated = [...products]
      updated[editing] = { ...form, id: products[editing].id }
      setProducts(updated)
      setEditing(null)
    } 
    else {
      setProducts([...products, { ...form, id: products.length + 1 }])
    }
    setForm({ title: "", price: "", category: "", image: "" })
  }

  const handleEdit = (row, i) => {
    setForm({ title: row.title, price: row.price, category: row.category, image: row.image })
    setEditing(i)
  }

  const handleDelete = i => setProducts(products.filter((_, idx) => idx !== i))

  const filteredProducts = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="admin-products">
      <h2>Products</h2>

      <input type="text" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} className="search-input" />

      <form onSubmit={handleSubmit} className="admin-form">
        <input type="text" placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required />
        <input type="number" placeholder="Price" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} required />
        <input type="text" placeholder="Category" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} required />
        <input type="file" accept="image/*" onChange={e => {
            const file = e.target.files[0]
            if (file) {
                const reader = new FileReader()
                reader.onload = () => setForm({ ...form, image: reader.result })
                reader.readAsDataURL(file)
            }
        }}/>
        <button type="submit">{editing !== null ? "Update" : "Add"} Product</button>
      </form>

      <Table
        headers={["Id", "Image", "Title", "Price", "Category" , ""]}
        data={filteredProducts.map((p, i) => ({
          id: p.id,
          image: <img src={p.image} alt={p.title} className="product-img" />,
          title: p.title,
          price: `$${p.price}`,
          category: p.category,
          actions: <FaTrash className="delete-btn" onClick={() => handleDelete(i)} />
        }))}
      />
    </div>
  )
}

export default Products
