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
        page: page1
    }

    togglePage1 = () => {
        this.setState({
            page: page1
        })
    }

    togglePage2 = () => {
        this.setState({
            page: page2
        })
    }

    togglePage3 = () => {
        this.setState({
            page: page3
        })
    }

    togglePage4 = () => {
        this.setState({
            page: page4
        })
    }

    render() {

        let content = <Image id="page" src={this.state.page} className="img-fluid" />;

        return (
            <div id="authoring" style={{ marginTop: "-200px" }}>

            <div className="container">
                <p className="title title--banner">Effortlessly Create and<br />Manage Content</p>
                <p className="title title--subtitle">Our intuitive authoring interface allows for easy and efficient content creation and management. Create and edit content, images, and videos, and preview your changes in real time.</p>
            </div>

            <div className='m-4'>
                <div className='row'>

                <div className='col-8 col-sm-12'>
                        
                        <button class="toggle-button active" onClick={this.togglePage1}>Component 1</button>
                        <button class="toggle-button " onClick={this.togglePage2}>Component 2</button>
                        <button class="toggle-button " onClick={this.togglePage3}>Component 3</button>
                        <button class="toggle-button " onClick={this.togglePage4}>Component 4</button>
                        
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