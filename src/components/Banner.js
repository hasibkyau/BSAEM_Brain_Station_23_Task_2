import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import img from '../../src/assets/img/GG 1.png';
import '../css/banner.css';


export const Banner = (props) => {

  return (
    <div className="container">
        <p className="title title--banner">{props.title_first_name}<br/> {props.title_last_name}</p>
        <p className="title title--subtitle">{props.subtitle}</p>

        <div class="text-center">
          <button type="button" class="btn btn-primary">Request Demo</button>
          <button type="button" class="btn btn-outline-light"><a>Learn More</a></button>
        </div>
    </div>
  )
}