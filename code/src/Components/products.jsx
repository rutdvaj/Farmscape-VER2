import mainpimage from "../../src/assets/images/Headr/product-img.png";
import p1img from "../../src/assets/images/Headr/Rectangle 12p-item-1.png";
import p2img from "../../src/assets/images/Headr/Rectangle 18p-item-2.png";
import p3img from "../../src/assets/images/Headr/Rectangle 20p-item-3.png";
import p4img from "../../src/assets/images/Headr/Rectangle 22p-item-4.png";
import p5img from "../../src/assets/images/Headr/Rectangle 25p-item-5.png";
import p6img from "../../src/assets/images/Headr/Rectangle 26p-item-6.png";
import p7img from "../../src/assets/images/Headr/Rectangle 30p-item-7.png";
import p8img from "../../src/assets/images/Headr/Rectangle 29p-item-8.png";

const Product = () => {
  return (
    <>
      <div>
        <div className="product-img">
          <img src={mainpimage} alt="" />
        </div>

        <div className="product-display">
          <div className="p-1">
            <div className="p-1-img">
              <img src={p1img} alt="" />
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
              <img src={p2img} alt="" />
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
              <img src={p3img} alt="" />
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
              <img src={p4img} alt="" />
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
              <img src={p5img} alt="" />
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
              <img src={p6img} alt="" />
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
              <img src={p7img} alt="" />
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
              <img src={p8img} alt="" />
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
    </>
  );
};

export default Product;
