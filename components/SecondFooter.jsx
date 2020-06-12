import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Container from './Container';
import Text from './Typography';
import Android from '../assets/icons/android.svg';
import Facebook from '../assets/icons/facebook.svg';
import Twitter from '../assets/icons/twitter.svg';
import Instagram from '../assets/icons/instagram.svg';
import Divider from '../assets/divider-four.svg';

const StyleRegister = styled.div`
background: var(--color-brand-6);
display:flex;
flex-flow: column;


  ${Container} {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 5rem;
    }


.social svg{
    width: 3rem;
    margin: 2rem 1rem 2rem 0;
    fill: var(--color-brand-1);
    transition: transform .3s var(--animation-easing);
    &:hover{
      transform: scale3d(1.1,1.1,1)
    }
  }
.copyright{
    display: block;
    margin-top: 5rem;
    margin-right: 8rem;
    color: #999;
  }
@media(min-width: 920px) {
    ${Container} {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const SecondFooter = () => (
  <StyleRegister>
    <Divider />
    <Container style={{ position: 'relative', padding: '5rem' }}>
      <div>
        <Button as="a" variant="primary" href="https://play.google.com/store/apps/details?id=ubitrix.styleq&hl=en_US">
          <Android />
          Get the app on Android
        </Button>
        <div>
          <Text as="small" className="copyright">
            © {new Date().getFullYear()} StyleQ. All rights reserved
          </Text>
        </div>
        <Text className="social">
          <a href="https://www.facebook.com/BookStyleQ/">
            <Facebook />
          </a>
          <a href="https://twitter.com/bookstyleq">
            <Twitter />
          </a>
          <a href="https://www.instagram.com/intostyleq/">
            <Instagram />
          </a>
        </Text>
      </div>
    </Container>
  </StyleRegister>
);

export default SecondFooter;
