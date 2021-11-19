import './css/App.css';
import shopArrow from './images/icon-arrow.svg';


const Slider = ({photoSwitch, image}) => {

  return ( 
    <div className="miso-soup">
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <div className="flexbox-wrapper">
              <img src={image[`${0 + photoSwitch}`]} className="d-block w-100 flex-info" id="desktop-view" alt="Room Base Slide 1" />
              <div className="flex-info">
                <section>
                  <h1> Discover innovative ways to decorate </h1>
                  <p> 
                    We provide unmatched quality, comfort, and style for property owners across the country. 
                    Our experts combine form and function in bringing your vision to life. Create a room in your 
                    own style with our collection and make your property a reflection of you and what you love.
                  </p>
                  <div className="arrow-box">
                    <h3> shop now </h3>
                    <img src={shopArrow} alt="Shop Now Arrow" />
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="flexbox-wrapper">
              <img src={image[`${1 + photoSwitch}`]} className="d-block w-100 flex-info" id="desktop-view" alt="Room Base Slide 2" />  
              <div className="flex-info">
                <section>
                  <h1> We are available all across the globe </h1>
                  <p> 
                    With stores all over the world, it's easy for you to find furniture for your home or place of business. 
                    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
                    store locator. Any questions? Don't hesitate to contact us today.
                  </p>
                  <div className="arrow-box">
                    <h3> shop now </h3>
                    <img src={shopArrow} alt="Shop Now Arrow" />
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="flexbox-wrapper">
            <img src={image[`${2 + photoSwitch}`]} className="d-block w-100 flex-info" id="desktop-view" alt="Room Base Slide 3" />     
              <div className="flex-info">
                <section>
                  <h1> Manufactured with the best materials </h1>
                  <p> 
                    Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
                    to ensure that every product is made as perfect and as consistent as possible. With three decades of 
                    experience in this industry, we understand what customers want for their home and office.
                  </p>
                  <div className="arrow-box">
                    <h3> shop now </h3>
                    <img src={shopArrow} alt="Shop Now Arrow" />
                  </div>
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