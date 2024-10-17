import React from 'react'

const ItemText = ({text, checked}) => {
  return (
    <span className='items-list' style={checked ? {  textDecoration: 'line-through' } : {}}>
      {text}
    </span>
  )
}

export default ItemText