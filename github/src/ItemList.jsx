import { useState } from 'react';
import ItemList from './ItemList'; // Assurez-vous que le chemin d'accès est correct

function ParentComponent() {
  const [items, setItems] = useState([
    { id: 1, name: 'Article 1', bought: false },
    { id: 2, name: 'Article 2', bought: true },
    // ... autres articles ...
  ]);

  const toggleItem = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, bought: !item.bought } : item
      )
    );
  };

  const removeItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <h1>Liste articles</h1>
      <ItemList items={items} toggleItem={toggleItem} removeItem={removeItem} />
    </div>
  );
}

export default ParentComponent;
