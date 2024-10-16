import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Content = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/items');
        setItems(response.data);
      } catch (error) {
        console.log('Error fetching items:', error);
      }
    };
    fetchItems(); 
  }, []);

  const handleCheck = async (id) => {
    const updatedItems = items.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
    try {
      const updatedItem = updatedItems.find(item => item.id === id);
      await axios.put(`http://localhost:5000/api/items/${id}`, {
        checked: updatedItem.checked,
      });
    } catch (error) {
      console.log('Error updating item:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/items/${id}`); 
      const updatedItems = items.filter(item => item.id !== id);
      setItems(updatedItems);
    } catch (error) {
      console.log('Error deleting item:', error);
    }
  };

  const handleAdd = async () => {
    if (!newItem.trim()) return;
    try {
      const response = await axios.post('http://localhost:5000/api/items', {
        items: newItem,
      });
      setItems([...items, response.data]);
      setNewItem("");
    } catch (error) {
      console.log('Error adding item:', error);
    }
  };

  return (
    <main className='bg-gradient-body flex-container'>
      <div className='input-container'>
        <input 
          className='input-search'
          type='text' 
          placeholder='Enter The List'
          required
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button className='add-button' onClick={handleAdd}>Add</button>
      </div>
      <ul className='list-container'>
        {items.length > 0 ? (
          items.map(item => (
            <li key={item.id}>
              <input 
                className='input-checkbox'
                type="checkbox" 
                checked={item.checked}
                onChange={() => handleCheck(item.id)} 
              />
              <span className='items-list' style={item.checked ? { textDecoration: 'line-through' } : {}}>
                {item.items}
              </span>
              <button className='delete-button' onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          ))
        ) : (
          <p className='empty'>Your List Is Empty</p>
        )}
      </ul>
    </main>
  );
};

export default Content;
