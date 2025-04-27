import React from 'react';

const Order = (props) => {
  return (
    <div className='order'>
      <p>
        We are currently open until {props.closeHours}:00. Come visit us or
        order online!
      </p>
      <button className='btn'> Order Now</button>
    </div>
  );
};

export default Order;
