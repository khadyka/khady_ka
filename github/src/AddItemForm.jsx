import { useState } from 'react';
import AddItemForm from './AddItemForm'; // Assurez-vous que le chemin d'accès est correct

function ParentComponent() {
  const [items, setItems] = useState([]);

  const addItem = (itemName) => {
    const newItem = { id: Date.now(), name: itemName };
    setItems([...items, newItem]);
  };

  return (
    <div>
      <h1>Liste articles</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <AddItemForm addItem={addItem} />
    </div>
  );
}

export default ParentComponent;
