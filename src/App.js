import './css/App.css';
import Slider from './Slider';
import NavBar from './NavBar';
import { Fragment } from 'react';




function App() {
  return (
    //Fragments. A way of wrapping multiple components without a div
   <Fragment>
     <div className="app">
        <Slider />
        <NavBar />
      </div>
   </Fragment>
  );
}

export default App;
