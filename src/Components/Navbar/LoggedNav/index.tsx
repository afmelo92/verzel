import React from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaPowerOff } from 'react-icons/fa';

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
        </LeftNav>
        <RightNav>
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
