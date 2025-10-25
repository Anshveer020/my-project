import React, { useState } from "react";

function App() {
  const [groceries, setGroceries] = useState([
    { id: 1, name: "Apples", quantity: 5 },
    { id: 2, name: "Bread", quantity: 2 },
  ]);

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const addItem = () => {
    if (name && quantity) {
      const newItem = { id: groceries.length + 1, name, quantity: parseInt(quantity) };
      setGroceries([...groceries, newItem]);
      setName("");
      setQuantity("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Grocery List</h2>
      <ul>
        {groceries.map(item => (
          <li key={item.id}>{item.name} - {item.quantity}</li>
        ))}
      </ul>

      <input
        placeholder="Item Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        placeholder="Quantity"
        type="number"
        value={quantity}
        onChange={e => setQuantity(e.target.value)}
      />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default App;