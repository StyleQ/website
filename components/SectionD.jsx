import React from 'react';
import styled, { keyframes } from 'styled-components';
import Container from './Container';
import Text from './Typography';
import Divider from '../assets/divider-three.svg';
import Pin from './Pin';
import Service from './Service';
import { Grid, Column } from './Grid';


const heartRelease = keyframes`
  0%{
    transform: translateY(-3rem) scale(.2);
    opacity: 1;
  }
  100%{
    transform: scale(1) translateY(-2rem);
    opacity: 0;
  }
`;

const Root = styled.section`
  position: relative;
  padding: 25rem 0 0;
  text-align: center;
  overflow: hidden;
  > svg{
    position: absolute;
    top: -.1rem;
    left: 0;
    width: 100vw;
  }
  #heart-path{
    transform-origin: bottom;
    animation: ${heartRelease} 1s linear infinite;
  }
  @media not all and (min-resolution:.001dpcm) {
    @media {
        #heart-path{
          animation: none;
        }
    }
  }
  ${Grid} {
    margin: 12rem 0;
  }
`;

export default () => (
  <Root>
    <Divider />
    <Container>
      <Pin centered>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path id="heart-path" d="m59.873 39.484 6.635 6.585c.634.625 1.652.622 2.281-.006l6.61-6.61 6.609-6.61c4.247-4.248 4.394-11.091.108-15.35l-.089-.095c-.017-.018-.034-.034-.051-.051-1.978-1.961-4.499-2.972-7.064-3.077-2.566-.105-5.175.485-7.324 2.148-4.31-3.304-10.447-3.418-14.388.582h-.2v.424c-4 4.271-4.155 11.219.135 15.476z" />
          <path d="m98.553 58.714c-.992-2.347-2.951-3.423-4.477-3.646-1.525-.224-2.779.208-2.779.208-.058.018-.117.039-.173.063l-17.234 8c.021-.214.069-.475.069-.693 0-3.635-3.012-6.646-6.661-6.646h-14.363c-.062 0-.132-.209-.189-.312-.257-.464-.535-.884-.834-1.319-.6-.869-1.282-1.661-2.035-2.399-3.015-2.953-7.444-4.764-12.038-4.764l-17.839.014v-1.921c0-.894-.207-1.299-1.101-1.299h-8.088-8.088c-.894 0-1.723.405-1.723 1.298v32.354c0 .895.829 1.348 1.723 1.348h8.088 8.088c.894 0 1.101-.453 1.101-1.348v-3.185l32.872 10.825c.035.012.2.021.237.031 3.471.881 7.53.365 10.585-1.63l31.452-17.075c.007-.006.048-.013.054-.019l.8-.436c0-.003 0-.005 0-.007 2-1.475 3.718-4.685 2.553-7.442zm-4.184 4.633-.758.429-31.412 17.068c-.041.023-.082.049-.121.076-2.13 1.431-5.441 1.908-8.031 1.258l-33.592-11.066c-.065-.021-.455-.038-.455-.05v-20.614l17.833-.006c3.743 0 7.222 1.473 9.646 3.849.606.594 1.221 1.242 1.702 1.939.24.349.497.709.702 1.081.254.459.441.563.578.882l.432.807h1.422 14.982c1.938 0 3.425 1.648 3.425 3.522 0 1.367-.808 2.6-1.99 3.126l-.151.112c-.396.153-.724.269-1.187.269 0 0-16.395.027-22.395.027-1 0-1 2.943 0 2.943h22.292c.652 0 1.272.021 1.87-.153.215-.021.423-.011.613-.112l.044.017c.061-.025.117-.038.177-.064l22.352-10.354c.015-.016.563-.172 1.244-.071.695.102 1.355.294 1.953 1.709.534 1.259.057 2.675-1.175 3.376z" />
        </svg>
      </Pin>
      <Text as="strong" className="intro">Services we offer</Text>
      <Text as="h2">SERVING SATISFACTION AND BEYOND</Text>
      <Grid columns={4}>
        <Column>
          <Service name="BARBERS" image="https://res.cloudinary.com/strich/image/upload/v1586812341/styleq-barber_qdzqvx.jpg" />
        </Column>
        <Column>
          <Service name="HAIRSTYLISTS/HAIRCUTS" image="https://res.cloudinary.com/strich/image/upload/v1586812341/styleq-hairstylist_ekzegg.jpg" />
        </Column>
        <Column>
          <Service name="BRAIDS/LOCKS" image="https://res.cloudinary.com/strich/image/upload/v1586812341/styleq-braids_urotsx.jpg" />
        </Column>
        <Column>
          <Service name="BLOWOUTS" image="https://res.cloudinary.com/strich/image/upload/v1586812341/styleq-blowout_bcyptx.jpg" />
        </Column>
        <Column>
          <Service name="NATURAL HAIR" image="https://res.cloudinary.com/strich/image/upload/v1586812341/styleq-natural_zku8ba.jpg" />
        </Column>
        <Column>
          <Service name="Spa/Hair Removal" image="https://00e9e64bac7f78e726dd6fb6070253f0d30133c66ceda0a92c-apidata.googleusercontent.com/download/storage/v1/b/staging.styleq-1560827295009.appspot.com/o/alan-caishan-cU53ZFBr3lk-unsplash.jpg?qk=AD5uMEtRm431VpNKVhCcUqrWGOdB-M8tXNzqwrJqUBJbwV0l9LZC7bGM041iZ-CBuO-d_SytN6fyaGUj7mSb0paQiWr5VndCFHlWso96gKPOxxE9-kSGtTGAjRF5O1IdyPy59NyFcyZsyTtwGCcn-WeHYo0DqZHYbqgBad3DCeTX4aWTDaS-A-LAzuB8US6GH4UtLE1mPCsTTQ6d5i2SYP_c4i8UeYfGmonbfXEouITza8KYg-_lkoO6bJ24l0VGs2WlI3l8VjGuH0SqHgvXskPiC4dAVVSq_-k1SYU43rlLwP-wkvnU1X8CoEMAoWc3Q6U6qG52hY2532yuxSiBvgFvrJe_LfdNMazmND0Cgqmx_uyVXnsvByPzOPxXGdQaWrTqEY_MC10rNX6a_S-BoSUunnK4anqSBCX11X71L7MCMN2XM4ojHDCu129L9DTZscP0QhGKOfosBqeK9WXXQGaiJU3at0bchXcEQJ_cmBzJFlk-Oxq1a0JI2a726yLs61yWI8Icux6eEruIeG4nHGxf3vNJITuAAhYDw9u4T8qFYDTPP0H_1x1Zoht1N3RVPulSNDs9cUp1D3jyPKc8bQga-YgCdIXdxipnDzFyzgijhsXy78uQ7B0Y30CpZnh1rkO4yflNjXkt4nxO4-8qH69ZDAVnelzlyWKEvOOmegZmnPJGZ0iT2hG9ZOcCI61DctOkY1fkzEMbDp32PK_rbeQMEZPnKqiFzM5RhmJah9dyZXJR4UxZLVMDMs5027Ts9cRl3b96a9YAutXA-1qAqMo8Kuct6yOr0GoeHir7ou7BnwPBIqtIE6hFgmEXQe92o1wN82Byt1tboMooRKNrHANGlPRz9GxrzmMOaKgK81nBsTh7xILwjXI&isca=1" />
        </Column>
        <Column>
          <Service name="MAKEUP" image="https://00e9e64bac7247564c858b897a7ade96a57cd0d2ce98211b22-apidata.googleusercontent.com/download/storage/v1/b/staging.styleq-1560827295009.appspot.com/o/oz-seyrek-8_8zPKmKe0k-unsplash.jpg?qk=AD5uMEvKo5DchiPzIXkuaUJpN-sfEzYOdIvnQmh6KbjaJEHAuYLPPPzhepQYgSERqnysAOQ5bw9-hARFRzDuIuUIG3vHXa3lwtZpjohB7XBHXCeLcfQ1xiOpNbRUSoAHAi7Rxg0mmwGHHNdTsqfOgjWxEwMgn7JVAxkLWQBEg3rbuBjaf5DGo3CzMyQY9O8S4jV9YVT7URRF2wJXb6VqPtzxMAeg68mad6negRLisTiKBf4vv6oiBzAyGJci4iKKRNiVbO7pyRqkxIC16kQPCPeAZIq1a2LOFok_M-YuDLhLmabJVkGgtdIdbsxzx9Pqy7WkhY_G2p1RC-aC49BncntDBp0-qfEMhRn6hSiyRJhpaG7fccAEysZsamzfpTX64Kt_Bk_h64VKqBFGLhiQKLqAcBjmU6K9AC3whJsaI12UeZzKjvA_0pavKbkolj-I_5EAlqF5YaHsmgyQJMyZMebJ3yadQWL-hlycegcJBCuzycGblf2UCyWRECHE4sh8tZmm4EYPJs5kMgpCEzOEwE4EifvGh_-TVBH-iNtsJtGoYZJZDXan27N5Q5NYoNh_7lbxFQRDXMtVYEehVSNQ7wi525B_JZGFTDNr-069fHXzjLqluR5POUtEk4PGzq39t2sWtmhr9b57eo26EWYjZgPwYeMSYyJqEM4JRkyEgTUvapMCI3IOrZ85J5--jqPONtpF8AskqceozvMJZoGEczNHZn0K8MA6e2i934ocqDe9me_k9Gw26rYKY92fkYyP20nFc-5DtZQuDbsvp41_HPNKElRp4abET9HQ3xhQZuXmITS0MVOQEuqqG4591VOV_I6W2tF3PfllVTKDBNcqCLn5-rs-X89vBJJUpN61rU3YQk_lE2hnlBs&isca=1" />
        </Column>
        <Column>
          <Service name="NAILS" image="https://res.cloudinary.com/strich/image/upload/v1586812341/styleq-nails_ltfsrm.jpg" />
        </Column>
      </Grid>
    </Container>
  </Root>
);
