import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #57a847;
  border-radius: 5px;
  border: 0;
  color: #fff;
  width: 100%;
  font-weight: 400;
  transition: background-color 0.2s;
  padding: 25px;

  &:hover {
    background: ${shade(0.2, '#57a847')};
  }

  @keyframes infinite-spinning {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  svg {
    animation: infinite-spinning 2s infinite linear;
  }
`;
