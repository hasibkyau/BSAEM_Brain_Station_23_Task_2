import React from 'react';
import '../css/components.css';


let data = {
  "title_first_name": "Components for",
  "title_last_name": "Flexible Design",
  "subtitle": "Our expertise in AEM Components helps mid to large size businesses transform their web experience. With a commitment to customer satisfaction, our partners benefit from a range of customizable, scalable, and responsive components that deliver an exceptional user experience.",
}

let myJSON = [
  {
    "id": 1,
    "title": "Customizable Components",
    "description": "AEM Commons offers 25+ prebuilt and customizable interface elements that are ready to be incorporated into a website. Using prebuilt components saves development time and ensures consistency in design."
  },
  {
    "id": 2,
    "title": "Drag-and-Drop Editor",
    "description": "Our drag-and-drop editor enables non-technical users to customize layouts and designs easily, without the need for extensive technical knowledge."
  },
  {
    "id": 3,
    "title": "Dynamic Grid System",
    "description": "AEM Commons includes a dynamic grid system that allows content to be arranged in a flexible grid, with each element's size and placement changing dynamically based on the screen size or device being used."
  },
  {
    "id": 4,
    "title": "Custom Font Support",
    "description": "With AEM Commons, you can easily add custom fonts to your website by linking to an external font. This feature allows for greater flexibility and creativity in design.",
  },
  {
    "id": 5,
    "title": "Responsive Design Support",
    "description": "AEM Commons ensures that your website is easily accessible and functional on a range of devices, including desktops, laptops, tablets, and smartphones. This feature helps you reach a wider audience and deliver a better user experience."
  },
  {
    "id": 6,
    "title": "Adaptive Images",
    "description": "Adaptive images serve the optimal size and resolution for the device being used, resulting in faster load times and improved user experience. This Allows for an exceptional visual experience on any device.",
  },
]

const features = myJSON.map(item => {
  return (
    <div className="col-12 col-lg-4 col-sm-12 my-2">
      <div className="card" style={{ background: "#222331", minHeight: "254px", maxWidth: "437px" }}>
        <div className="card-header" style={{ color: "#FFFFFF" }}>
          {item.title}
        </div>
        <p className="card-text">
          {item.description}
        </p>
      </div>
    </div>
  );

})

export const Features = () => {
  return (
    <div>
      <div className="container">
        <p className="title title--banner">{data.title_first_name}<br />{data.title_last_name}</p>
        <p className="title title--subtitle">{data.subtitle}</p>
      </div>

      <div className="row m-3">
        {features}
      </div>

    </div>
  )
}