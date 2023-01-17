import React from 'react'
import { useState } from 'react'
function BookCreate({onCreate}) {
  const [input,setInput]=useState("");
  const handleChange=(event)=>{
    setInput(event.target.value);
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    onCreate(input);
    setInput("");
  }
  return (
    <div className='book-create'>
    <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={input} onChange={handleChange}/>
        <button className='button'>Submit</button>
      </form>
    </div>
  )
}

export default BookCreate