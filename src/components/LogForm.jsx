
import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Container from './Container';
import Text from './Typography';
import { TextBox } from './Forms';
import Android from '../assets/icons/android.svg';
import Facebook from '../assets/icons/facebook.svg';
import Twitter from '../assets/icons/twitter.svg';
import Instagram from '../assets/icons/instagram.svg';

const StyleLogin = styled.div`
padding: 2rem 0;
background: var(--color-brand-6);
display:flex;
flex-flow: column;

  ${Container} {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 1rem;
    }

.Otherlogs{
padding: 1rem;

}


.formleft{
padding-top: 25%;
padding-left: 2rem;
}

img{
height: 400px;
width: 400px;
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

const LogForm = () => (
  <StyleLogin>
    <Container>
      <img src="../assets/Brushes.jpg" alt="Brushpic" />
      <div className="formleft">
        <Text as="h2"> Login </Text>
        <div>
          <TextBox name="Emaillog" type="email" id="mce-EMAIL" placeholder="email" required />
          <p>
            <TextBox name="Passwordlog" type="text" placeholder="password" required />
            <div className="Otherlogs">
              <Button variant="primary" style={{ padding: '1rem', margin: '2rem' }} href="https://my.setmore.com/bookingpage/dc195bd4-0d63-451f-84ac-4b4ec3ecf5ca"> Login </Button>
              <Container>
                <Text as="small">Forgot Password?</Text>
                <p>
                  <Text as="small">Register</Text>
                </p>
              </Container>
            </div>
          </p>
        </div>
      </div>
    </Container>
    <Container style={{ position: 'relative', padding: '5rem' }}>
      <div>
        <Button as="a" variant="primary" href="https://play.google.com/store/apps/details?id=ubitrix.styleq&hl=en_US">
          <Android />
          Get the app on Android
        </Button>
      </div>
      <div>
        <div>
          <Text as="small" className="copyright">
            ©
            {' '}
            {new Date().getFullYear()}
            {' '}
            StyleQ. All rights reserved
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
  </StyleLogin>
);

export default LogForm;
