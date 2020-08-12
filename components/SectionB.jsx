import React from 'react';
import styled from 'styled-components';
import Text from './Typography';
import Container from './Container';
import Map from '../assets/icons/map.svg';
import Booked from '../assets/icons/booked.svg';
import HairStylist from '../assets/icons/hair-stylist.svg';
import { Grid, Column } from './Grid';
import Divider from '../assets/divider-two.svg';

const Root = styled.section`
  position: relative;
  padding: 10rem 0 25rem;
  text-align: center;
  overflow: hidden;
  ${Container} svg{
    width: 6rem;
    fill: var(--color-brand-1);
    vertical-align: bottom;
  }
  > svg{
    position: absolute;
    left: 0;
    bottom: -.1rem;
    width: 100vw;
  }
  h2{
    margin-bottom: 4rem;
  }
  h4{ margin-top: 0; }
  ${Column} {
    padding: 4rem;
    border-radius: var(--round-radius-2);
    box-shadow: var(--drop-shadow-3);
;

  }
`;

export default () => (
  <Root>
    <Container>
      <Text as="strong" className="intro">How it works</Text>
      <Text as="h2">WHERE THE MAGIC HAPPENS</Text>
      <Grid columns={3}>
        <Column>
          <Map />
          <Text as="h5">Select a Service</Text>
          <Text>
            Wherever you go and whenever you need one, you can
            easily select from our pool of skilled stylists
            nearest to you.
          </Text>
        </Column>
        <Column>
          <Booked />
          <Text as="h5">Book instantly</Text>
          <Text>
            Booking an appointment through StyleQ is done with
            the click of a button. You no longer have to wait
            weeks for an appointment.
          </Text>
        </Column>
        <Column>
          <HairStylist />
          <Text as="h5">Enjoy a great service</Text>
          <Text>
            We make sure you are happy every step of the way.
            Your joy is what inspires us.
          </Text>
        </Column>
      </Grid>
    </Container>
    <Divider />
  </Root>
);
