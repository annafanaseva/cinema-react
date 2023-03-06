import { Routes, Route } from 'react-router-dom';

import NotFound from '../components/errors/NotFound';
import HomePage from '../pages/HomePage';
import MovieDescription from '../pages/MovieDescription';

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/movie-description/:id" element={<MovieDescription />} />
      </Routes>
    </>
  );
}

export default Router;
