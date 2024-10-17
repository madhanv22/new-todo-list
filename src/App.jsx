import React from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Guide from './components/Guide';

function App() {

  return (
    <div>
      <Header title='ToDo List'/>
      <Content />
      <Guide />
    </div>
  )
}

export default App
