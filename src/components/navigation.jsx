import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navigation.module.css';

function Navigation() {
  return (
    <div className={styles.navigation}>
      <Link to="/">Home</Link>
    </div>
  );
}
export default Navigation;
