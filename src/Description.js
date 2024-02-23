import React from 'react';
import product from './product'; // Importez l'objet JSON du produit

function Description() {
  return (
    <p>Description: {product.description}</p>
  );
}

export default Description;
