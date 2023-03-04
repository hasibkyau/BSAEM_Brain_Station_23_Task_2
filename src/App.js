import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';

import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';

import banner from './assets/img/GG 2.png';
import Authoring from './components/Authoring';

function App() {
  return (
    <div style={{background:"#121212"}}>
      

    <img src="assets/img/Ellipse 87.png" className="bg_effect bg_effect--top" alt='bg-effect'/>
    {/* <img src="assets/img/Ellipse 86.png" className="bg_effect bg_effect--left" alt='bg-effect'/> */}
    {/* <img src="assets/img/Ellipse 87.png" className="bg_effect bg_effect--right" alt='bg-effect'/>
    <img src="assets/img/Ellipse 88.png" className="bg_effect bg_effect--bottom" alt='bg-effect'/> */}

    <NavBar/>
    <br/>
    {/* Banner: A functional (arrow) component without props */}
    <Banner/>

    <img src={banner} className="img-fluid" alt='bg-effect'/>

    {/* Authoring: a functional component with props */}
    <Authoring 
    title_first_name={"Effortlessly Create and"} 
    title_last_name = {"Manage Content"}
    subtitle = {"Our intuitive authoring interface allows for easy and efficient content creation and management. Create and edit content, images, and videos, and preview your changes in real time."}
    />






     <br/>

    </div>
  );
}

export default App;
