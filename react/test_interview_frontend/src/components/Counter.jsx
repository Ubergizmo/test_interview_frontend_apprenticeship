//Component counter pour incrémenter et décrementer le state count avec deux buttons

import { useState } from "react";

function Counter() {
  //The count State
  const [count, setCount] = useState(0);

  //The increment function
  const increment = () => {
    setCount(count + 1);
  };

  //The decrement function
  const decrement = () => {
    setCount(count - 1);
  };
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={decrement}>DECREMENT</button>
      <button onClick={increment}>INCREMENT</button>
    </div>
  );
}

export default Counter;
