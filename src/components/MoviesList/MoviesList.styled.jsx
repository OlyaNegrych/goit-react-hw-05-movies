import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MoviesUl = styled.ul`
  list-style: none;
`;

export const MovieLi = styled.li`
  margin-bottom: 10px;
`;
export const NavItem = styled(NavLink)`
  font-size: 24px;
  text-decoration: none;
  color: black;
  :not(:last-child) {
    margin-left: 10px;
    padding-bottom: 10px;
  }
  :hover {
    color: blue;
  }
`;
