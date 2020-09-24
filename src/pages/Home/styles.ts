import styled from 'styled-components';

export const Container = styled.div``;

export const Wrapper = styled.div`
  background: #2b3137;
  width: 100vw;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  border: 1px solid red;
  width: 100%;
  height: 60vh;
  margin: 0 auto;
  max-width: 1040px;

  div {
    border: 1px solid green;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      color: #fff;
      font-size: 60px;
    }

    h3 {
      color: #999;
      font-weight: 400;
      font-size: 20px;
      line-height: 1.8rem;
      margin-top: 30px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 0px auto 70px auto;
    justify-content: center;
    background: #fff;
    border-radius: 5px;
    padding: 0 20px;

    input {
      width: 400px;
      margin-bottom: 30px;
      padding: 15px;

      :nth-child(3) {
        margin-bottom: 0;
      }
    }

    button {
      background: #57a847;
      padding: 25px;
      color: #fff;
      border-radius: 10px;
    }

    small {
      width: 400px;
      font-size: 12px;
      margin: 20px 0;
    }

    button + small {
      color: #666;
      margin: 30px 0 0 0;
      border: 1px solid red;
    }
  }
`;
