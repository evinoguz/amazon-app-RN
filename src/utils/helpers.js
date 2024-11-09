import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export const getRating = rating => {
    const ratingStar = [];
    const fullStar = (key) => <FontAwesome name="star" color="#ffa41c" size={10} key={key} />;
    const halfStar = <FontAwesome name="star-half-empty" color="#ffa41c" size={10} />;
    const emptyStar = (key) => <FontAwesome name="star-o" color="#ffa41c" size={10} key={key} />;
  
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        ratingStar.push(fullStar(i));
      } else {
        ratingStar.push(emptyStar(i));
      }
    }
    
    if (rating % 1 !== 0) {
      ratingStar[Math.floor(rating)] = React.cloneElement(halfStar, { key: Math.floor(rating) });
    }
  
    return ratingStar;
  };
  