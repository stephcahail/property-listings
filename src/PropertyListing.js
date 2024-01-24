import React, { useState } from 'react';
import heartFill from './assets/heart-fill.svg';
import heartStroke from './assets/heart-stroke.svg';

const useStyles = () => {
  return {
    propertyContainer: {
      padding: '1em 1.25em',
      position: 'relative'
    },
    favoriteButton: {
      border: 'none',
      background: 'none',
      position: 'absolute',
      right: '2em',
      top: '2em'
    },
    propertyDetails: {
      paddingTop: '1em',
      fontSize: 20,
      fontWeight: 600,
      color: '#2D2D2D'
    },
    propertyPrice: {
      fontSize: 26,
      fontWeight: 700,
      color: '#2D2D2D'
    },
    propertyAddress: {
      fontSize: 15,
      fontWeight: 400,
      color: '#2D2D2D',
      width: 315,
      overflowWrap: 'break-word'
    },
    propertyListDate: {
      fontSize: 14,
      fontWeight: 400,
      color: '#979797'
    }
  };
};

function PropertyListing({ property, propertyKey }) {
  const { address, photos, listPrice, listDate, property: propertyDetails } = property;
  const [favorite, setFavorite] = useState(!!localStorage.getItem(propertyKey));
  const styles = useStyles();

  const date = new Date(listDate);
  const dateFormatted = new Intl.DateTimeFormat("en-US", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit"
  }).format(date);

  const formattedListPrice = new Intl.NumberFormat().format(listPrice);

  return (
    <div 
      style={styles.propertyContainer}
      key={propertyKey}
      aria-label={'Property'}
    >
      <button
        style={styles.favoriteButton}
        onClick={() => {
          if (!favorite) {
            localStorage.setItem(propertyKey, JSON.stringify(property));
          } else {
            localStorage.removeItem(propertyKey);
          }
          setFavorite(!favorite);
        }}
      >
        <img
          src={favorite ? heartFill : heartStroke}
          alt={favorite ? 'favorited' : 'not favorited'}
          width={47}
          height={47}
        />
      </button>
      <img
        style={{borderRadius: 4}}
        src={photos[0]}
        alt=''
        width={315}
        height={280}
      />
      <div style={styles.propertyDetails}>
        {`${propertyDetails.bedrooms} BR 
          | ${propertyDetails.bathsFull + (propertyDetails.bathsHalf / 2)} Bath
          | ${propertyDetails.area} Sq Ft`
        }
      </div>
      <div style={styles.propertyPrice}>
        {`$${formattedListPrice}`}
      </div>
      <div style={styles.propertyAddress}>
        {`${address.streetName}, ${address.city}, ${address.state}`}
      </div>
      <div style={styles.propertyListDate}>
        {`Listed: ${dateFormatted}`}
      </div>
    </div>
  );
}

export default PropertyListing;
