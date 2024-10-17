import React from 'react'

const Checkbox = ({checked, onChange}) => {
  return (
    <input 
      className='input-checkbox'
      type="checkbox" 
      checked={checked}
      onChange={onChange} 
    />
  )
}

export default Checkbox