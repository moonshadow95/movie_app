import React from 'react';
import styles from './detail.module.css';
import Navigation from './navigation';

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }
  render() {
    const {
      location: { state },
    } = this.props;
    if (state) {
      return (
        <div className={styles.movie}>
          <Navigation />
          <img className={styles.poster} src={state.poster} alt={state.title} />
          <div className={styles.data}>
            <h1 className={styles.title}>{state.title}</h1>
            <h3 className={styles.year}>{state.year}</h3>
            <ul className={styles.genres}>
              Genres:{' '}
              {state.genres.map((genre, index) => (
                <li key={index} className={styles.genre}>
                  {genre}
                </li>
              ))}
            </ul>
            <span className={styles.runtime}>
              Running time: {state.runtime}
            </span>
            <p className={styles.summary}>{state.summary}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
