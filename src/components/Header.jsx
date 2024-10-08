import React from 'react'

const Header = ({title}) => {
  return (
    <header className='flex items-center justify-center p-4 bg-black text-white mb-4'>
      <h1 className='text-2xl font-semibold'>{title}</h1>
    </header>
  )

}

export default Header