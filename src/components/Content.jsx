import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Lists from './Lists';
import Input from './Input';
import Guide from './Guide';

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
      <Input 
        handleAdd = {handleAdd}
        newItem = {newItem}
        setNewItem = {setNewItem}
      />
      <ul className='list-container'>
        {items.length > 0 ? (
          items.map(item => (
            <Lists
              handleCheck = {handleCheck}
              handleDelete = {handleDelete}
              item={item}
            />
          ))
        ) : (
          <p className='empty'>Your List Is Empty</p>
        )}
      </ul>
      <Guide />
    </main>
  );
};

export default Content;
