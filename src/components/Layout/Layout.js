import { createGlobalStyle } from 'styled-components';

import Nav from './Nav/Nav';

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
  }

  *,
  *::before,
  *::after {
      box-sizing: inherit;
  }

  html {
      box-sizing: border-box;
  }

  main {
    background: #f4f4f7;
    width: 100vw;
    min-height: calc(100vh - 8vh);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  p, a {
    font-size: 1rem;
  }

  select:focus {
      border-color: black;
      outline-style: none;
      box-shadow: none;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <header>
        <Nav />
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
