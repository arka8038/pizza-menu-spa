import React from 'react';

const Footer = () => {
  const hours = new Date().getHours();
  const openHours = 8;
  const closeHours = 11;
  const isOpen = hours >= openHours && hours <= closeHours;
  console.log(isOpen);

  return (
    <footer>{new Date().toLocaleTimeString()} We are currently open!</footer>
  );
};

export default Footer;
