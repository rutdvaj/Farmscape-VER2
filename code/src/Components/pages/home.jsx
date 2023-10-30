import Navbar from "../navbar";
import Herosection from "../herosection";
import AboutUsMain from "../aboutus-main";
import ServicesMain from "../services-main";
import Footer from "../footer";
import Product from "../products";
import Useradm from "../useradm";

const Home = () => {
  return (
    <>
      <Navbar />
      <Herosection />
      <AboutUsMain />
      <ServicesMain />
      <Footer />
      <Useradm />
      {/* <Product /> */}
    </>
  );
};

export default Home;
