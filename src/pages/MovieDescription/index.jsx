import { useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header';
import MovieDetail from '../../components/MovieDetail';

const MovieDescription = () => {
  const { id } = useParams();

  return (
    <>
      <Header />
      <MovieDetail id={id} />
    </>
  );
};

export default MovieDescription;
