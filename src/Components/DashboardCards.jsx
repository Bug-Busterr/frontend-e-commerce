import AdminCart from "../components/AdminCart"
import useFetch from "../useFetch"

function DashboardCards() {
  const { data: products } = useFetch("https://fakestoreapi.com/products")
  const { data: users } = useFetch("https://fakestoreapi.com/users")
  const { data: orders } = useFetch("https://fakestoreapi.com/carts")

  const totalRevenue = products? products.reduce((sum, p) => sum + p.price, 0).toFixed(2): 0

  return (
    <section className="dashboard-cards">
      <AdminCart title="Total Products" value={products ? products.length : "0"} />
      <AdminCart title="Total Orders" value={orders ? orders.length : "0"} />
      <AdminCart title="Total Users" value={users ? users.length : "0"} />
      <AdminCart title="Revenue" value={`$${totalRevenue}`} />
    </section>
  )
}

export default DashboardCards
