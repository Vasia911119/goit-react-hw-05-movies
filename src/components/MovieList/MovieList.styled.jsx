import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: -20px;
  margin-top: -20px;
  padding: 20px 0;
`;

export const Item = styled.li`
  flex-basis: calc(100% / 4 - 20px);
  margin-left: 20px;
  margin-top: 20px;
  opacity: 1;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: tomato;
    opacity: 0.7;
  }
`;

export const Thumb = styled.div`
  height: 400px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: top;
`;

export const Title = styled.p`
  display: flex;
  justify-content: center;
  padding: 10px;
  font-size: 18px;
`;

export const MovieLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;