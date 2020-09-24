import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Wrapper = styled.div`
  background: #2b3137;
  width: 100vw;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 60vh;
  margin: 0 auto;
  max-width: 1040px;

  section {
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
    margin: 10px auto 20px auto;
    justify-content: center;
    background: #fff;
    border-radius: 5px;
    padding: 0 20px;
    max-height: 500px;

    small {
      width: 400px;
      font-size: 12px;
      margin: 0 0 20px 0;
    }

    button + small {
      color: #666;
      margin: 30px 0 0 0;
    }

    .label {
      font-weight: bold;
      font-size: 15px;
      margin: 0;
    }
  }
`;
