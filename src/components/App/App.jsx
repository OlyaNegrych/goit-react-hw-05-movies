import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
// import styled from 'styled-components';
import SharedLayout from '../SharedLayout/SharedLayout'
import Home from '../../pages/Home';
import Movies from '../../pages/Movies';
// import MovieDetails from '../../pages/MovieDetails';
// import Cast from '../Cast/Cast';
// import Reviews from '../Reviews/Reviews';
import NotFound from '../../pages/NotFound';

const MovieDetails = lazy(() => import('../../pages/MovieDetails'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
