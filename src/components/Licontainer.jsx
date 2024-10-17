import React from 'react'
import Lists from './Lists';
import { useContext } from 'react';
import { UserContext } from './Content'

const Licontainer = () => {
  const { items, handleCheck, handleDelete } = useContext(UserContext)

  return (
    <div>
      <ul className='list-container'>
        {items.length > 0 ? (
          items.map(item => (
            // List component
            <Lists
              key={item.id}
              handleCheck = {() => handleCheck(item.id)}
              handleDelete = {() => handleDelete(item.id)}
              item={item}
            />
          ))
        ) : (
          <p className='empty'>Your List Is Empty</p>
        )}
      </ul>
    </div>
  )
}

export default Licontainer