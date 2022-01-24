import { Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, Item, MovieNavigationLink } from './MovieNavigation.styled';

const MovieNavigation = () => {
  const location = useLocation();
  return (
    <>
      <b>Additional information</b>
      <List>
        <Item>
          <MovieNavigationLink to={`cast`} state={{ ...location.state }}>
            Cast
          </MovieNavigationLink>
        </Item>
        <Item>
          <MovieNavigationLink to={`reviews`} state={{ ...location.state }}>
            Reviews
          </MovieNavigationLink>
        </Item>
      </List>
      <Outlet />
    </>
  );
};

MovieNavigation.propTypes = {
  location: PropTypes.object.isRequired,
};

export default MovieNavigation;