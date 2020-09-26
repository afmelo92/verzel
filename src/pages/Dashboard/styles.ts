import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background: #6e7d8d;
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  padding: 10px;
`;

export const Content = styled.div`
  margin: 10px auto;
  width: 100%;
  max-width: 1280px;
  text-align: center;
  display: flex;
  flex-direction: column;

  button.new-task {
    padding: 20px;
    flex: 1;
    background: #2b3137;
    border: 0;
    border-radius: 10px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#2b3137')};
    }
  }
`;

export const TaskItemHeader = styled.div`
  display: flex;
  padding: 20px;
  background: #2b3137;
  border-radius: 10px;
  margin-top: 10px;
  align-items: center;
  color: #e1e1e1;
  height: 60px;
  min-width: 820px;

  .description-row {
    display: flex;
    flex: 1;
    min-width: 820px;

    .task-title {
      width: 100%;
      max-width: 700px;
      text-align: start;
      white-space: nowrap;
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .start-date {
      width: 100%;
      max-width: 180px;
    }

    .end-date {
      width: 100%;
      max-width: 170px;
    }
  }

  .options-row {
    width: 100%;
    max-width: 200px;
  }
`;
