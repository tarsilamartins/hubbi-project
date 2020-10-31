import React from 'react';
import { Link } from 'react-router-dom';

export default function Home({}) {
  return (
    <>
      <h1>More details about:</h1>
      <Link to="/people">
        <h2>People</h2>
      </Link>
      <Link to="/vehicles">
        <h2>Vehicles</h2>
      </Link>
      <Link to="/starships">
        <h2>Starships</h2>
      </Link>
    </>
  );
}
