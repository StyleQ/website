import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const textStyle = (element) => ({
  h1: () => css`
    font-size: 3.2rem;
    @media(min-width: 520px) {
      font-size: 4.8rem;
    }
  `,
  h2: () => css`
    font-size: 2.8rem;
    @media(min-width: 720px) {
      font-size: 4rem;
    }
  `,
  h3: () => css`
    font-size: 3.6rem;
  `,
  h4: () => css`
    font-size: 2.4rem;
  `,
  h5: () => css`
    font-size: 1.8rem;
  `,
  h6: () => css`
    font-size: 1.6rem;
  `,
  p: () => css`
    font-size: 1.6rem;
  `,
  span: () => css`
    margin: 0;
  `,
  strong: () => css`
    margin: 0;
    font-weight: bolder;
  `,
  em: () => css`
    margin: 0;
    font-style: italic;
  `,
}[element]());

const Text = styled.p`
  margin: 1rem 0;
  line-height: 1.5;
  ${({ as }) => as && textStyle(as)}
  ${({ transform }) => transform && css`
    text-transform: ${transform};
  `}
  ${({ align }) => align && css`
    text-align: ${align};
  `}
  ${({ size }) => size && css`
    font-size: ${size};
  `}
  ${({ weight }) => weight && css`
    font-weight: ${weight};
  `}
  ${({ intro }) => intro && css`
    margin: 1rem;
    font-size: 4rem;
    font-weight: 300;
    text-align: right;
    line-height: 1.2;
    @media(min-width: 720px) {
      margin: 2rem 1rem;
      font-size: 8rem;
    }
    @media(min-width: 1100px) {
      font-size: 10rem;
    }
  `}
  ${({ subheading }) => subheading && css`
    font-size: 4rem;
    font-weight: 100;
    color: rgba(0, 0, 0, .2);
    @media(min-width: 520px) {
      font-size: 6rem;
    }
    @media(min-width: 920px) {
      font-size: 10rem;
    }
  `}
  ${({ truncate }) => truncate === 'break' && css`
    word-break: break-word;
  `}
  ${({ truncate }) => truncate === 'ellipsis' && css`
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `}
`;

Text.propTypes = {
  as: PropTypes.string,
  transform: PropTypes.string,
  align: PropTypes.string,
};

export default Text;
