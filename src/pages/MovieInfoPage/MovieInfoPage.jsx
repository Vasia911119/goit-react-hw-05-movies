import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import MovieNavigation from '../../components/MovieNavigation';
import GoBackButton from '../../components/GoBackButton';
import { fetchMovieById } from '../../services/filmsApi';
import Movie from '../../components/Movie';
import PropTypes from 'prop-types';
import { NavMenu } from './MovieInfoPage.styled';

const MovieInfoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetchMovieById(id).then(data => {
      setMovie(data);
    });
  }, [id]);

  function handleGoBack() {
    navigate(location?.state?.from ?? '/');
  }

  return (
    <>
      <GoBackButton onBack={handleGoBack} />
      {movie && <Movie movie={movie} />}
      <NavMenu>{movie && <MovieNavigation />}</NavMenu>
    </>
  );
};

MovieInfoPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default MovieInfoPage;