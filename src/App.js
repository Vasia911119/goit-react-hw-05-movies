import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Container from './components/Container';
import AppBar from './/components/AppBar';
import Loader from './components/Loader';

const HomePage = lazy(() => import('./pages/HomePage/'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const MovieInfoPage = lazy(() => import('./pages/MovieInfoPage'));
const Cast = lazy(() => import('./pages/Cast'));
const Reviews = lazy(() => import('./pages/Reviews'));

const App = () => {
  return (
    <Container>
      <AppBar />
      {/* Роутинг приложения */}
      <Suspense fallback={Loader}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="movies" element={<MoviesPage />} />

          <Route path="movies/:id" element={<MovieInfoPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </Container>
  );
};

export default App;
