import React from 'react';
import '../css/components.css';
import { Image } from 'react-bootstrap';

import logo1 from '../assets/logo/image 2.png'
import logo2 from '../assets/logo/image 3.png'
import logo3 from '../assets/logo/image 4.png'

let data = {
  "title_first_name": "Partners",
  "title_last_name": null,
  "subtitle": "Our expertise in AEM Components helps mid to large size businesses transform their web experience. With a commitment to customer satisfaction, our partners benefit from a range of customizable, scalable, and responsive components that deliver an exceptional user experience.",
}


export const Designs = () => {
  return (
    <div>
      <div className="container">
        <p className="title title--banner">{data.title_first_name}<br />{data.title_last_name}</p>
        <p className="title title--subtitle">{data.subtitle}</p>
      </div>

      <div className="row m-3">
        <div class="row">
          <div class="col text-center">
            <Image src={logo1} alt="logo" />
          </div>
          <div class="col text-center">
            <Image src={logo2} alt="logo" />
          </div>
          <div class="col text-center">
            <Image src={logo3} alt="logo"/>
          </div>
        </div>
      </div>

    </div>
  )
}