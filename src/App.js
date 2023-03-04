import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';

import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';

import banner from './assets/img/GG 2.png';

function App() {
  return (
    <div style={{background:"#121212"}}>
      

    <img src="assets/img/Ellipse 87.png" className="bg_effect bg_effect--top" alt='bg-effect'/>
    {/* <img src="assets/img/Ellipse 86.png" className="bg_effect bg_effect--left" alt='bg-effect'/>
    <img src="assets/img/Ellipse 87.png" className="bg_effect bg_effect--right" alt='bg-effect'/>
    <img src="assets/img/Ellipse 88.png" className="bg_effect bg_effect--bottom" alt='bg-effect'/> */}

    <NavBar/>
    <br/>
    <Banner/>

    <img src={banner} className="img-fluid" alt='bg-effect'/>






     <br/>

    </div>
  );
}

export default App;
