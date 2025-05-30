const Pizza = ({ pizzaObj }) => {
  if (pizzaObj.soldOut) return null;

  return (
    <li key={pizzaObj.name} className='pizza'>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.price}</span>
      </div>
    </li>
  );
};

export default Pizza;
