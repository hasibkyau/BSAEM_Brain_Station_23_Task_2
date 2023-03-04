import React from 'react';
import '../css/components.css';
import { Image } from 'react-bootstrap';

import logo1 from '../assets/img/page 1 1.png'
import logo2 from '../assets/img/page 1 2.png'
import logo3 from '../assets/img/page 2 1.png'


let data = {
  "title_first_name": "Pre-Designed",
  "title_last_name": "Templates",
  "subtitle": "In addition to our pre-built components, AEM commons offers a range of pre-designed templates to choose from. Easily view and select the template that works best for your business needs.",
}


export const Designs = () => {
  return (
    <div>
      <div className="container text-center">
        <p className="title title--banner">{data.title_first_name}<br />{data.title_last_name}</p>
        <p className="title title--subtitle">{data.subtitle}</p>
      
      <br />
      </div>

      <div className=' text-center'>
      <img src={logo1} alt="logo" style={{ margin:"0px"}} />
      <img src={logo2} alt="logo" style={{ marginTop: "0px"}}/>
      <img src={logo3} alt="logo" style={{ margin: "0px"}}/>
      </div>
    </div>
  )
}