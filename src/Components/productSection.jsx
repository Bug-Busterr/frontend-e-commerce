import '../styles/productCard.css';
import {useState, useRef} from 'react';
import useFetch from "../useFetch"
import ProductCard from '../components/ProductCard';

const ExploreProducts = () => {
  
  const { data, loading, error } = useFetch("https://fakestoreapi.com/products")
  const [showAll, setShowAll] = useState(false)
  const cardsRef = useRef(null);
  
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

    const visibleProducts = showAll ? data : data.slice(0, 4);

  return (
    <section className="product-section">
      <p className="section-subtitle">Our Products</p>
      <h2 className="section-title">Explore Our Products</h2>

      <div className='product-list' ref={cardsRef}>
                {visibleProducts.map(product => (
                    <ProductCard
                        key={product.id}
                        id={product.id} 
                        img={product.image}
                        name={product.title}
                        oldPrice={(product.price * 1.2).toFixed(2)}
                        newPrice={product.price}
                        discount={20}
                    />
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
