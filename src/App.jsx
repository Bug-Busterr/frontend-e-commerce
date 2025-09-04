import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProductDetails from "./components/ProductDetails.jsx";
import Home from "./pages/Home.jsx";
import Cart from "./components/Cart.jsx";
import Wishlist from "./pages/wishlist.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import ForgetPass from "./pages/ForgetPassword.jsx";
import ResetPass from "./pages/ResetPassword.jsx";
import Signup from "./pages/SignUp.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import Footer from "./Components/footer";
import Checkout from "./pages/Checkout.jsx";
import Account from "./components/Account.jsx";
import { CartProvider } from "./components/CartContext.jsx";
import { WishlistProvider } from "./Components/WishlistContext.jsx";
import UserOrder from './Components/UserOrder.jsx'

function App() {
  return (
    <>
       <WishlistProvider>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/About" element={<About />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Forget" element={<ForgetPass />} />
          <Route path="/Reset" element={<ResetPass />} />
          <Route path="/UserOrder" element={<UserOrder />} />
        </Routes>
      </CartProvider>
      </WishlistProvider>
      <Footer />
      
    </>
  );
}

export default App;
