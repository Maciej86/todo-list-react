import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 7px;
  border: 1px solid rgb(205, 208, 210);

  &:focus,
  &:hover {
    border: 1px solid rgb(69, 69, 69);
    outline: none;
  }
`;

export default Input;
