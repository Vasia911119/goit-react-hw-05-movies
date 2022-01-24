import {
  List,
  Item,
  Thumb,
  Img,
  Title,
  MovieLink,
} from './MovieList.styled';

import PropTypes from 'prop-types';

const MovieList = ({ movies, location }) => {
  return (
    <List>
      {movies.map(({ id, original_title, poster_path }) => (
        <Item key={id}>
          <MovieLink
            to={{ pathname: `/movies/${id}` }}
            state={{ from: location }}
          >
            {
              <>
                <Thumb>
                  <Img
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={original_title}
                    title={original_title}
                  />
                </Thumb>
                <Title>{original_title}</Title>
              </>
            }
          </MovieLink>
        </Item>
      ))}
    </List>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    }),
  ),
  location: PropTypes.object.isRequired,
};

export default MovieList;