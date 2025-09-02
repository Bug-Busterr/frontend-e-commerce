import { Routes, Route } from 'react-router-dom';
import './App.css'
import ProductDetails from './components/ProductDetails.jsx';
import Home from './pages/Home.jsx'
import Cart from "./pages/Cart.jsx"; 
import Wishlist from "./pages/wishlist.jsx"; 
import About from "./pages/About.jsx"; 
import Contact from "./pages/Contact.jsx"; 
import Login from "./pages/Login.jsx"; 
import Signup from "./pages/SignUp.jsx"; 
import AdminDashboard from "./pages/AdminDashboard.jsx"
import Footer from "./Components/footer"; 


function App() {
  
  return (
  <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/About" element={<About />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
    </Routes>
    <Footer/>
  </>
  )
}

export default App
