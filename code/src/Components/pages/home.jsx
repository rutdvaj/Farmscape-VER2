import Navbar from "../navbar";
import Herosection from "../herosection";
import AboutUsMain from "../aboutus-main";
import ServicesMain from "../services-main";
import Footer from "../footer";
import { UserProvider } from "../user";
const Home = () => {
  return (
    <>
      <UserProvider>
        <Navbar />
        <Herosection />
        <AboutUsMain />
        <ServicesMain />
        <Footer />
      </UserProvider>
    </>
  );
};

export default Home;
