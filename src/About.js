import './css/App.css';
import aboutLight from './images/image-about-light.jpg';
import aboutDark from './images/image-about-dark.jpg';


const AboutUs = () => {
  return ( 
    <div className="flexbox-wrapper bottom-drawer">
      <img src={aboutDark} alt="About us Dark" className="flex-info" id="land-scape" />
      <div className="flex-info" id="bail-bondsman">
        <section>
          <h2> About our furniture </h2>
          <p> 
            Our multifunctional collection blends design and function to suit your individual taste.
            Make each room unique, or pick a cohesive theme that best express your interests and what
            inspires you. Find the furniture pieces you need, from traditional to contemporary styles
            or anything in between. Product specialists are available to help you create your dream space.
          </p>
        </section>
      </div>
      <img src={aboutLight} alt="About Us Light" className="flex-info" id="land-scape" />
    </div>
        
  );
}
 
export default AboutUs;