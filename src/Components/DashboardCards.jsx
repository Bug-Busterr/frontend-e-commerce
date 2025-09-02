import AdminCart from "../Components/AdminCart.jsx";  

function DashboardCards() {
  return (
    <section className="dashboard-cards">
      <AdminCart title="Total Products" value="120" />
      <AdminCart title="Total Orders" value="80" />
      <AdminCart title="Total Users" value="45" />
      <AdminCart title="Revenue" value="$5000" />
    </section>
  );
}
export default DashboardCards
