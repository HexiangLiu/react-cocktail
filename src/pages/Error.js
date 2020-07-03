import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className="section section-error">
      <h1 className="section__title">oops! it's a dead end</h1>
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
    </section>
  );
};

export default Error;
