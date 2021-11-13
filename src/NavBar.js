import './css/App.css';
import Room from './images/logo.svg';
import Menu from './images/icon-hamburger.svg';
import CloseMenu from './images/icon-close.svg';

const NavBar = () => {
  return ( 
    <div className="header">
      <div className="header white">
        <div className="inner-container">
          <img src={CloseMenu} alt="Close Menu Button" className="menu-icon"/>
          <ul>
            <li> Home </li>
            <li> Shop </li>
            <li> About </li>
            <li> Contact </li>
          </ul>
        </div>
      </div>
      <header>
        <div className="miso-soup">
        <img src={Menu} alt="Menu Icon" className="menu-icon" />
        <img src={Room} alt="Room Base Logo" className="room-base"/>
        </div>
      </header>


            
    </div>
  );
}
 
export default NavBar;