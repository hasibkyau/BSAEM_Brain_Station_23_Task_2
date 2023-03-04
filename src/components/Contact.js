import React from 'react';
import '../css/components.css';
import { Image } from 'react-bootstrap';

import linkedin from '../assets/icon/Linkedin icon.svg'
import facebook from '../assets/icon/Facebook.svg'
import instagram from '../assets/icon/Instagram.svg'
import youtube from '../assets/icon/Youtube.svg'
import { Linkedin } from 'react-bootstrap-icons';



let data = {
    "title_first_name": "See Our AEM",
    "title_last_name": "Components in Action",
    "subtitle": "Request a Demo of AEM Commons Today! Experience firsthand how our components can be used to create a customized web experience that is scalable and responsive.",
}


export const Contact = () => {
    return (
        <div id="contact">
            <div class="row m-2">

                <div class="col-4">
                    <p class="text text--logo">Logo</p>
                </div>

                <div class="col">
                    <a class="footer-link" href="#"><p class="text text--footer">Team</p></a>
                    <a class="footer-link" href="#"><p class="text text--footer">Office Location</p></a>
                    <a class="footer-link" href="#"><p class="text text--footer">Brainstation 23 Limited</p></a>

                    <a class="footer-link" href="#"><img class="m-1" src={linkedin} alt="icon" /></a>
                    <a class="footer-link" href="#"><img class="m-1" src={facebook} alt="icon" /></a>
                    <a class="footer-link" href="#"><img class="m-1" src={instagram} alt="icon"/></a>
                    <a class="footer-link" href="#"><img class="m-1" src={youtube} alt="icon"/></a>
                </div>

            </div>

        </div>
    )
}