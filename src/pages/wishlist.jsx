import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import WishlistSection from "../components/wishlistSection"
import Recommendation from "../components/recommendation"

const wishlist=() =>{
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="app-loading">
        <h2>Loading Wishlist...</h2>
        <div className="loading-spinner"></div>
      </div>
    )
  }

  return (
    <div className="app">
      <Navbar/>
      <WishlistSection/>
      <Recommendation/>
    </div>
  );
}

export default wishlist
