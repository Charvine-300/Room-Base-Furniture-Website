import './css/App.css';
import { useState } from 'react';
import Room from './images/logo.svg';
import Menu from './images/icon-hamburger.svg';



const NavBar = ({photochange}) => {
  const [turkey, setTurkey] = useState('');  
  const [misosoup, setMisoSoup] = useState('');
  
  function showMenu() {
    if (turkey === '') {
      setTurkey('menuBar');
      setMisoSoup('header-back');
    }
    else {
      setTurkey('');
      setMisoSoup('');
    }
  }


  return ( 
    <div className="header" id={misosoup} >
      <div className="header white" id={turkey}> 
        <div className="inner-container">
          <img src={photochange} alt="Close Menu Button" className="menu-icon" onClick={showMenu} />
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