// import { useEffect, useState } from 'react';
// import { fetchTrends } from 'api/TMBD-movie-api';
// import { useLocation } from 'react-router-dom';
import { Title } from './Cast.styled';
// import MovieList from '../../component/MovieList/MovieList';

const Cast = () => {
  // const location = useLocation();
  // const [trends, setTrends] = useState([]);

  // useEffect(() => {
  //   fetchTrends().then(data => setTrends(data.results));
  // }, []);

  return (
    <>
      <Title>Cast</Title>
      {/* {trends && trends.length > 0 && (
        <MovieList movies={trends} location={location} />
      )} */}
    </>
  );
}

export default Cast;