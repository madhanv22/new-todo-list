import React from 'react'

const Guide = () => {

  return (
    <div className="how-to-use">
      <h2>How to Use the To-Do App</h2>
        <ol>
          <li className="mb-2">Enter your task in the input field.</li>
          <li className="mb-2">Click the <span className="font-bold">Add</span> button to add the task to your list.</li>
          <li className="mb-2">Your task will appear in the list below.</li>
          <li className="mb-2">Check the box next to a task to mark it as complete.</li>
          <li>To delete a task, click the <span className="font-bold">Delete</span> button next to it.</li>
        </ol>
    </div>
  )
}

export default Guide