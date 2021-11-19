import './css/App.css';
import About from './About';
import Slider from './Slider';
import NavBar from './NavBar';
import { useState, Fragment } from 'react';
import slide1 from './images/slide1.jpg';
import slide2 from './images/slide2.jpg';
import slide3 from './images/slide3.jpg';
import slide4 from './images/slide4.jpg';
import slide5 from './images/slide5.jpg';
import slide6 from './images/slide6.jpg';
import Room from './images/logo.svg';
import CloseMenu from './images/icon-close.svg';




function App() {
  const [photochange, setPhotoChange] = useState(CloseMenu);
  const image = [slide1, slide2, slide3, slide4, slide5, slide6];
  const [photoSwitch, setPhotoSwitch] = useState(0);

  window.onload = function () {
    if (document.body.clientWidth >= 1024) {
      setPhotoSwitch(3);
      setPhotoChange(Room);
    }
  }

  return (
    //Fragments. A way of wrapping multiple components without a div
   <Fragment>
     <div className="app">
        <Slider image={image} photoSwitch={photoSwitch} />
        <NavBar photochange={photochange}/>
      </div>
      <About />
   </Fragment>
  );
}

export default App;
