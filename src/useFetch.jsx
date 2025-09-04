import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token")
      try {
        const res = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": token ? `Bearer ${token}` : undefined
          }
        })
        if (!res.ok) throw new Error(`${res.status}`)
        const json = await res.json()
        setData(json)
        setError(null)
      } catch (err) {
        setError(err.message)
        setData(null)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { data, loading, error }
}

export default useFetch
