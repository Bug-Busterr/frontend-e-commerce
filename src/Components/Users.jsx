import Table from "../components/Table"
import useFetch from "../useFetch"
import { useState } from "react"

function Users() {
  const { data: users = [] } = useFetch("https://fakestoreapi.com/users")
  const [search, setSearch] = useState("")

  const mapped = (users || [])
    .map(u => ({
      id: u.id,
      name: `${u.name?.firstname || ""} ${u.name?.lastname || ""}`,
      email: u.email || "",
      city: u.address?.city || ""
    }))
    .filter(u => u.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <h2>Users</h2>

      <input type="text" placeholder="Search Users..." value={search} onChange={e => setSearch(e.target.value)} className="search-input"/>
      <Table headers={["Id", "Name", "Email", "City"]} data={mapped} />
    </div>
  )
}

export default Users
