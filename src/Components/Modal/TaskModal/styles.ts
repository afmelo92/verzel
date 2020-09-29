import styled from 'styled-components';

export const Container = styled.div`
  padding: 48px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
    margin-bottom: 20px;
  }

  h2 {
    margin-bottom: 40px;
    color: #6e7d8d;
  }

  button {
    margin-top: 48px;
    align-self: flex-end;
    background: #6e7d8d;
    color: #fff;
    font-weight: 600;
    border-radius: 8px;
    border: 0;
    padding: 16px 24px;
  }
`;
