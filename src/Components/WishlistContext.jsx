// src/components/WishlistContext.jsx
import { createContext, useState, useContext } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);

    // دالة لإضافة منتج إلى قائمة المفضلة
    const addToWishlist = (product) => {
        setWishlist((prevWishlist) => {
            // نتحقق أولاً هل المنتج موجود بالفعل في القائمة أم لا
            const isExisting = prevWishlist.some((item) => item.id === product.id);
            if (isExisting) {
                return prevWishlist; // إذا كان موجوداً، لا تفعل شيئاً
            } else {
                // إذا لم يكن موجوداً، أضف المنتج الجديد إلى القائمة
                return [...prevWishlist, product];
            }
        });
    };

    // دالة لحذف منتج من قائمة المفضلة
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