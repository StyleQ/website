import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Figure = styled.figure`
  margin: 0;
  box-shadow: 0 4.4px 12.5px rgba(0, 0, 0, 0.035),
  0 35px 100px rgba(0, 0, 0, 0.07);
  border-radius: var(--round-radius-2);
`;

const Figcaption = styled.figcaption`
  padding: 2rem;
`;

const Img = styled.img`
  border-top-left-radius: var(--round-radius-2);
  border-top-right-radius: var(--round-radius-2);
  width: 100%;
  height: 25.25rem;
  object-fit: cover;
`;

const Service = ({ name, image }) => (
  <Figure>
    <Img src={image} alt={name} />
    <Figcaption>{name}</Figcaption>
  </Figure>
);

Service.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Service;
