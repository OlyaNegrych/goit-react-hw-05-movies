import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavItem = styled(NavLink)`
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;
  color: black;
  border: 2px solid black;
  border-radius: 5px;
  padding: 10px;
  :not(:last-child) {
    margin-right: 5px;
  }
  &.active {
    background-color: blue;
    color: white;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: blue;
  }
`;

export const Box = styled.header`
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;
  color: black;
  padding: 40px 20px;
  border-bottom: 2px solid black;
`;