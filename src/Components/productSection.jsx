import { useState } from 'react'
import { FaEye, FaHeart, FaStar } from "react-icons/fa"
import useFetch from "../useFetch"
import "../styles/productCard.css"
import { Link } from "react-router-dom"

const ExploreProducts = () => {
  const { data, loading, error } = useFetch("https://fakestoreapi.com/products")
  const [showAll, setShowAll] = useState(false)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  const displayedProducts = showAll ? data : data.slice(0, 4)

  return (
    <section className="product-section">
      <p className="section-subtitle">Our Products</p>
      <h2 className="section-title">Explore Our Products</h2>

      <div className="product-list">
        {displayedProducts.map((product) => (
          <div className="product-card" key={product.id}>
            
            <div className="product-img">
              <img src={product.image} alt={product.title} />
              <FaHeart className="icon heart" />
              <Link to={`/product/${product.id}`}>
                  <FaEye className="icon eye" />
              </Link>
            </div>
            
            <button className="add-btn">Add To Cart</button>
            <h3>{product.title}</h3>
            <p className="price">${product.price}</p>
            
            <div className="rating">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              <span>({product.rating.count})</span>
            </div>

          </div>
        ))}
      </div>
      
       {data.length > 4 && (
        <div className="view-all-container">
          <button className="view-all-btn" onClick={() => setShowAll(!showAll)}>
            {showAll ? "View Less" : "View All Products"}
          </button>
        </div>
      )}
    </section>
  )
}

export default ExploreProducts
