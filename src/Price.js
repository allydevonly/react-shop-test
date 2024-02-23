import React from 'react';
import product from './product'; // Importez l'objet JSON du produit

function Price() {
  return (
    <p>Prix: {product.price}</p>
  );
}

export default Price;
