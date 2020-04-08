import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  &:focus{
    outline: 0;
  }
}
:root{
  --color-brand-1: #a43f6a;
  --color-brand-2: #6f325b;
  --color-brand-3: #f3aacb;
  --color-brand-4: #bf88b9;
  --color-brand-5: #b7457b;
  --color-brand-6: #f9f3f8;
  --color-bg: #fff;
  --color-fg: #222;
  --color-link: var(--color-brand-3);
  --color-focus: var(--color-brand-3);
  --color-highlight: #ffbfda;
  --color-error: #BC1717;
  --color-success: #F5F5F8;
  --color-warning: #E06811;
  --font-primary: system-ui, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  --font-secondary: 'Roboto', sans-serif;
  --font-tertiary: 'Bebas Neue', cursive;
  --round-radius-1: .4rem;
  --round-radius-2: 1.2rem;
  --drop-shadow-1: .1rem .1rem .2rem rgba(0, 0, 0, .05);
  --drop-shadow-2: 0 .1rem .2rem rgba(0, 0, 0, .3);
  --animation-easing: cubic-bezier(0.5, 0, 0.5, 1);
  --site-width: 1100px;
  font-size: 62.5%;
  scroll-behavior: smooth;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}
body{
  width: 100%;
  margin: 0;
  background: var(--color-bg);
  color: var(--color-fg);
  font: 1.8rem/1.5 var(--font-secondary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}
::selection{
  background: var(--color-highlight);
}
a{
  text-decoration: none;
  background-color: transparent;
  color: var(--color-link);
}
img{
  max-width: 100%;
  border-style: none;
}
button, input, select, textarea{
  font: inherit;
}
main{
  display: block;
}
.intro{
  color: var(--color-brand-4);
}
`;

export default GlobalStyle;
