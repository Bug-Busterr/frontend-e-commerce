import { FaEye, FaHeart, FaStar } from 'react-icons/fa';

function ProductCard({ id,img, name, oldPrice, newPrice, discount }) {
    return (
        
        <div className='card1 show'>
            <div className='card-img'>
                <img src={img} width='200px' alt={name} />
                <button className='card-btn'>Add to cart</button>
                <FaEye className='eye-icon' />
                <FaHeart className='heart-icon' />
                <span className='discount'>-{discount}%</span>
            </div>

            <div className='img-details'>
                <h3>{name}</h3>
                <div>
                    <span className='price1'>${oldPrice}</span>
                    <span className='price2'>${newPrice}</span>
                </div>
                <div style={{ display: 'flex', gap: '5px', color: '#FFD700' }}>
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                    ))}
                </div>
            </div>
        </div>
        
    );
}

export default ProductCard;
