import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Container from './components/Container';
import AppBar from './/components/AppBar';
import Loader from './components/Loader';

const HomePage = lazy(() => import('./pages/HomePage/'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const MovieInfoPage = lazy(() => import('./pages/MovieInfoPage'));
const Cast = lazy(() => import('./components/Cast'));
const Reviews = lazy(() => import('./components/Reviews'));

const App = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={Loader}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:id" element={<MovieInfoPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Container>
  );
};

export default App;
