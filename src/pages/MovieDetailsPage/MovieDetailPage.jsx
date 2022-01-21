// import { useEffect, useState } from 'react';
// import { fetchTrends } from 'api/TMBD-movie-api';
// import { useLocation } from 'react-router-dom';
import { Title } from './MovieDetailPage.styled';
// import MovieList from '../../component/MovieList/MovieList';

const MovieDetailPage = () => {
  // const location = useLocation();
  // const [trends, setTrends] = useState([]);

  // useEffect(() => {
  //   fetchTrends().then(data => setTrends(data.results));
  // }, []);

  return (
    <>
      <Title>MovieDetailPage{params.invoiceId}</Title>
      {/* {trends && trends.length > 0 && (
        <MovieList movies={trends} location={location} />
      )} */}
    </>
  );
}

export default MovieDetailPage;