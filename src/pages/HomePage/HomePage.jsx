import { useEffect, useState } from 'react';
import { fetchTrends } from '../../services/filmsApi';
import { useLocation } from 'react-router-dom';
import { Title } from './HomePage.styled';
import MovieList from '../../components/MovieList';

const Home = () => {
  const location = useLocation();
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    fetchTrends().then(data => setTrends(data.results));
  }, []);

  return (
    <>
      <Title>Tranding Today</Title>
      {trends && trends.length > 0 && (
        <MovieList movies={trends} location={location} />
      )}
    </>
  );
};

export default Home;