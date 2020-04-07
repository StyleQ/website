import React from 'react';
import styled from 'styled-components';
import Text from './Typography';
import Container from './Container';
import Button from './Button';
import { TextBox, Label } from './Forms';
import Android from '../assets/icons/android.svg';
import Apple from '../assets/icons/apple.svg';
import Facebook from '../assets/icons/facebook.svg';
import Twitter from '../assets/icons/twitter.svg';
import Instagram from '../assets/icons/instagram.svg';

const TopFooter = styled.div`
  padding: 5rem 0;
  background: var(--color-brand-2);
  color: #fff;
  p{
    margin-bottom: .2rem;
    font-size: 1.8rem;
    color: var(--color-brand-3);
  }
  h3{
    margin: .2rem 0 2rem;
  }
  @media(min-width: 920px) {
    ${Container} {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const BottomFooter = styled.footer`
  padding: 5rem 0;
  h4{
    margin-top: 0;
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
    color: #999;
  }
  @media(min-width: 920px) {
    ${Container} {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const Footer = () => (
  <>
    <TopFooter>
      <Container>
        <div>
          <Text>Ready to start having quick and quality styling done?</Text>
          <Text as="h3">Create an account with us</Text>
        </div>
        <Button variant="primary" responsive>REGISTER NOW</Button>
      </Container>
    </TopFooter>
    <BottomFooter>
      <Container>
        <div>
          <form action="https://bookstyleq.us4.list-manage.com/subscribe/post?u=ca7d77d8dd73f52e49e56d814&amp;id=646b5bfa5e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" noValidate>
            <Text as="h4">Subscribe to us</Text>
            <Text>Stay updated on what StyleQ has to offer</Text>
            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
              <input type="text" name="b_ca7d77d8dd73f52e49e56d814_646b5bfa5e" tabIndex="-1" />
            </div>
            <Label variant="wrapper">
              <TextBox name="EMAIL" type="email" id="mce-EMAIL" placeholder="Enter your email address" required />
              <Button variant="wrapped">SUBSCRIBE</Button>
            </Label>
          </form>
          <Text className="copyright">
            <span>© {new Date().getFullYear()} StyleQ. All rights reserved</span>
          </Text>
        </div>
        <div>
          <div>
            <Button as="a" variant="primary" href="https://play.google.com/store/apps/details?id=ubitrix.styleq&hl=en_US">
              <Android />
              Get the app on Android
            </Button>
            <Button variant="primary">
              <Apple />
              Get the app on iPhone
            </Button>
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
    </BottomFooter>
  </>
);

export default Footer;
