import React from 'react';
import '../css/components.css';
import { Image } from 'react-bootstrap';

import page1 from '../assets/img/Rectangle 6.png'


function Authoring(props) {
    return (

        <div style={{ marginTop: "-200px" }}>

            <div className="container">
                <p className="title title--banner">{props.title_first_name}<br />{props.title_last_name}</p>
                <p className="title title--subtitle">{props.subtitle}</p>
            </div>

            <div className='m-4'>
                <div className='row'>

                <div className='col-8 col-sm-12'>
                        
                        <button class="toggle-button active" onclick="document.getElementById('page').src='page1'">Component 1</button>
                        <button class="toggle-button " onclick="document.getElementById('page').src='../assets/img/Rectangle 7.png'">Component 2</button>
                        <button class="toggle-button " onclick="document.getElementById('page').src='../assets/img/Rectangle 8.png'">Component 3</button>
                        <button class="toggle-button " onclick="document.getElementById('page').src='../assets/img/Rectangle 9.png'">Component 4</button>
                        
                    </div>
                    
                </div>
                <br />

                <div className='row gx-0'>
                    <div className='col-md-8 col-sm-12'>
                        <Image id="page" src={page1} className="img-fluid" />
                    </div>

                    <div className='col-md-4 col-sm-12'>
                        <p class="text text--heading">Save Time and Effort</p>
                        <p class="text">Our drag and drop editor makes it easy to customize layouts and design, while our pre-built components allow you to incorporate advanced features without starting from scratch.</p>

                        <br />
                        <p class="text text--heading">Increase Flexibility</p>
                        <p class="text">With a dynamic grid system and customizable interface elements, AEM Components allow for flexible design that adapts to any screen or device.</p>

                        <br />
                        <p class="text text--heading">Intuitive Authoring Experience</p>
                        <p class="text">Our drag and drop editor makes it easy to customize layouts and design, while our pre-built components allow you to incorporate advanced features without starting from scratch.</p>
                    </div>

                </div>
            </div>

        </div>


    )
}

Authoring.defaultProps = {
    title_first_name: "Transform Your",
    title_last_name: "Web Experience",
    subtitle: "Transform your website with AEM components designed for flexibility and scalability. Our pre-built components and drag-and-drop editor make it easy for anyone!",

}

export default Authoring;