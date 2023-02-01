import { Routes, Route } from 'react-router-dom';

import Page404 from '../components/errors/Page404';
import HomePage from '../pages/HomePage';
import Login from '../pages/Login';
import MovieDescription from '../pages/MovieDescription';

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/movie-description/:id" element={<MovieDescription />} />
      </Routes>
    </>
  );
}

export default Router;
