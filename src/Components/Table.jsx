
function Table({ data }) {
  return (
    <section className="table-section">
      <h2>Recent Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User</th>
            <th>Status</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {data.map((order, i) => (
            <tr key={i}>
              <td>{order.id}</td>
              <td>{order.user}</td>
              <td>{order.status}</td>
              <td>{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Table;
