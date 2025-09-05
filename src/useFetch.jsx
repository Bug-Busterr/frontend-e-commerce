// import { useState, useEffect } from 'react'

// const useFetch = (url) => {
//   const [data, setData] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(url)
//         if (!res.ok) throw new Error(`${res.status}`)
//         const json = await res.json()
//         setData(json)
//         setError(null)
//       } 
//       catch (err) {
//         setError(err.message)
//         setData(null)
//       } 
//       finally {
//         setLoading(false)
//       }
//     }

//     fetchData()
    
//   }, [url])

//   return { data, loading, error }
// }

// export default useFetch



import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(result => {
        setData(result.data.products);  // 👈 هنا التعديل المهم
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
