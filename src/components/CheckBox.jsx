import React from 'react'

const CheckBox = ({checked, onChange}) => {
  return (
    <input 
      className='input-checkbox'
      type="checkbox" 
      checked={checked}
      onChange={onChange} 
    />
  )
}

export default CheckBox