import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import Login from '../pages/Login';
import MovieDescription from '../pages/MovieDescription';

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movie-description/:id" element={<MovieDescription />} />
      </Routes>
    </>
  );
}

export default Router;
