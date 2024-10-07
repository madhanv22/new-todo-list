import React, { useEffect, useState } from 'react'

const Content = () => {

  const [items, setItems] = useState(() => {
    const saveItems = localStorage.getItem('items');
    return saveItems ? JSON.parse(saveItems) : []
  });

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const [newItem, setNewItem] = useState("");

  const handleCheck = (id) => {
    const updateItems = items.map(item => 
      item.id === id ? {...item, checked: !item.checked} : item
    )
    setItems(updateItems)
  }

  const handleDelete = (id) => {
    const updateItems = items.filter(item => 
      item.id !== id
    )
    setItems(updateItems)
  }

  const handleAdd = () => {
    if (!newItem.trim()) return;
    const addNewItem = {
      id: items.length ? items[items.length -1].id + 1 : 1,
      items : newItem,
      checked: false
    }
    setItems([...items, addNewItem]);
    setNewItem("")
  }

  return (
    <main>
      <div className='input-container'>
        <input 
          className='input-search'
          type="text" 
          placeholder='Enter The List'
          required
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button className='add-button'
        onClick={() => handleAdd()}>Add</button>
      </div>
      <ul className='list-container'>
        {items.length > 0 ? (
          items.map(item => (
          <li key={item.id}>
            <input 
              className='input-checkbox'
              type ="checkbox" 
              checked = {item.checked}
              onClick={() => handleCheck(item.id)}
            />
            <span style={item.checked ? { textDecoration: 'line-through' } : {}}>{item.items}</span>

            <button className='delete-button'
              onClick={() => handleDelete(item.id)}
            >Delete</button>
          </li>
        ))
       ) : (
        <p className='empty'>Your List Is Empty</p>

        )}
      </ul>
    </main>
  )
}

export default Content