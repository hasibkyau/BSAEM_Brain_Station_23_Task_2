// import React, { useEffect } from "react";
import React, { Component } from "react";

import '../css/components.css';
import { Image } from 'react-bootstrap';

import page1 from '../assets/img/Rectangle 6.png'
import page2 from '../assets/img/Rectangle 7.png'
import page3 from '../assets/img/Rectangle 8.png'
import page4 from '../assets/img/Rectangle 9.png'


class Authoring extends Component {
    state = {
        page: 1
    }

    togglePage = (p) => {
        this.setState({
            page: p
        })
    }


    render() {


        let content = <Image id="page" src={page1} className="img-fluid" />;

        if (this.state.page === 1) {
            content = <Image id="page" src={page1} className="img-fluid" />;
        } else if (this.state.page === 2) {
            content = <Image id="page" src={page2} className="img-fluid" />;
        } else if (this.state.page === 3) {
            content = <Image id="page" src={page3} className="img-fluid" />;
        } else if (this.state.page === 4) {
            content = <Image id="page" src={page4} className="img-fluid" />;
        } 

        return (
            <div style={{ marginTop: "-200px" }}>

            <div className="container">
                <p className="title title--banner">Effortlessly Create and<br />Manage Content</p>
                <p className="title title--subtitle">Our intuitive authoring interface allows for easy and efficient content creation and management. Create and edit content, images, and videos, and preview your changes in real time.</p>
            </div>

            <div className='m-4'>
                <div className='row'>

                <div className='col-8 col-sm-12'>
                        
                        <button class="toggle-button active" onClick={this.togglePage}>Component 1</button>
                        <button class="toggle-button " onClick={this.togglePage}>Component 2</button>
                        <button class="toggle-button " onClick={this.togglePage}>Component 3</button>
                        <button class="toggle-button " onClick={this.togglePage}>Component 4</button>
                        
                    </div>
                    
                </div>
                <br />

                <div className='row gx-0'>
                    <div className='col-md-8 col-sm-12'>
                        {content}
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

        );

    }

}

export default Authoring;