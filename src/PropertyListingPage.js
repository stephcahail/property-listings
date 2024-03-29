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

function PropertyListingPage({properties}) {
  const styles = useStyles();

  return (
    <div>
      <div style={styles.propertyListingContainer}>
        {properties.map((p) => {
          return (<PropertyListing property={p} propertyKey={p.listingId} key={p.listingId} />);
        })}
      </div>
    </div>
  );
}

export default PropertyListingPage;
