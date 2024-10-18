import React from 'react'

const Input = ({handleAdd, newItem, setNewItem}) => {
  return (
    <div className='input-container'>
      <input 
        className='input-search'
        type='text' 
        placeholder='Enter The List'
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button className='add-button' onClick={handleAdd}>ADD</button>
    </div>
  )
}

export default Input