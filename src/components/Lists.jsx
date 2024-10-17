import React, { useContext } from 'react'
import { UserContext } from './Content'

const Lists = ({item}) => {
  const { handleCheck, handleDelete} = useContext(UserContext)

  return (
    <div>
      <li>
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