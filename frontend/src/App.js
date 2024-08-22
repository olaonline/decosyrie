import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/Homepage";
import Footer from "./components/Footer";
import AboutUs from "./pages/Aboutus";
import ProductDetails from "./components/ProductDetails";
import { CartProvider } from './context/CartContext'; // Import CartProvider
import CheckoutPage from "./pages/Checkout";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Products from "./pages/Products";
import OrdersPage from "./pages/Orders";
import OrderDetailsPage from "./components/OrderDetails";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import Contact from "./pages/Contact";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 200,
      once: true,
    });
  }, []);

  return (
    <CartProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/orders/:orderId" element={<OrderDetailsPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<ProductDetails />} /> 
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
    </CartProvider>
  );
}

export default App;
