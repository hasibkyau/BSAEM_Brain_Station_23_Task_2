import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import { Image } from 'react-bootstrap';

import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';

import banner from './assets/img/GG 2.png';
import Authoring from './components/Authoring';
import { Features } from './components/Features';
import { Partners } from './components/Partners';
import { Designs } from './components/Designs';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';

function App() {
  return (
    <div style={{background:"#121212"}}>
      

    <img src="assets/img/Ellipse 87.png" className="bg_effect bg_effect--top" alt='bg-effect'/>
    {/* <img src="assets/img/Ellipse 86.png" className="bg_effect bg_effect--left" alt='bg-effect'/> */}
    {/* <img src="assets/img/Ellipse 87.png" className="bg_effect bg_effect--right" alt='bg-effect'/>
    <img src="assets/img/Ellipse 88.png" className="bg_effect bg_effect--bottom" alt='bg-effect'/> */}

    <NavBar/>
    <br/><br/>

    <Banner/>

    <Image className='img-fluid' src={banner} alt='bg-effect'/>

    <Authoring/>
    <br/><br/><br/>

    <Features/>
    <br/><br/><br/>
    

    <Partners/>
    <br/><br/><br/>

    <Designs/>
    <br/><br/><br/>

    <Footer/>
    <br /><br /><br />

    <Contact/>

    </div>
  );
}

export default App;
