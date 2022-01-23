import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px auto;
  padding: 0px 15px;
  max-width: 1170px;
`;
export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  margin: 10px auto;
  width: 80px;
  border-radius: 10px;
  background-color: green;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  cursor: pointer;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 160px;
  &:hover,
  :focus {
    background-color: #00c531;
  }
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;
  text-decoration: none;
  &.active {
    color: tomato;
    font-weight: 500;
  }
`;