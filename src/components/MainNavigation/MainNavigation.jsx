import { Outlet } from 'react-router-dom';
import { Nav, List, Item, NavLinkStyled } from './MainNavigation.styled';

export default function MainNavigation() {
  return (
    <>
      <Nav>
        <List>
          <Item>
            <NavLinkStyled to="/">Home</NavLinkStyled>
          </Item>
          <Item>
            <NavLinkStyled to="/movies">Movies</NavLinkStyled>
          </Item>
        </List>
      </Nav>
      <Outlet />
    </>
  );
}