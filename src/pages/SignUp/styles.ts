import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
`;

export const Wrapper = styled.div`
  width: 100vw;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  max-width: 1040px;

  form {
    display: flex;
    flex-direction: column;
    margin: 10px auto 20px auto;
    background: #fff;
    border-radius: 5px;
    padding: 0 20px 20px;

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

      &:first-child {
        margin-top: 15px;
      }
    }
  }

  @media (max-width: 1040px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    section {
      width: 80%;
      justify-content: center;
      padding-top: 30px;

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
      margin: 50px auto 20px auto;
      justify-content: center;
      background: #fff;
      border-radius: 5px;
      padding: 0 20px 20px 20px;
      height: 900px;

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
  }
`;
