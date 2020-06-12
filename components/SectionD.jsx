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
          <Service name="SPA/HAIR REMOVAL" image="https://00e9e64bac17f3860e1974abae42a0647175afdf6a29d48c05-apidata.googleusercontent.com/download/storage/v1/b/staging.styleq-1560827295009.appspot.com/o/alan-caishan-cU53ZFBr3lk-unsplash(1).jpg?qk=AD5uMEsNcrv1CkmBt8Ms6ufQVyVQlxEa9aGIJhAVkP3I8eqwKWduFN2Ui6tGpqRYg2tNfaKSMnc9N8OYk8Whjm26YNoSe6rrPe7yETaI9wsxYt3ucAM6CRP-iu-ySmXPH_sHBMy17l0bTQwK29SImU5YVbyZ-VrEGU7LPRyHk59OdvaCOzIEmZ2MVtwvpsRpmgTmKvaaCWd_HnYp-N5POiZXAyonQ-VBdhVg3WxbzFn6dSyUs6pyySH51-4LA0BPbUusbCPD9szsR73L_vpKPxs9yKzJ1wQGGXu5s2H34-P-Vy0-ZL1ylHjoXCurd-Bs61qsyfyptItvnVuDzueWz1le6psie12zKvnDfYFjfnXi8uXk3t2Z_ZK9UZv_9HXq12TOm2kTnIfaU_NAxpcd3YMeK4Fdy1CZ6Qu8ooLM_jjqyWp8i4urFOhyctA9wjStBbuMHKDQLgQrgLdDnmdyBr_vnYob79Irvc8okaJlzjEVFJ38DKgrZdRslExbN1uKe6sXaB9jUUYll6gaQJCN6opqJLVXw0ZjTmtWnD3RtxZu-JjtYQbFe5rHP8YYZJniJNov7b-LEQK7W6EGmB4IscxPxCo3uAzikARmSifpOAQTtAxzBt_U5MF7gjZV0xniUfQ-2-24y1NYrifJFzyvS_HmQ67dPEi-n8JCUXHpFE2UtMAUie336jYGmHOgqAWQtx7DCwvR8d-clZUtdflQnC9ua9REkye34VmL8jI-hP--2V5osidl3FWayXIsLqeGc-_LUsKEbpU_oHuMSaBxT_FLFWSYacCwGeEu5UKH2hir1_eAi1rz1buk9IV0e9nMULI-EbdAtMgEDHJnNv5cYwat2E75JZgAdGRUzg7BHP9P0Oeqv1Y3BTs&isca=1" />
        </Column>
        <Column>
          <Service name="MAKEUP" image="https://00e9e64bac7bfb1f9075f54fcb10c8d4ef700e8fc428f46065-apidata.googleusercontent.com/download/storage/v1/b/staging.styleq-1560827295009.appspot.com/o/oz-seyrek-8_8zPKmKe0k-unsplash(1).jpg?qk=AD5uMEt-vK5JPk_vh1t0G5pf5LUSzT0JzAujKrsgXrMRmP-asXaOrxaqRIrAUTwfskVmpK63-ri_Mz8OegyVEWuE9Ej9rW2wjaGwC0177YC8ARAbclWBOR7D2xmds0QDH8tG9Sxaj-gqn9Pr20HzG7JiABp3zO54_ZgvvsrUDlRkV6YtaDepZ7ScQpM1pB4yJb4376Gq4PW4B4e9IoPuzfFUoYjf0wfI_p5IMvfIqeNgIre4TLmALIGtDidSczLK2SIZUF9lglFcqZEYkLpWoeTMo-QmLBdgsEd1FJh6Tz3H6nLCMJ_KYwbDbwLvwW1DQlm2vkukm4a6LA7VhmK9VUSYQO_2sUTt-4-LDKH11_b_7UzF9qxtWt1oUmhnm3zmgqWn2FUuUBZV6CVlWakF0gPwONkrBvgG1J8l_9UCRoRxaNjgGhOdZD6Shud3mFynNdQXcE2sSHKvpuc8J4S7jymmcyJIHUAnUnjV6pMPD88vc_yNPpsTBlRqkZNuO4QoT43DlNhzRRSVeWozJX3Wu5QkgIKJ2gHjqfzoGY7Zageh1SdCFB7ficEZtZdWMuxywdX5qiq1fyRYg2E6v5bdQ0idtHKNR-HralDlP2a4Uh-zWpzeNvVzHlg_2g20mdrSCcm4oFtSXBr6orgm7SMP2N6yjqUpXBU2g9wmSTei5tDJ1dQKVTXxNIk-nfu2-__p5B_dCsmp4JuGQCyiXXDKGYkUtcTwXEz8xhUJjWfPkKsCVVe0KOTAuPG7FdiC-pdD1jrYXIekW3pai_DiU4m7F1GzOOCaPJ9Q85H4PsE_fUDZTzzUl_fM7vSP8jNnAmw-PvZCkuFzbLvJ5oHwzlPFQ-KB105gf6-S9MP4talr7aS0LRtng-RG8D8&isca=1" />
        </Column>
        <Column>
          <Service name="NAILS" image="https://res.cloudinary.com/strich/image/upload/v1586812341/styleq-nails_ltfsrm.jpg" />
        </Column>
      </Grid>
    </Container>
  </Root>
);
