import './App.css';
import { Suspense, lazy } from 'react';
import AppBar from './components/AppBar';
import Container from './components/Container';
import { Route, Routes } from 'react-router-dom';
import Loader from './components/Loader';

const HomeView = lazy(() => import('./pages/HomePage'));
const MoviePage = lazy(() => import('./pages/MoviePage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
const NotFound = lazy(() => import('./components/NotFound'));
const Cast = lazy(() => import('./pages/Cast'));
const Reviews = lazy(() => import('./pages/Reviews'));

function App() {
  return (
    <Suspense fallback={Loader}>
      <Container>
        <AppBar />

        <Routes>
          <Route path="/" element={<HomeView />} />

          <Route path="movies" element={<MoviePage />}>
            <Route path=":movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Suspense>
  );
}

export default App;
