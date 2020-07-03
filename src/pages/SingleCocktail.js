import React from 'react';
import { useParams } from 'react-router-dom';

const SingleCocktail = (props) => {
  const { id } = useParams();

  return <div>SingleCocktail {id}</div>;
};

export default SingleCocktail;
