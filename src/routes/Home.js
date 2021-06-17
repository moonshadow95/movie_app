import axios from 'axios';
import React from 'react';
import Movie from '../components/movie.jsx';
import styles from './Home.module.css';

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts.mx/api/v2/list_movies.json');
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className={styles.movies}>
        {isLoading ? (
          <div className={styles.loader}>
            <div className={styles.spinner}></div>
            <span className={styles.text}>Loading...</span>
          </div>
        ) : (
          movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          ))
        )}
      </section>
    );
  }
}

export default Home;
