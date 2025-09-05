import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import ProductDetails from "./components/ProductDetails.jsx";
import Home from "./pages/Home.jsx";
import Cart from "./components/Cart.jsx";
import Wishlist from "./pages/wishlist.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import ForgetPass from "./pages/ForgetPassword.jsx";
import Signup from "./pages/SignUp.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import Footer from "./Components/footer";
import Checkout from "./pages/Checkout.jsx";
import Account from "./pages/Account.jsx";
import { CartProvider } from "./components/CartContext.jsx";

import { WishlistProvider } from "./Components/WishlistContext.jsx";
import UserOrder from './Components/UserOrder.jsx'


function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [role, setRole] = useState(localStorage.getItem("role") || "user");

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedRole = localStorage.getItem("role");
    if (savedToken) setToken(savedToken);
    if (savedRole) setRole(savedRole);
  }, []);

  return (
    <>
       <WishlistProvider>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home token={token} />} />
          <Route path="/product/:id" element={<ProductDetails token={token} />} />
          <Route path="/cart" element={<Cart token={token} />} />
          <Route path="/AdminDashboard" element={<AdminDashboard token={token} />} />
          <Route path="/About" element={<About token={token} />} />
          <Route path="/wishlist" element={<Wishlist token={token} />} />
          <Route path="/Contact" element={<Contact token={token} />} />
          <Route path="/Login" element={<Login setToken={setToken} setRole={setRole} />} />
          <Route path="/Checkout" element={<Checkout token={token} />} />
          <Route path="/Signup" element={<Signup setToken={setToken} setRole={setRole} />} />
          <Route path="/Account" element={<Account token={token} />} />
          <Route path="/Forget" element={<ForgetPass />} />
          <Route path="/UserOrder" element={<UserOrder />} />
        </Routes>
      </CartProvider>
      </WishlistProvider>
      <Footer />
      
    </>
  );
}

export default App;
