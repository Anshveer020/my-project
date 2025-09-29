import React, { useState } from "react";

function App() {
  // Initial grocery list
  const [groceryList, setGroceryList] = useState([
    { id: 1, name: "Apples", quantity: 5 },
    { id: 2, name: "Milk", quantity: 2 },
    { id: 3, name: "Bread", quantity: 1 },
  ]);

  // State for new item inputs
  const [newName, setNewName] = useState("");
  const [newQuantity, setNewQuantity] = useState("");

  // Function to add new item
  const addItem = () => {
    if (newName.trim() === "" || newQuantity.trim() === "") {
      alert("Please fill all fields!");
      return;
    }

    const newItem = {
      id: groceryList.length + 1,
      name: newName,
      quantity: parseInt(newQuantity),
    };

    setGroceryList([...groceryList, newItem]);

    // Clear input fields
    setNewName("");
    setNewQuantity("");
  };

  return (
    <div style={{ margin: "20px" }}>
      <h1>🛒 Grocery List</h1>

      <ul>
        {groceryList.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>

      <h2>Add New Item</h2>
      <input
        type="text"
        placeholder="Item name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={newQuantity}
        onChange={(e) => setNewQuantity(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

export default App;