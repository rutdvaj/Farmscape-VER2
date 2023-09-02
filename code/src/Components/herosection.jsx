import img1 from '../../src/assets/images/hs-images/Image 1.png'
import smimg1 from '../../src/assets/images/hs-images/mobile-images/Rectangle 8img-1-sm.png'
import img2 from '../../src/assets/images/hs-images/Image 2.png'
import smimg2 from '../../src/assets/images/hs-images/mobile-images/Rectangle 7img-2-sm.png'
import img3 from '../../src/assets/images/hs-images/Image 3.png'
import smimg3 from '../../src/assets/images/hs-images/mobile-images/Rectangle 10img-3-sm.png'
import img4 from '../../src/assets/images/hs-images/Image 4.png'
import smimg4 from '../../src/assets/images/hs-images/mobile-images/Rectangle 11img-4-sm.png'
import img5 from '../../src/assets/images/hs-images/Image 5.png'
import smimg5 from '../../src/assets/images/hs-images/mobile-images/Rectangle 9img-5-sm.png'

const Herosection = () => {
    return (<div>
        <section className="hero-section">
      <div>
        <h1 className="hero-desc">Farming made</h1>
        <h1 className="hero-desc pad-left">Easier</h1>
      </div>
      <div>
        <p className="desc-p">
          Pioneering in agriculture technology and leading in research and
          development.
        </p>
        
      </div>
        <div className="image">
          <img src={img1} alt="" className='desktop-img'/>
          <img src={smimg1} alt='' className='mobile-img'/>
      </div> 
      <div className="image-2">
          <img src={img2} alt="" className='desktop-img'/>
          <img src={smimg2} alt="" className='mobile-img mb-img-2'/>
          
      </div>
      <div className="image-3">
          <img src={img3} alt="" className='desktop-img' />
          <img src={smimg3} alt="" className='mobile-img mb-img-3'/>
          
      </div>
      <div className="image-4">
        <img src={img4} alt="" className='desktop-img' />
        <img src={smimg4} alt="" className='mobile-img mb-img-4'/>
      </div>
      <div className="image-5">
        <img src={img5} alt="" className='desktop-img' />
        <img src={smimg5} alt="" className='mobile-img mb-img-5'/>
      </div> 
        <div className="sign-up">
          <button class="button">Sign up</button>
        </div>
    </section>
    </div>)
}

export default Herosection;