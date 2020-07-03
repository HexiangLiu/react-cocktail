import React from 'react';

import Cocktail from './Cocktail';

import './CocktailList.scss';

const CocktailList = ({ loading, cocktails }) => {
  if (loading) {
    return <h2 className="section__title">Loading.....</h2>;
  }

  if (cocktails.length < 1) {
    return (
      <h2 className="section__title">
        no cocktails match your search criteria
      </h2>
    );
  }

  return (
    <section className="cocktails">
      <h2 className="section__title">cocktails</h2>
      <div className="cocktailList">
        {cocktails.map((el) => {
          return <Cocktail cocktail={el} key={el.id} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
