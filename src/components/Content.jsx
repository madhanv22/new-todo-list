import React, { useState } from 'react'

const Content = () => {

  const [items, setItems] = useState([
    {
      id: 1,
      items: 'do coding',
      checked: false
    },
    {
      id: 2,
      items: 'watch netflix',
      checked: false
    },
    {
      id: 3,
      items: 'sleep',
      checked: false
    }
  ])

  return (
    <main>
      <div className='input-container'>
        <input 
          className='input-search'
          type="text" 
          required
        />
        <button className='add-button'>Add</button>
      </div>

      <ul>
        {items.map(item => 
          <li key={item.id}>
            <input 
              className='input-checkbox'
              type ="checkbox" 
              checked = {item.checked}
            />
            <span>{item.items}</span>
            <button className='delete-button'>Delete</button>
          </li>
        )}
      </ul>
    </main>
  )
}

export default Content