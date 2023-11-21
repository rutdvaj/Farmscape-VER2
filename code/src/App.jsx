import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/navbar";
import Herosection from "./Components/herosection";
import AboutUsMain from "./Components/aboutus-main";
import ServicesMain from "./Components/services-main";
import Footer from "./Components/footer";
import Login from "./Components/login";
import Register from "./Components/register";
import { firebaseConfig } from "./Components/firebase";
import Home from "./Components/pages/home";
import Product from "./Components/products";
import Useradm from "./Components/useradm";
import ContactUs from "./Components/Contactus";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Register" element={<Register />} />
          <Route path="Register/Login" element={<Login />} />
          <Route path="Product" element={<Product />} />
          <Route path="Dashboard" element={<Useradm />} />
          <Route path="Contactus" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
