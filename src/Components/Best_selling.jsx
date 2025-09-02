import {useState } from 'react';
import '../styles/productCard.css';
import useFetch from "../useFetch"
import { FaEye, FaHeart, FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"

function Best_selling() {
 const { data, loading, error } = useFetch("https://fakestoreapi.com/products")
  const [showAll, setShowAll] = useState(false)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

    const visibleProducts = showAll ? data : data.slice(5, 9);

    return (
        <div className="product-section">
            <h3 className='section-subtitle'>This Month</h3>
            <h2 className="section-title">Best Selling Products</h2>

            <div className='product-list'>
                {visibleProducts.map(product => (
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

        </div>
    );
}

export default Best_selling;
