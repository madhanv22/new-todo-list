import React from 'react'

const Delete = ({onClick}) => {
  return (
    <div>
      <button className='delete-button' 
      onClick={onClick}>x</button>
    </div>
  )
}

export default Delete