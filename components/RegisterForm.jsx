import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Container from './Container';
import { Grid } from './Grid';
import Text from './Typography';
import { TextBox } from './Forms';

const StyleRegister = styled.div`
padding: 2rem 0;
background: var(--color-brand-7);
display:flex;
flex-flow: column;
align-items: center;

input::placeholder {
  font-style: italic;
}

  ${Container} {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 5rem;
    }

`;


const RegisterForm = () => (
  <StyleRegister>
    <Text as="h2" style={{ padding: '2rem' }}>Make an Account</Text>
    <div>
      <Container>
        <Grid column="4">
          <TextBox type="text" name="firstname" placeholder="first name" required />
          <TextBox type="text" name="lastname" placeholder="last name" required />
          <TextBox type="mce-email" name="email" placeholder="email" required />
          <TextBox type="password" name="password" placeholder="password" required />
        </Grid>
      </Container>
    </div>
    <div>
      <Button variant="primary" type="submit">Submit</Button>
    </div>
    <div style={{ position: 'center' }}>
      <Text as="small">
        <a href="/Login">Already have an account?</a>
      </Text>
    </div>
  </StyleRegister>
);

export default RegisterForm;
