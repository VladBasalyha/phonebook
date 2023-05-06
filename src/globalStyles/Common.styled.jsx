import styled from '@emotion/styled';

export const Button = styled.button`
  padding: 20px;
`;
export const InputStyles = styled.input`
  border: 0;
  padding: 10px 10px 5px 10px;
  transition: 100ms;
  border-bottom: 1px solid black;
  color: grey;
  &:focus {
    outline: none;
  }
  & + label {
    transform: translate(20px, -300%);
    pointer-events: none;
    font-size: 14px;
    font-weight: bold;
  }
  &:focus + label {
    transform: translate(20px, -400%);
    transition: 250ms;
    outline: none;
    position: relative;
    font-size: 14px;
    color: black;
  }
`;
