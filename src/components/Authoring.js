import React from 'react';
import '../css/components.css';


function Authoring(props) {
    return (
        <div>
            <div className="container">
                <p className="title title--banner">{props.title_first_name}<br/>{props.title_last_name}</p>
                <p className="title title--subtitle">{props.subtitle}</p>
            </div>     
        </div>
    )
  }
    
  Person.defaultProps = {
    title_first_name: "Transform Your",
    title_last_name: "Web Experience",
    subtitle: "Transform your website with AEM components designed for flexibility and scalability. Our pre-built components and drag-and-drop editor make it easy for anyone!",
  
  }
    
  export default Authoring;