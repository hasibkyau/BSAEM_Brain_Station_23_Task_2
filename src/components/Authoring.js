import React from 'react';
import '../css/components.css';

function Authoring(props) {
    return (

        <div style={{ marginTop: "-200px" }}>
            <div className="container">
                <p className="title title--banner">{props.title_first_name}<br />{props.title_last_name}</p>
                <p className="title title--subtitle">{props.subtitle}</p>
            </div>

            <div className='m-3'>
                <button class="toggle-button active" onclick="document.getElementById('page').src='assets/img/Rectangle 6.png'">Component 1</button>
                <button class="toggle-button " onclick="document.getElementById('page').src='assets/img/Rectangle 7.png'">Component 2</button>
                <button class="toggle-button " onclick="document.getElementById('page').src='assets/img/Rectangle 8.png'">Component 3</button>
                <button class="toggle-button " onclick="document.getElementById('page').src='assets/img/Rectangle 9.png'">Component 4</button>
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