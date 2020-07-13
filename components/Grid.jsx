import styled, { css } from 'styled-components';

// 1 Dimension grids
export const Grid = styled.div`
  display: grid;
  ${({ responsive, columns = 1 }) => responsive !== 'fixed' && css`
    @media(min-width: 720px) {
      grid-template-columns: repeat(${Math.floor(columns / 2)}, 1fr);
    }
    @media(min-width: 1020px) {
      grid-template-columns: repeat(${Math.floor(columns / 2 + 1)}, 1fr);
    }
    @media(min-width: 2000px) {
      grid-template-columns: repeat(${columns}, 1fr);
    }
  `}
  ${({ gap = '30px' }) => gap && css`
    grid-gap: ${gap};
  `}
`;

export const Column = styled.div`
`;
