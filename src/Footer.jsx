import React from 'react';
import Order from './Order';

const Footer = () => {
  const hours = new Date().getHours();
  const openHours = 8;
  const closeHours = 24;
  const isOpen = hours >= openHours && hours <= closeHours;
  console.log(isOpen);

  // Conditional rendering with && operator
  // return (
  //   <footer className='footer'>
  //     {isOpen && <Order closeHours={closeHours} />}
  //   </footer>
  // );

  // Conditional rendering with ternary operator
  return (
    <footer className='footer'>
      {isOpen ? (
        <Order closeHours={closeHours} />
      ) : (
        <p>
          We're currently closed. We're happy to welcome you between {openHours}
          :00 and {closeHours}:00.
        </p>
      )}
    </footer>
  );
};

export default Footer;
