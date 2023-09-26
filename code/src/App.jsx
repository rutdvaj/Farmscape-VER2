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
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Register" element={<Register />} />
          <Route path="Register/Login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
