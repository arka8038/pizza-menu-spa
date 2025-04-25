import React from 'react';
import Pizza from './Pizza';
import pizzaData from './utils/data.js';

const Menu = () => {
  return (
    <div className='menu'>
      <h2>Our Menu</h2>
      {pizzaData.map((info) => (
        <Pizza
          key={info.name}
          name={info.name}
          ingredients={info.ingredients}
          price={info.price}
          photoName={info.photoName}
        />
      ))}
    </div>
  );
};

export default Menu;
