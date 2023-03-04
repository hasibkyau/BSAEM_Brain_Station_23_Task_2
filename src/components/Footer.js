import React from 'react';
import '../css/components.css';
import { Image } from 'react-bootstrap';

import logo1 from '../assets/img/page 1 1.png'
import logo2 from '../assets/img/page 1 2.png'
import logo3 from '../assets/img/page 2 1.png'



let data = {
    "title_first_name": "See Our AEM",
    "title_last_name": "Components in Action",
    "subtitle": "Request a Demo of AEM Commons Today! Experience firsthand how our components can be used to create a customized web experience that is scalable and responsive.",
}


export const Footer = () => {
    return (
        <div id="contact">
            <div className="container text-center">
                <p className="title title--banner">{data.title_first_name}<br />{data.title_last_name}</p>
                <p className="title title--subtitle">{data.subtitle}</p>
            </div>

            <br />

            <div class="text-center">
                <button type="button" class="btn btn-primary">Request Demo</button>
            </div>
        </div>
    )
}