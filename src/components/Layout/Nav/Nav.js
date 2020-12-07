import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.nav`
  height: 8vh;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
`;

const Logo = styled.p`
  font-weight: 700;
  font-size: 1.2rem;
`;

const Links = styled.ul`
  display: flex;

  li:not(:last-child) {
    margin-right: 1rem;
  }
`;

const Nav = () => {
  return (
    <Wrapper>
      <Logo>BitPrice</Logo>
      <Links>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </Links>
    </Wrapper>
  );
};

export default Nav;
