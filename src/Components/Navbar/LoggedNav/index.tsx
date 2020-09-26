import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaPowerOff } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import logo from '../../../assets/logo_branco.png';
import avatar from '../../../assets/avatar.png';

import { Container, Content, LeftNav, RightNav } from './styles';

const LoggedNav: React.FC = () => {
  return (
    <Container>
      <Content>
        <LeftNav>
          <img src={logo} alt="logo" />
          <input type="text" placeholder="Search GitHub" />

          <Link to="/"> Pull requests </Link>
          <Link to="/">Issues</Link>
          <Link to="/">Marketplace</Link>
          <Link to="/">Explore</Link>
        </LeftNav>
        <RightNav>
          <h3>Olá, André</h3>
          <img src={avatar} alt="logo" />
          <button type="button">
            <FaPowerOff size={20} color="#e1e1e1" />
          </button>
          <button className="hamburger" type="button">
            <GiHamburgerMenu size={30} />
          </button>
        </RightNav>
      </Content>
    </Container>
  );
};

export default LoggedNav;
