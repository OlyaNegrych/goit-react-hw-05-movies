import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavItem = styled(NavLink)`
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;
  background-color: #3fb3de;
  color: black;
  border: none;
  border-radius: 5px;
  padding: 10px;
  :not(:last-child) {
    margin-right: 5px;
  }
  &.active {
    background-color: #3f48de;
    border: 3px solid black;
    color: black;
    font-weight: 700;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: white;
  }
`;

export const Box = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: start;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 24px;
  color: #fff;
  background-color: #1e77cc;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const StyledOutlet = styled.div`
padding: 0 40px;
`;
