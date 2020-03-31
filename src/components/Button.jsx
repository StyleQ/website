import styled, { css } from 'styled-components';

const variantStyle = (variant) => {
  if(!variant) throw new Error('Variant not set. It is a required parameter');
  const variants = {
    primary: `
      background: var(--color-brand-1);
      color: #fff;
      font-weight: bold;
      box-shadow: .2rem .4rem .4rem rgba(0,0,0,.2);
      transition: transform .5s var(--animation-easing);
      &:hover{
        transform: scale(1.02);
      }
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
  + a, + button{
    margin-left: 1rem;
  }
  &:focus{
    box-shadow: 0 0 .3rem var(--color-focus);
  }
  ${({ variant }) => variantStyle(variant)}
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
