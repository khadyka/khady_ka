import { useState } from 'react';
import AddItemForm from './AddItemForm';
import './App.css';
import ItemList from './ItemList';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (itemName) => {
    setItems([...items, { id: Date.now(), name: itemName, bought: false }]);
  };

  const toggleItem = (itemId) => {
    setItems(
      items.map((item) =>
        item.id === itemId ? { ...item, bought: !item.bought } : item
      )
    );
  };

  const removeItem = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  return (
    <div className="App">
      <h1>Ma Liste de Courses</h1>
      <AddItemForm addItem={addItem} />
      <ItemList items={items} toggleItem={toggleItem} removeItem={removeItem} />
    </div>
  );
}

export default App;
