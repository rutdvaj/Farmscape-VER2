import logoimg from '../../src/assets/images/Headr/logo-img.svg'
import footerimg1 from '../../src/assets/images/Headr/Group 3733FI-1.png'
import footerimg2 from '../../src/assets/images/Headr/Group 3734FI-2.png'
import footerimg3 from '../../src/assets/images/Headr/Group 3735FI-3.png'

const Footer = () => {
    return (
        <div>
            <section>
      <div className="footer">
        <div className="footers footer-1">
          <div className="logo">
            <img src={logoimg} alt="" />
            <h1>Farmscape</h1>
          </div>
        </div>
        <div className="footers footer-2">
          <h1>Singapore,Street 4, Singapore</h1>
          <br />
          <h1>0915621***, 08035024***</h1>
        </div>
        <div className="footers footer-3">
          <h1>info@farmscape.com</h1>
          <img
            src={footerimg1}
            alt=""
          />
          <img
            src={footerimg2}
            alt=""
          />
          <img
            src={footerimg3}
            alt=""
          />
        </div>
      </div>
    </section>
        </div>
    )
}

export default Footer;