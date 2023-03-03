import React from 'react';
import './App.css';

import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';

function App() {
  return (
    <div style={{backgroundColor:"#121212"}}>
    <img src="assets\img\Ellipse 87.png" className="bg_effect bg_effect--top" alt='bg-effect'/>
     <NavBar/>
     <br/>
     <Banner title_first_name={"Transform Your"} title_last_name={"Web Experience"} subtitle={"Transform your website with AEM components designed for flexibility and scalability. Our pre-built components and drag-and-drop editor make it easy for anyone!"}/>
    </div>
  );
}

export default App;
