import React, { useState, useEffect } from 'react';

//import API
import axios from '../api';

//import components
import SearchForm from '../components/SearchForm';
import CocktailList from '../components/CocktailList';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('d');
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    async function getDrinks() {
      try {
        const response = await axios.get(`/search.php?s=${searchTerm}`);

        const { drinks } = response.data;
        if (drinks) {
          const newCocktails = drinks.map((drink) => {
            const {
              idDrink,
              strDrink,
              strDrinkThumb,
              strAlcoholic,
              strGlass,
            } = drink;
            console.log(drink);
            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass,
            };
          });
          setCocktails(newCocktails);
        } else {
          setCocktails([]);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getDrinks();
  }, [searchTerm]);

  return (
    <main className="section section-home">
      <SearchForm setSearchTerm={setSearchTerm} />
      <CocktailList loading={loading} cocktails={cocktails} />
    </main>
  );
};

export default Home;
