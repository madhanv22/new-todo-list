import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Lists from './Lists';

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
        <button className='add-button' onClick={handleAdd}>ADD</button>
      </div>
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
      <div className="how-to-use mt-6 p-4 rounded-lg bg-white bg-opacity-80 shadow-xl">
        <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">How to Use the To-Do App</h2>
        <ol className="list-decimal list-inside text-gray-700">
          <li className="mb-2">Enter your task in the input field.</li>
          <li className="mb-2">Click the <span className="font-bold">Add</span> button to add the task to your list.</li>
          <li className="mb-2">Your task will appear in the list below.</li>
          <li className="mb-2">Check the box next to a task to mark it as complete.</li>
          <li>To delete a task, click the <span className="font-bold">Delete</span> button next to it.</li>
        </ol>
      </div>
    </main>
  );
};

export default Content;
