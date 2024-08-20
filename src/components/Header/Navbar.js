import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Container from '../layout/Container';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className={styles.navbar}>
      <Container style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" className={styles.brand}>StyleStore</Link>
        <div className={styles.links}>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          {user ? (
            <>
              <Link to="/profile">Profile</Link>
              <button onClick={logout} className={styles.logoutBtn}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
          <Link to="/cart">Cart</Link>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
