import React from 'react';
import Pizza from './Pizza';
import pizzaData from './utils/data.js';

const Menu = () => {
  const numPizzas = pizzaData.length;

  return (
    <div className='menu'>
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <ul className='pizzas'>
          {pizzaData.map((pizza) => (
            <Pizza key={pizza.name} pizzaObj={pizza} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu. Please come back later.</p>
      )}
    </div>
  );
};

export default Menu;
