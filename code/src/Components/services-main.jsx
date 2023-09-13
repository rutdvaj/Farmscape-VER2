import firstimg from '../../src/assets/images/Headr/First.png'
import firstsmimg from '../../src/assets/images/hs-images/mobile-images/s1-img.png'
import secondimg from '../../src/assets/images/Headr/second.png'
import secondsming from '../../src/assets/images/hs-images/mobile-images/s2-img.png'
import thirdimg from '../../src/assets/images/Headr/third.png'
import thirdsming from '../../src/assets/images/hs-images/mobile-images/s3-img.png'
import fourthimg from '../../src/assets/images/Headr/four.png'
import fourthsmimg from '../../src/assets/images/hs-images/mobile-images/s4-img.png'
import faqimg1 from '../../src/assets/images/Headr/img1.png'
import faqimg2 from '../../src/assets/images/Headr/img2.png'
import faqimg3 from '../../src/assets/images/Headr/img3.png'

const ServicesMain = () => {
    return (
        <div>
 <section className="bg-color">
      <div className="serv-head">
        <h1>Services we render</h1>
      </div>
      <div className="serv-info">
        <div className="overlap flex-container">
          <div className="rectangle rectangle-1">
            <img
              src={firstimg}
              className="ser-img desktop-img"
              alt=""
                />
                <img src={ firstsmimg} className='ser-img serv-img-1 mobile-img'/>
            <h1>Consultation</h1>
            <p>
              We build resourceful partnerships agile enough to move with you,
              whether you’re an international corporation or a small startup
            </p>
          </div>
          <div className="rectangle rectangle-2">
            <img
              className="ser-img desktop-img"
              src={secondimg}
              alt=""
                />
                <img src={ secondsming} className='ser-img serv-img-2 mobile-img' />
            <h1>Logistics</h1>
            <p>
              We are known for our ability to handle every last detail of our
              customers’ supply chain needs. Our partners take care of all your
              logistics
            </p>
          </div>
          <div className="rectangle rectangle-3">
            <img
              className="ser-img desktop-img"
              src={thirdimg}
              alt=""
                />
                <img src={thirdsming} className='ser-img serv-img-3 mobile-img'/>
            <h1>Haulage</h1>
            <p>
              We offer direct full-load or part-load haulage to any location and
              from any location in Nigeria
            </p>
          </div>
          <div className="rectangle rectangle-4">
            <img
              className="ser-img desktop-img"
              src={fourthimg}
              alt=""
                />
                <img src={ fourthsmimg}className='ser-img serv-img-4 mobile-img' />
            <h1>Exportation</h1>
            <p>
              Our Strategy is offering best-fit- sourcing and export solution by
              closely working with the market we serve.
            </p>
          </div>
        </div>
          </div>
          <div className="AU-button">
            <button className="button">Read  more</button>
          </div>
      <div className="faq">
        <h1>Why Choose Farmscape?</h1>
        <div className="faq-cards">
          <div className="card card-1">
            <div className="card-img">
              <img src={faqimg1} alt="" />
              <h1>Customer Satisfaction</h1>
              <p>
                This is the Bedrock of our establishment. We are poised to
                always maximally satisfy our customers.
              </p>
            </div>
          </div>
          <div className="card card-2">
            <div className="card-img">
              <img src={faqimg2} alt=""  />
              <h1>Quality</h1>
              <p>
                We provide only industry-standard product and services to our
                clients, partners, and customers.
              </p>
            </div>
          </div>
          <div className="card card-3">
            <div className="card-img">
              <img src={faqimg3} alt=""  />
              <h1>Feedback</h1>
              <p>
                We consider feedback the most important tool for improvement and
                take into consideration every detail
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    )
}

export default ServicesMain;