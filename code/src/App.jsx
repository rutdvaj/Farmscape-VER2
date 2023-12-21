import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/navbar";
import Herosection from "./Components/herosection";
import AboutUsMain from "./Components/aboutus-main";
import ServicesMain from "./Components/services-main";
import Footer from "./Components/footer";
import Loginuser from "./Components/login";
import Registeruser from "./Components/register";
import { firebaseConfig } from "./Components/firebase";
import Home from "./Components/pages/home";
import Product from "./Components/products";
import Useradm from "./Components/useradm";
import ContactUs from "./Components/Contactus";
import { UserProvider } from "./Components/user";
function App() {
  return (
    <div>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Register" element={<Registeruser />} />
            <Route path="Register/Login" element={<Loginuser />} />
            <Route path="Product" element={<Product />} />
            <Route path="Dashboard" element={<Useradm />} />
            <Route path="Contactus" element={<ContactUs />} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
