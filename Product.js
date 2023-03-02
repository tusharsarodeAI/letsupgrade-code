import React from 'react';

function Product(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>Price: {props.price}</p>
      <p>Description: {props.description}</p>
    </div>
  );
}

export default Product;
