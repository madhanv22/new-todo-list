import React from 'react'

const Lists = ({handleCheck, handleDelete, item}) => {
  return (
    <div>
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
        <button className='delete-button' onClick={() => handleDelete(item.id)}>x</button>
      </li>
    </div>
  )
}

export default Lists