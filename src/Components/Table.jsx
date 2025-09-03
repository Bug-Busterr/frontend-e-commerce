import "../styles/Table.css"

function Table({ headers = [], data = [] }) {
  return (
    <table className="table-box">
      <thead>
        <tr>
          {headers.map((h, i) => (
            <th key={i}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data && data.length > 0 ? (data.map((row, i) => (
            <tr key={i}>
              {Object.values(row).map((val, j) => (
                <td key={j}>{val}</td>
              ))}
            </tr>
          ))) : (
          <tr>
            <td className="no-data" colSpan={headers.length}>
              No data found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default Table
