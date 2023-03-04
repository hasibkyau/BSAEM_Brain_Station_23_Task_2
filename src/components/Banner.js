import React from 'react';
import '../css/components.css';

  
export const Banner = () => {

  return (
    <div>
        <div className="container">
            <p className="title title--banner">Transform Your<br/> Web Experience</p>
            <p className="title title--subtitle">Transform your website with AEM components designed for flexibility and scalability. Our pre-built components and drag-and-drop editor make it easy for anyone!</p>

            <div class="text-center">
            <button type="button" class="btn btn-primary">Request Demo</button>
            <button type="button" class="btn btn-outline-light">Learn More</button>
            </div>
            
        </div>
    </div>
  )
}