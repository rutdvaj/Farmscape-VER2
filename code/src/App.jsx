import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/navbar";
import Herosection from "./Components/herosection";
import AboutUsMain from "./Components/aboutus-main";
import ServicesMain from "./Components/services-main";
import Footer from "./Components/footer";
import Login from "./Components/login";
import Register from "./Components/register";

function App() {
  return (
    <div>
      <Navbar />
      <Herosection />
      <AboutUsMain />
      <ServicesMain />
      <Footer />
      <Login />
      <Register />
    </div>
  );
}

export default App;
