import React from 'react';
import product from './product'; // Importez l'objet JSON du produit

function Name() {
  return (
    <h2>{product.name}</h2>
  );
}

export default Name;
