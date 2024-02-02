import React, { useState, useEffect } from 'react';
import PropertyListingPage from 'PropertyListingPage';
import FavoritesPage from 'FavoritesPage';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

const useStyles = () => {
  return {
    headerContainer: {
      padding: '1em 1.3em',
      background: '#F4F4F4',
      position: 'fixed',
      zIndex: 1,
      top: 0,
      width: '100%',
      fontSize: 28,
      fontWeight: 600
    },
    link: {
      textDecoration: "none",
      color: "gray",
      marginRight: 24
    },
    linkActive: {
      textDecoration: "none",
      color: "black",
      marginRight: 24
    },
    dropdownContainer: {
      marginTop: 100,
      marginLeft: 8
    },
    dropdownLabel: {
      marginLeft: 24
    }
  };
};

function App() {

  const styles = useStyles();
  const auth = btoa("simplyrets:simplyrets");
  const [property, setProperty] = useState([]);
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();

  useEffect(() => {
    const getPropertyData = async () => {
      const response = await fetch(`https://api.simplyrets.com/properties?minprice=${minPrice}&maxprice=${maxPrice}`, {
        method: "GET",
        headers: {'Authorization': `Basic ${auth}`}
      });
      const json = await response.json();
      setProperty(json);
    };

    getPropertyData();
  }, [auth, minPrice, maxPrice]);

  return (
    <BrowserRouter>
      <h1 style={styles.headerContainer}>
        <NavLink 
          style={({ isActive }) => (
            isActive ? styles.linkActive : styles.link
          )}
          to="/"
        >
          Property Listings
        </NavLink>
        <NavLink
          style={({ isActive }) => (
            isActive ? styles.linkActive : styles.link
          )}
          to="/favorites"
        >
          Favorite Properties
        </NavLink>
      </h1>
      <label for="min-price" style={styles.dropdownLabel}>Choose a minimum price value</label>
      <select name="Min price" id="min-price" style={styles.dropdownContainer} onChange={(event) => {setMinPrice(event.target.value)}}>
        <option value={undefined}>No minimum price</option>
        <option value={1000000}>$1,000,000</option>
        <option value={5000000}>$5,000,000</option>
        <option value={10000000}>$10,000,000</option>
      </select>
      <label for="max-price" style={styles.dropdownLabel}>Choose a maximum price value</label>
      <select name="Max price" id="max-price" style={styles.dropdownContainer} onChange={(event) => {setMaxPrice(event.target.value)}}>
        <option value={undefined}>No maximum price</option>
        <option value={5000000} hidden={minPrice > 5000000}>$5,000,000</option>
        <option value={10000000} hidden={minPrice > 10000000}>$10,000,000</option>
        <option value={15000000} hidden={minPrice > 15000000}>$15,000,000</option>
      </select>
      <Routes>
        <Route path="/" element={<PropertyListingPage properties={property} />} />
        <Route path="/favorites" element={<FavoritesPage properties={property} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
