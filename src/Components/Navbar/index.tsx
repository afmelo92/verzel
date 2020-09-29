import React from 'react';
import { Link } from 'react-router-dom';
import { BsChevronDown } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';

import logo from '../../assets/logo_branco.png';

import { Container, Content, LeftNav, RightNav } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <Content>
        <LeftNav>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <Link to="/">
            Why GitHub
            <BsChevronDown style={{ marginLeft: 3 }} />
          </Link>
          <Link to="/">Team</Link>
          <Link to="/">Enterprise</Link>
          <Link to="/">
            Explore
            <BsChevronDown style={{ marginLeft: 3 }} />
          </Link>
          <Link to="/">Marketplace</Link>
          <Link to="/">
            Pricing
            <BsChevronDown style={{ marginLeft: 3 }} />
          </Link>
        </LeftNav>
        <RightNav>
          <input type="text" placeholder="Search GitHub" />
          <Link className="signin" to="/signin">
            Sign in
          </Link>
          <Link to="/signup">Sign up</Link>
          <button type="button">
            <GiHamburgerMenu size={30} />
          </button>
        </RightNav>
      </Content>
    </Container>
  );
};

export default Navbar;
