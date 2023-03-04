import React from 'react';
import '../css/components.css';

let data = {
  "title_first_name": "Transform Your",
  "title_last_name": " Web Experience",
  "subtitle": "Transform your website with AEM components designed for flexibility and scalability. Our pre-built components and drag-and-drop editor make it easy for anyone!",
}
  
export const Banner = () => {

  return (
    <div>
        <div className="container">
            <p className="title title--banner">{data.title_first_name}<br/>{data.title_last_name}</p>
            <p className="title title--subtitle">{data.subtitle}</p>

            <div class="text-center">
            <button type="button" class="btn btn-primary">Request Demo</button>
            <button type="button" class="btn btn-outline-light">Learn More</button>
            </div>
            
        </div>
    </div>
  )
}