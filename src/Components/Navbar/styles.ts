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
  max-width: 1040px;
  padding-top: 10px;

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

    &:hover {
      opacity: 0.8;
      transition: 0.55s ease;
    }
  }

  a + a {
    margin-left: 10px;
  }

  @media (max-width: 1040px) {
    img {
      margin-left: 20px;
    }
    a {
      display: none;
    }
  }
`;

export const RightNav = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-right: 10px;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    padding: 8px;
    border-radius: 4px;

    ::placeholder {
      color: #fff;
    }

    &:focus {
      background: #fff;
    }
  }

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

  button {
    background: transparent;
    border: none;
  }

  svg {
    display: none;
    color: #e1e1e1;
  }

  @media (max-width: 1040px) {
    input {
      display: none;
    }

    a {
      margin-right: 30px;
    }

    .signin {
      display: none;
    }

    svg {
      display: block;
      margin-right: 20px;
    }
  }
`;
