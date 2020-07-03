import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import axios from '../api';

import './SingleCocktail.scss';

const SingleCocktail = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    async function getCocktail() {
      try {
        const response = await axios.get(`lookup.php?i=${id}`);
        if (response.data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strCategory: category,
            strAlcoholic: info,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = response.data.drinks[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];

          const newCocktail = {
            name,
            image,
            category,
            info,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }

    getCocktail();
  }, [id]);

  if (loading) {
    return (
      <section className="section">
        <h2 className="section__title">loading...</h2>
      </section>
    );
  }

  if (!cocktail) {
    return (
      <section className="section section-cocktail">
        <h2 className="section__title">no cocktail found....</h2>
        <Link className="btn btn-primary" to="/">
          go back to home page
        </Link>
      </section>
    );
  }

  const {
    name,
    image,
    category,
    info,
    glass,
    instructions,
    ingredients,
  } = cocktail;

  return (
    <section className="section">
      <h2 className="section__title">{name}</h2>
      <div className="singleCocktail">
        <img src={image} alt={name} className="singleCocktail__image" />
        <div className="singleCocktail__detail">
          <p>name : {name}</p>
          <p>category : {category}</p>
          <p>info : {info}</p>
          <p>glass : {glass}</p>
          <p>instructions : {instructions}</p>
          <p>
            ingredients :
            {ingredients.map((item, index) => {
              return (
                item && (
                  <span key={index} className="singleCocktail__ingredient">
                    {item}
                  </span>
                )
              );
            })}
          </p>
          <Link to="/" className="btn btn-primary singleCocktail__btn">
            back home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
