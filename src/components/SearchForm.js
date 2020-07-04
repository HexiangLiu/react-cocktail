import React, { useRef, useEffect } from 'react';

import './SearchForm.scss';

const SearchForm = ({ setSearchTerm }) => {
  const inputRef = useRef('');

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <form className="search-form" onSubmit={handleSubmit}>
        <label className="search-form__label" htmlFor="name">
          search your favorite cocktail
        </label>
        <input
          className="search-form__input"
          ref={inputRef}
          type="text"
          name="name"
          id="name"
          autoComplete="off"
          onChange={() => setSearchTerm(inputRef.current.value)}
        />
      </form>
    </section>
  );
};

export default SearchForm;
