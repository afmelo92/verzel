import { lighten } from 'polished';
import styled, { css } from 'styled-components';

interface ContainerProps {
  isDone: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #f3f4f6;
  ${props =>
    props.isDone &&
    css`
      display: #00cc00;
    `}
  margin-top: 10px;
  padding: 20px;
  border-radius: 10px;

  &:hover {
    background: ${lighten(0.2, '#f3f4f6')};
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  min-width: 820px;

  .task-row {
    display: flex;
    flex: 1;

    .task-title {
      width: 100%;
      max-width: 700px;
      text-align: start;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .start-date {
      width: 100%;
      max-width: 220px;
    }

    .end-date {
      width: 100%;
      max-width: 170px;
    }
  }

  .icons-row {
    width: 100%;
    max-width: 200px;

    button {
      background: transparent;
      border: 0;
      margin-right: 10px;

      &:hover {
        opacity: 0.55;
        transition: 0.55s ease;
      }
    }
  }
`;
