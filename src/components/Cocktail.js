import React from 'react';
import { Link } from 'react-router-dom';

import './Cocktail.scss';

const Cocktail = ({ cocktail }) => {
  const { id, name, image, info, glass } = cocktail;
  return (
    <article className="cocktail">
      <img src={image} alt={name} className="cocktail__image" />

      <div className="cocktail__footer">
        <h3 className="heading-1">{name}</h3>
        <h4 className="cocktail__glass">{glass}</h4>
        <p className="cocktail__info">{info}</p>
        <Link to={`/cocktail/${id}`} className="btn btn-secondary">
          details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
