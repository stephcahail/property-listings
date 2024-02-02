import React from 'react';
import PropertyListing from 'PropertyListing';

const useStyles = () => {
  return {
    propertyListingContainer: {
      paddingTop: '6.5em',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  };
};

function FavoritesPage({properties}) {
  const styles = useStyles();

  return (
    <div>
      <div style={styles.propertyListingContainer}>
        {properties.map((p) => {
          if (localStorage.getItem(p.listingId)) {
            return (<PropertyListing property={p} propertyKey={p.listingId} key={p.listingId} />);
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default FavoritesPage;
