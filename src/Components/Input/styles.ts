import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 5px;
  margin-bottom: 20px;
  margin-top: 5px;

  border: 2px solid #d1d1d1;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      /* border-color: #; */
      border: 2px solid #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #0091ea;
      border-color: #0091ea;
      border: 2px solid;
      box-shadow: 2px 2px 4px 2px rgba(0, 145, 234, 0.2);
    `}

  /* ${props =>
    props.isFilled &&
    css`
      color: #00cc00;
    `} */



  input {
    flex: 1;
    background: transparent;
    padding: 10px;
    border: 0;
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin-right: 10px;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;

/**
 *
 * border-radius: 5px;
  border: 1px solid #d1d1d1;
  margin: 5px 0 10px 0;

  display: flex;
  flex-direction: row;

  input {
    width: 200px;
    padding: 10px;
    margin: 5px;
    border: 1px solid red;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #0091ea;
      border-color: #0091ea;
      border: 2px solid;
      box-shadow: 2px 2px 4px 2px rgba(0, 145, 234, 0.2);
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #00cc00;
    `}
 */
