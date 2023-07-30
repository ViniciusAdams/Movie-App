import React from 'react';

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie) => (
        <div key={movie.imdbID}>
          <img src={movie.Poster} alt='movie' />
        </div>
      ))}
    </>
  );
};

export default MovieList;
