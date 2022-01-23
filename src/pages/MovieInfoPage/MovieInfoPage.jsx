import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MovieNavigation from '../../components/MovieNavigation';
import GoBackButton from '../../components/GoBackButton';
import { fetchMovieById } from '../../services/filmsApi';
import Movie from '../../components/Movie';
import PropTypes from 'prop-types';
import { NavMenu } from './MovieInfoPage.styled';

const MovieInfoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetchMovieById(id).then(data => {
      setMovie(data);
    });
  }, [id]);

  function handleGoBack() {
    navigate(-1);
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