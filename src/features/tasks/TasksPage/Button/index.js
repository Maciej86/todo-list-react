import styled from "styled-components";

export const Button = styled.button`
  margin-bottom: 14px;
  background: none;
  border: none;
  color: rgb(41, 128, 185);
  cursor: pointer;
  transition: color 0.4s;

  &:hover {
    color: rgb(54, 164, 238);
  }

  &:disabled {
    color: rgb(180, 180, 180);
    cursor: default;
  }
`;
