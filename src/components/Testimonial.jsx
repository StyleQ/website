import React from 'react';
import styled, { keyframes } from 'styled-components';

const revolve = keyframes`
  30%{
    transform: rotateY(0deg);
    opacity: 1;
  }
  35%{
    transform: rotateY(90deg);
    opacity: 0;
  }
  95%{
    transform: rotateY(-90deg);
    opacity: 0;
  }
  100%{
    transform: rotateY(0deg);
    opacity: 1;
  }
`;

const shift = keyframes`
  0%{
    transform: translateX(-2rem);
  }
  50%{
    transform: translateX(0);
  }
  100%{
    transform: translateX(2rem);
  }
`;

const Root = styled.div`
  position: relative;
  width: 50rem;
  margin: 2rem auto;
`;

const Carousel = styled.div`
  width: 100%;
  height: 30rem;
  border-radius: var(--round-radius-2);
  perspective: 3000px;
  overflow: hidden;
  > *{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: ${revolve} 9s var(--animation-easing) infinite;
  }
  > :nth-child(1) {
    animation-delay: -9s;
  }
  > :nth-child(2) {
    animation-delay: -12s;
  }
  > :nth-child(3) {
    animation-delay: -15s;
  }
  blockquote{
    margin: 0;
    padding: 2rem;
    background: #fff;
    box-shadow: var(--drop-shadow-3);
  }
`;

const Dots = styled.div`
  position: relative;
  width: 1rem;
  height: 1rem;
  margin: 2rem auto;
  border-radius: 50%;
  background: #ddd;
  &::before, &::after{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: inherit;
  }
  &::before{
    left: -2rem;
  }
  &::after{
    right: -2rem;
  }
`;

const Indicator = styled.span`
  position: absolute;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background: #555;
  animation: ${shift} 9s infinite;
`;

export default () => (
  <Root>
    <Carousel>
      <blockquote>
        StyleQ connects me with my favorite people
        <div>Author Name</div>
      </blockquote>
      <blockquote>
        Content of second quote
        <div>Author Name</div>
      </blockquote>
      <blockquote>
        Content of third quote
        <div>Author Name</div>
      </blockquote>
    </Carousel>
    <Dots>
      <Indicator />
    </Dots>
  </Root>
);
