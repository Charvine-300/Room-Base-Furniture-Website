import './css/App.css';
import { useState } from 'react';
import Room from './images/logo.svg';
import Menu from './images/icon-hamburger.svg';
import CloseMenu from './images/icon-close.svg';


const NavBar = () => {
  const [turkey, setTurkey] = useState('');  


  function showMenu() {
    if (turkey === '') {
      setTurkey('menuBar');
    }
    else {
      setTurkey('');
    }
  }


  return ( 
    <div className="header">
      <div className="header white" id={turkey}> 
        <div className="inner-container">
          <img src={CloseMenu} alt="Close Menu Button" className="menu-icon" onClick={showMenu} />
          <ul>
            <li> home </li>
            <li> shop </li>
            <li> about </li>
            <li> contact </li>
          </ul>
        </div>
      </div>
      <header>
        <div className="miso-soup">
        <img src={Menu} alt="Menu Icon" className="menu-icon" onClick={showMenu} />
        <img src={Room} alt="Room Base Logo" className="room-base"/>
        </div>
      </header>


            
    </div>
  );
}
 
export default NavBar;