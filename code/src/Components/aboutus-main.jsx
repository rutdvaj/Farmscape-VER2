import abtimg from '../../src/assets/images/Headr/About-us image.png'
import abtimgsm from '../../src/assets/images/hs-images/mobile-images/img-realreal-img.png'

const AboutUsMain = () => {
    return (
        <div>
            <section className="AU-sect">
      <div className="About-us">
        <div className="AU-img au-box">
              <img src={abtimg} alt="" className='desktop-img' />
              <img src={abtimgsm} className='mobile-img au-sm-img'/>
        </div>
        <div className="AU-desc au-box">
          <h1>About us</h1>
          <p>
            We serve as consultants as it relates to distribution channels,
            documentation <br />
            and validation and value experts. We also serve as an arena for
            guaranteed <br />
            and secured investments for investors willing to invest into the
            Agro-tech <br />industry.
          </p>
          <div className="AU-button">
            <button className="button">Read  more</button>
          </div>
        </div>
      </div>
    </section>
        </div>
    )

}

export default AboutUsMain;