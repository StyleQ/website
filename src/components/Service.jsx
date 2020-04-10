import React from 'react';
import styled, { css } from 'styled-components';

const Figure = styled.figure`
    float: left;
    text-align: center;
    text-indent: 0 ;
    border: thin silver solid;
    margin: 0.5em;
    borderRadius: 8px;
    background: white;
`;

const Figcaption = styled.figcaption`
    padding: 10%;
`;

const Img = styled.img`
    borderTopLeftRadius: 8px;
    borderTopRightRadius: 8px;
    maxWidth: 270px;
    height: 270px;
`;


export const Service = (props) => {
return (
    <div>
      <Figure>
        <Img style={imgStyle} src={props.image} alt={props.name}/>
        <Figcaption style={figcaptionStyle}>{props.name}</Figcaption>
      </Figure>
    </div>
  );
};

export default Service;
