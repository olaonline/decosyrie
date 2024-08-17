import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/Homepage";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/cart" element={<HomePage />} />
        <Route path="/login" element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
