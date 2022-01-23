import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const MovieNavigationLink = styled(NavLink)`
  padding-top: 15px;
  padding-bottom: 15px;
  font-weight: 700;
  color: black;
  text-decoration: none;
  &.active {
    color: red;
    font-weight: 500;
  }
`;