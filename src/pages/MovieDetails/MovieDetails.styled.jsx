import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BtnBack = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding: 5px;
  border-radius: 5px;
  width: 150px;
  height: 48px;
  border: 1px solid black;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
    font-weight: 600;
  }
`;

export const BtnTextLink = styled(NavLink)`
  font-size: 24px;
  text-decoration: none;
  color: black;
  margin-left: 10px;
 
  :hover {
    color: blue;
  }
`;
