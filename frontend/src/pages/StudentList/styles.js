import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin: 30px 50px;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
  }
`;

export const StudentControls = styled.div`
  display: flex;
  align-items: center;

  button {
    display: flex;
    align-items: center;
    background: #ee4d64;
    font-weight: bold;
    color: #fff;
    font-size: 14px;
    padding: 8px 15px;
    border-radius: 4px;
    transition: background 0.2s;
    height: 36px;
    border: none;

    &:hover {
      background: ${darken(0.08, '#ee4d64')};
    }

    &:disabled {
      cursor: default;
      background: #ee4d64;
      opacity: 0.65;
    }

    svg {
      margin-right: 5px;
    }
  }
`;

export const SearchInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 36px;
  background: #fff;
  padding: 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-left: 15px;

  input {
    height: 100%;
    background: none;
    border: 0;
    color: #444;
    padding-left: 40px;
  }

  svg {
    height: 100%;
    position: absolute;
    top: auto;
    left: 12px;
    pointer-events: none;
  }
`;
