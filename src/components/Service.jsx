import React from 'react';
import styled, { css } from 'styled-components';

const Figure = styled.figure`
    box-shadow: 0 4.4px 12.5px rgba(0, 0, 0, 0.035),
    0 35px 100px rgba(0, 0, 0, 0.07);
    border-radius: var(--round-radius-2);
`;

const Figcaption = styled.figcaption`
    padding: 10%;
`;

const Img = styled.img`
    border-top-left-radius: var(--round-radius-2);
    border-top-right-radius: var(--round-radius-2);
    maxWidth: 270px;
    height: 270px;
`;


const Service = ({ name, image }) = (
    <div>
      <Figure>
        <Img src={image} alt={name} />
        <Figcaption>{name}</Figcaption>
      </Figure>
    </div>

)

export default Service;
