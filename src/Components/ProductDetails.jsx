import '../styles/ProductDetails.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from '../Components/Navbar'

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.error("Error fetching product:", err));
    }, [id]);

    if (!product) return <p>loading details ....</p>;

    return (
        <>
            <Navbar />
            <div className="product-details">

                <div className="image-side">
                    <img src={product.image} alt={product.title} />
                </div>


                <div className="info-side">
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>


                    <h3>
                        <span className="price">${product.price}</span>
                        <span className="old-price">${(product.price * 1.2).toFixed(2)}</span>

                    </h3>

                    <button className="add-to-cart">Add to cart</button>
                </div>
            </div>
        </>
    );
}

export default ProductDetails

