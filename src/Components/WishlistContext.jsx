// src/components/WishlistContext.jsx
import { createContext, useState, useContext } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);

    
    const addToWishlist = (product) => {
        setWishlist((prevWishlist) => {
            
            const isExisting = prevWishlist.some((item) => item.id === product.id);
            if (isExisting) {
                return prevWishlist; 
            } else {
                
                return [...prevWishlist, product];
            }
        });
    };

    
    const removeFromWishlist = (id) => {
        setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== id));
    };

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};


export const useWishlist = () => useContext(WishlistContext);
