import React, { useContext } from 'react'
import { UserContext } from './Content'
import Checkbox from './Checkbox'
import Delete from './Delete'
import ItemText from './ItemText'

const Lists = ({item}) => {
  const { handleCheck, handleDelete } = useContext(UserContext)

  return (
    <div>
      <li>
        <Checkbox
          onChange={() => handleCheck(item.id)}
          checked={item.checked}
        />
        <ItemText 
          text={item.items}
          checked={item.checked}
        />
        <Delete 
          onClick={() => handleDelete(item.id)}
        />
      </li>
    </div>
  )
}

export default Lists