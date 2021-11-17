import './css/App.css';
import slide1 from './images/slide1.jpg';
import slide2 from './images/slide2.jpg';
import slide3 from './images/slide3.jpg';
import slide4 from './images/slide4.jpg';
import slide5 from './images/slide5.jpg';
import slide6 from './images/slide6.jpg';
import { useState } from 'react';


const Slider = () => {
  const image = [slide1, slide2, slide3, slide4, slide5, slide6];
  const [photoSwitch, setPhotoSwitch] = useState(0);

  window.onload = () => {
    if (document.body.clientWidth >= 768) {
      setPhotoSwitch(3);
    }
    else {
      setPhotoSwitch(0);
    }
  }
 

  return ( 
    <div className="miso-soup">
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <div className="flexbox-wrapper">
              <img src={image[`${0 + photoSwitch}`]} className="d-block w-100" alt="Room Base Slide 1" className="flex-info image-height" />
              <div className="flex-info">
                <section>
                  <h1> Discover innovative <br/> ways to decorate </h1>
                  <p> 
                    We provide unmatched quality, comfort, and style for property owners across the country. 
                    Our experts combine form and function in bringing your vision to life. Create a room in your 
                    own style with our collection and make your property a reflection of you and what you love.
                  </p>

                </section>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="flexbox-wrapper">
              <img src={image[`${1 + photoSwitch}`]} className="d-block w-100" alt="Room Base Slide 2" className="flex-info image-height" />  
              <div className="flex-info">
                <section>
                  <h1> We are available <br/> all across the globe </h1>
                  <p> 
                    With stores all over the world, it's easy for you to find furniture for your home or place of business. 
                    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
                    store locator. Any questions? Don't hesitate to contact us today.
                  </p>
                </section>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="flexbox-wrapper">
            <img src={image[`${2 + photoSwitch}`]} className="d-block w-100" alt="Room Base Slide 3" className="flex-info image-height" />     
              <div className="flex-info">
                <section>
                  <h1> Manufactured with <br/> the best materials </h1>
                  <p> 
                    Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
                    to ensure that every product is made as perfect and as consistent as possible. With three decades of 
                    experience in this industry, we understand what customers want for their home and office.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div className="button-holder">
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden"> Previous </span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );

}
 
export default Slider;