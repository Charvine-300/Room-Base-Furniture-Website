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
            <img src={image[`${0 + photoSwitch}`]} className="d-block w-100" alt="Room Base Slide 1" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={image[`${1 + photoSwitch}`]} className="d-block w-100" alt="Room Base Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={image[`${2 + photoSwitch}`]} className="d-block w-100" alt="Room Base Slide 3" />
          </div>
        </div>
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
  );

}
 
export default Slider;