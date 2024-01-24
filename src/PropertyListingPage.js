import React, { useState, useEffect } from 'react';
import PropertyListing from 'PropertyListing';

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
    propertyListingContainer: {
      paddingTop: '6.5em',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  };
};

function PropertyListingPage() {
  const [property, setProperty] = useState([]);
  const styles = useStyles();
  const auth = btoa("simplyrets:simplyrets");
  const propertiesHeader = "Property Listings";

  useEffect(() => {
    const getPropertyData = async () => {
      const response = await fetch('https://api.simplyrets.com/properties', {
        method: "GET",
        headers: {'Authorization': `Basic ${auth}`}
      });
      const json = await response.json();
      setProperty(json);
    };

    getPropertyData();
  }, [auth]);

  return (
    <div>
      <h1 style={styles.headerContainer}>
        {propertiesHeader}
      </h1>
      <div style={styles.propertyListingContainer}>
        {property.map((p, idx) => {
          return (<PropertyListing property={p} propertyKey={idx} key={idx.toString()} />);
        })}
      </div>
    </div>
  );
}

export default PropertyListingPage;
