/* eslint-disable linebreak-style */
import React from 'react';
import feature5 from '../assets/feature5.jpg';
import feature1 from '../assets/feature1.jpg';
import feature2 from '../assets/feature2.jpg';
import feature3 from '../assets/feature3.jpg';
import feature4 from '../assets/feature4.jpeg';

const Image = [
  'feature5.jpg',
  'feature1.jpg',
  'feature2.jpg',
  'feature3.jpg',
  'feature4.jpeg'
];


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


export class Service extends React.PureComponent {
  render() {
    const name = '';

    return (
      <div>
        <figure style={figStyle}>
          <img style={imgStyle} src={feature4} alt="service" />
          <figcaption style={figcaptionStyle}>{this.props.name}</figcaption>
        </figure>
      </div>
    );
  }
}

export default Service;
