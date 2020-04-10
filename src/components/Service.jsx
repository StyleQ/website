import React from 'react';
import feature5 from '../assets/feature5.jpg';
import feature1 from '../assets/feature1.jpg';
import feature2 from '../assets/feature2.jpg';
import feature3 from '../assets/feature3.jpg';
import feature4 from '../assets/feature4.jpeg';
import feature6 from '../assets/feature6.jpg';
import feature7 from '../assets/feature7.jpg';
import feature8 from '../assets/feature8.jpg';

const figStyle = {
    float: 'left',
    textAlign: 'center',
    textIndent: '0',
    border: 'thin silver solid',
    margin: '0.5em',
    borderRadius: '8px',
    background: 'white',
};

const figcaptionStyle = {
    padding: '10%'
};

const imgStyle = {
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    maxWidth: '270px',
    height: '270px'
};


export const Service = (props) => {
return (
    <div>
      <figure style={figStyle}>
        <img style={imgStyle} src={props.image} alt="services"/> 
        <figcaption style={figcaptionStyle}>{props.name}</figcaption>
      </figure>
    </div>
  );
};

export default Service;
