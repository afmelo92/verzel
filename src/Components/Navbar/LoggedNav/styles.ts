import styled from 'styled-components';

export const Container = styled.div`
  background: #2b3137;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  padding: 10px 30px;

  @media (max-width: 1040px) {
    padding-bottom: 10px;
  }
`;

export const LeftNav = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 50px;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #e1e1e1;
    font-weight: bold;
    margin-left: 20px;

    &:hover {
      opacity: 0.8;
      transition: 0.55s ease;
    }
  }

  input {
    margin-left: 10px;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    padding: 7px;
    border-radius: 4px;
    width: 250px;
    font-size: 12px;
    color: #fff;

    ::placeholder {
      color: #fff;
      font-size: 12px;
    }

    &:focus {
      background: rgba(255, 255, 255, 0.8);
      color: #2b3137;

      ::placeholder {
        color: #2b3137;
        font-size: 12px;
      }
    }
  }

  @media (max-width: 1040px) {
    a {
      display: none;
    }
    input {
      display: none;
    }
  }
`;

export const RightNav = styled.div`
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: #e1e1e1;
    border: 1px solid #e1e1e1;
    padding: 8px;
    border-radius: 4px;
    margin-right: 20px;

    &:hover {
      opacity: 0.8;
      transition: 0.55s ease;
    }
  }

  .signin {
    border: none;
    font-size: 17px;
    margin-right: 10px;

    &:hover {
      opacity: 0.8;
      transition: 0.55s ease;
    }
  }

  img {
    height: 42px;
    width: 42px;
    border-radius: 50%;
    margin-right: 20px;
  }

  h3 {
    color: #fff;
    margin-right: 20px;
    font-size: 16px;
  }

  button {
    background: transparent;
    border: none;
  }

  button.hamburger {
    display: none;
  }

  @media (max-width: 1040px) {
    a {
      margin-right: 30px;
    }

    .signin {
      display: none;
    }

    h3 {
      display: none;
    }

    img {
      display: none;
    }

    button.hamburger {
      display: block;
      color: #e1e1e1;
    }

    svg {
      display: block;
      margin-right: 20px;
    }
  }
`;
