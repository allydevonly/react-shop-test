import React from 'react';
import product from './product'; // Importez l'objet JSON du produit

function Image() {
  return (
    <img src={product.image} alt="Product" />
  );
}

export default Image;
