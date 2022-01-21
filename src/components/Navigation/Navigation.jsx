import { NavLink } from "react-router-dom";
import { Nav, List, Item } from './Navigation.styled';
// import propTypes from 'prop-types';

const Navigation = () => 
<Nav>
  <List>
    <Item>
        <NavLink to="/" className="link" activeClassName="link__active">Home</NavLink>
    </Item>
    <Item>
        <NavLink to="/movies" className="link" activeClassName="link__active">Movies</NavLink>
    </Item>
  </List>
</Nav>

export default Navigation;