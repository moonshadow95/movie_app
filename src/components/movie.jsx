import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './movie.module.css';

function Movie({ id, year, title, summary, poster, genres, runtime }) {
  return (
    <Link
      to={{
        pathname: `/movie/${id}`,
        state: { year, title, summary, poster, genres, runtime },
      }}
    >
      <div className={styles.movie}>
        <img className={styles.poster} src={poster} alt={title} />
        <div className={styles.data}>
          <h3 className={styles.title}>{title}</h3>
          <h5 className={styles.year}>{year}</h5>
          <ul className={styles.genres}>
            {genres.map((genre, index) => (
              <li key={index} className={styles.genre}>
                {genre}
              </li>
            ))}
          </ul>
          <p className={styles.summary}>{summary.slice(0, 300)}...</p>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  runtime: PropTypes.number,
};

export default Movie;
