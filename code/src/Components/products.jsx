import mainpimage from "../../src/assets/images/Headr/product-img.png";
import p1img from "../../src/assets/images/Headr/Rectangle 12p-item-1.png";
import p2img from "../../src/assets/images/Headr/Rectangle 18p-item-2.png";
import p3img from "../../src/assets/images/Headr/Rectangle 20p-item-3.png";
import p4img from "../../src/assets/images/Headr/Rectangle 22p-item-4.png";
import p5img from "../../src/assets/images/Headr/Rectangle 25p-item-5.png";
import p6img from "../../src/assets/images/Headr/Rectangle 26p-item-6.png";
import p7img from "../../src/assets/images/Headr/Rectangle 30p-item-7.png";
import p8img from "../../src/assets/images/Headr/Rectangle 29p-item-8.png";
import mainpimagem from "../../src/assets/images/hs-images/mobile-images/product-m-img.png";
import p1imgm from "../../src/assets/images/hs-images/mobile-images/p1-m-img.png";
import p2imgm from "../../src/assets/images/hs-images/mobile-images/p2-m-img.png";
import p3imgm from "../../src/assets/images/hs-images/mobile-images/p3-m-img.png";
import p4imgm from "../../src/assets/images/hs-images/mobile-images/p4-m-img.png";
import p5imgm from "../../src/assets/images/hs-images/mobile-images/p5-m-img.png";
import p6imgm from "../../src/assets/images/hs-images/mobile-images/p6-m-img.png";
import p7imgm from "../../src/assets/images/hs-images/mobile-images/p8-m-img.png";
import p8imgm from "../../src/assets/images/hs-images/mobile-images/p8-m-img.png";
import Navbar from "./navbar";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";

const Product = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="product-img">
          <img src={mainpimage} alt="" className="desktop-img" />
          <img src={mainpimagem} alt="" className="mobile-img" />
        </div>

        <div className="product-display">
          <div className="p-1">
            <div className="p-1-img">
              <img src={p1img} alt="" className="desktop-img" />
              <img src={p1imgm} alt="" className="mobile-img" />
            </div>
            <h3>Beans</h3>
            <p>Produce Origin : Singapore </p>
            <p>Color : Natural </p>
            <p>Grade : A </p>
            <div className="product-buttons">
              <button className="order">Order</button>
              <button className="enquire">Enquire</button>
            </div>
          </div>
          <div className="p-2">
            <div className="p-2-img">
              <img src={p2img} alt="" className="desktop-img" />
              <img src={p2imgm} alt="" className="mobile-img" />
            </div>
            <h3>Dried Hibuscus Flower</h3>
            <p> Produce Origin: India</p>
            <p> Type: Dried Flower</p>
            <p> Color: Dark Red </p>
            <p> Grade: A</p>
            <p> Form: Raw Material </p>
            <div className="product-buttons">
              <button className="order">Order</button>
              <button className="enquire">Enquire</button>
            </div>
          </div>
        </div>

        <div className="product-display-2">
          <div className="p-3">
            <div className="p3-img">
              <img src={p3img} alt="" className="desktop-img" />
              <img src={p4imgm} alt="" className="mobile-img" />
            </div>
            <h3>Fresh Dry Ginger Root</h3>
            <p>Origin: India</p>
            <p>Type: Fresh</p>
            <p>Color: Natural</p>
            <p>Grade : A</p>
            <div className="product-buttons">
              <button className="order">Order</button>
              <button className="enquire">Enquire</button>
            </div>
          </div>

          <div className="p-4">
            <div className="p4-img">
              <img src={p4img} alt="" className="desktop-img" />
              <img src={p3imgm} alt="" className="mobile-img" />
            </div>
            <h3>Garri</h3>
            <p>Origin : India</p>
            <p>Type : Dried</p>
            <p>Color : Natural</p>
            <p>Grade : A</p>
            <div className="product-buttons">
              <button className="order">Order</button>
              <button className="enquire">Enquire</button>
            </div>
          </div>
        </div>
        <div className="product-display-3">
          <div className="p-5">
            <div className="p5-img">
              <img src={p5img} alt="" className="desktop-img" />
              <img src={p5imgm} alt="" className="mobile-img" />
            </div>
            <h3>Ground nut</h3>
            <p>Origin : India</p>
            <p>Color : Natural</p>
            <p> Type : Dried</p>
            <div className="product-buttons">
              <button className="order">Order</button>
              <button className="enquire">Enquire</button>
            </div>
          </div>
          <div className="p-6">
            <div className="p6-img">
              <img src={p6img} alt="" className="desktop-img" />
              <img src={p6imgm} alt="" className="mobile-img" />
            </div>
            <h3>Raw Cashew Nuts</h3>
            <p>Origin : India</p>
            <p>Color : Natural</p>
            <p>Type : Fresh</p>
            <p>Grade : A</p>
            <div className="product-buttons">
              <button className="order">Order</button>
              <button className="enquire">Enquire</button>
            </div>
          </div>
        </div>

        <div className="product-display-4">
          <div className="p-7">
            <div className="p7-img">
              <img src={p7img} alt="" className="desktop-img" />
              <img src={p7imgm} alt="" className="mobile-img" />
            </div>
            <h3>Rice</h3>
            <p>Origin : India</p>
            <p>Type : Cereal</p>
            <p>Color : Natural</p>
            <p>Grade : A</p>
            <div className="product-buttons">
              <button className="order">Order</button>
              <button className="enquire">Enquire</button>
            </div>
          </div>
          <div className="p-8">
            <div className="p8-img">
              <img src={p8img} alt="" className="desktop-img" />
              <img src={p8imgm} alt="" className="mobile-img" />
            </div>
            <h3>Sesame Seeds</h3>
            <p>Origin : India</p>
            <p>Quality : A</p>
            <p> Type : Fresh</p>
            <p>Harvest : June</p>
            <p>MOQ : 100Kg</p>
            <div className="product-buttons">
              <button className="order">Order</button>
              <button className="enquire">Enquire</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
