import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Text from './Typography';

const sliderSettings = {
  arrows: false,
  autoplay: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Root = styled.div`
  position: relative;
  width: 80vw;
  max-width: 50rem;
  margin: 2rem auto;
  .slick-list{
    border-radius: var(--round-radius-2);
    box-shadow: var(--drop-shadow-3);
  }
`;

const Quote = styled.div`
  height: 27rem;
  padding: 4rem;
  background: #fff;
  > ${Text} {
    height: 60%;
  }
  div{
    text-align: right;
    img, ${Text}{
      display: inline-block;
      text-align: right;
    }
  }
  img{
    vertical-align: middle;
    width: 4rem;
    height: 4rem;
    margin-left: 1rem;
    border-radius: var(--round-radius-1);
    object-fit: cover;
  }
`;

export default () => (
  <Root>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    <Slider {...sliderSettings}>
      <Quote>
        <Text size="2.2rem">
          StyleQ connects me so easily with clients and gives me an opportunity to build my network.
        </Text>
        <div>
          <Text as="h6">Alivia</Text>
          <img src="https://res.cloudinary.com/strich/image/upload/v1588015226/reviewer-6_kewzvm.jpg" alt="Alivia" />
        </div>
      </Quote>
      <Quote>
        <Text size="2.2rem">
          Alivia did a fantastic job. She asked a lot of questions to make sure
          we were on the same page, and then executed perfection.
        </Text>
        <div>
          <Text as="h6">Molly</Text>
          <img src="https://res.cloudinary.com/strich/image/upload/v1588015226/reviewer-2_j6wgob.jpg" alt="Molly" />
        </div>
      </Quote>
      <Quote>
        <Text size="2.2rem">
          Going into my appointment, I wasn't sure what to expect. However,
          after the consultation process, my needs were met and exceeded.
        </Text>
        <div>
          <Text as="h6">Matt</Text>
          <img src="https://res.cloudinary.com/strich/image/upload/v1588015226/reviewer-3_pxddgc.jpg" alt="Matt" />
        </div>
      </Quote>
      <Quote>
        <Text size="2.2rem">
        Zoe does a great job with my haircut as always.
        </Text>
        <div>
          <Text as="h6">Que</Text>
          <img src="https://res.cloudinary.com/styleq/image/upload/v1594256033/Que-1_eezxbo.jpg" alt="Que" />
        </div>
      </Quote>
      <Quote>
        <Text size="2.2rem">
          Even with this pandemic I love how I can still connect with others
          virtually and the energy/vibe is still fun and the same virtually
          as if I was still in the treatment room.
        </Text>
        <div>
          <Text as="h6">Breanna</Text>
          <img src="https://res.cloudinary.com/styleq/image/upload/v1594256245/Breanna.jpg" alt="Breanna" />
        </div>
      </Quote>
    </Slider>
  </Root>
);
