import styled, { css } from 'styled-components';

// 1 Dimension grids
export const Grid = styled.div`
  display: grid;
  ${({ columns = 1 }) => columns && css`
    grid-template-columns: repeat(auto-fit, minmax(calc(var(--site-width) / ${columns} - 15%), 1fr));
  `}
  ${({ responsive }) => responsive === false && css`
    display: flex;
  `}
  ${({ gap = '30px' }) => gap && css`
    grid-gap: ${gap};
  `}
`;

export const Column = styled.div`
  flex: 1;
`;
