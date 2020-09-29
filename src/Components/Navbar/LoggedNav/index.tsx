import React, { useCallback } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaPowerOff } from 'react-icons/fa';

import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../../assets/logo_branco.png';
import avatar from '../../../assets/avatar.png';

import { Container, Content, LeftNav, RightNav } from './styles';
import { IState } from '../../../store';
import { IUserState } from '../../../store/modules/user/types';
import { logoutUser } from '../../../store/modules/user/actions';

const LoggedNav: React.FC = () => {
  const user = useSelector<IState, IUserState>(state => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = useCallback(() => {
    dispatch(logoutUser());
    history.push('/');
  }, [dispatch, history]);

  return (
    <Container>
      <Content>
        <LeftNav>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <input type="text" placeholder="Search GitHub" />

          <Link to="/"> Pull requests </Link>
          <Link to="/">Issues</Link>
          <Link to="/">Marketplace</Link>
          <Link to="/">Explore</Link>
        </LeftNav>
        <RightNav>
          <h3>
            Olá,
            {` ${user.name}`}
          </h3>
          <img src={avatar} alt="logo" />
          <button type="button" onClick={handleLogout}>
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
