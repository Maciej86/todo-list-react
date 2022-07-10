import styled from "styled-components";
import { Link } from "react-router-dom";

export const WrapperMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
  margin-bottom: 50px;
  padding: 25px 0;
  background: rgb(0, 128, 128);
  list-style: none;
`;

export const List = styled.li`
  padding: 0 15px;
  font-size: 18px;
`;

export const MenuLink = styled(Link)`
  color: rgb(255, 255, 255);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
