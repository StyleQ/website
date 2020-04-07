import styled, { css } from 'styled-components';

const variantStyle = (variant) => {
  const variants = {
    primary: `
      background: var(--color-brand-1);
      color: #fff;
      font-weight: bold;
      box-shadow: .2rem .5rem .4rem 0 rgba(0,0,0,.04),
                  .2rem .5rem .5rem 0 rgba(0,0,0,.12);
      &:hover{
        transform: scale(1.02);
        box-shadow: rgba(0,0,0,.41) 0 1.4rem 2.6rem -1.2rem,
                    rgba(0,0,0,.11) 0 .4rem 2.3rem 0,
                    rgba(0,0,0,.2) 0 .8rem 1rem -.5rem;
      }
    `,
    wrapped: `
      position: absolute;
      top: 0;
      right: 0;
      height: inherit;
      padding: .5rem 1rem;
      background: var(--color-brand-1);
      color: #fff;
      font-weight: bold;
      border-radius: 0 var(--round-radius-1) var(--round-radius-1) 0;
    `,
  };
  return css`${variants[variant]}`;
};

const Button = styled.button`
  --button-bg: rgba(0, 0, 0, .2);
  --button-fg: #222;
  display: inline-block;
  min-width: 10rem;
  padding: 1.5rem 2rem;
  border: 0;
  border-radius: var(--round-radius-1);
  background: var(--button-bg);
  color: var(--button-fg);
  font-size: 1.4rem;
  text-align: center;
  cursor: pointer;
  transition: all .2s var(--animation-easing);
  + a, + button{
    margin-left: 1rem;
  }
  svg{
    width: 2.5rem;
    margin-right: 1rem;
    fill: currentColor;
    vertical-align: bottom;
  }
  &:focus{
    box-shadow: 0 0 .3rem var(--color-focus);
  }
  ${({ variant }) => variant && variantStyle(variant)}
  ${({ responsive }) => responsive && css`
    display: block;
    width: 100%;
    @media(min-width: 520px) {
      display: inline-block;
      width: auto;
    }
  `}
  ${({ size }) => size === 'large' && css`
    padding: 2rem 5rem;
  `}
`;

export default Button;
