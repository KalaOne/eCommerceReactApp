import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    {name: 'Product 1', price: 100},
    {name: 'Product 2', price: 200},
    {name: 'Product 3', price: 300}
  ]);

  const addProduct = () => {
      setProducts(prevState => [...prevState, {name: 'Product ' + (prevState.length + 1), price: Math.floor(Math.random() * 1000)}]);
  }

  return(
    <div>
      <h1>eCommerce</h1>
      <ul>
        {products.map((item,index) => (
          <li key={index}>{item.name} - {item.price}</li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default App
