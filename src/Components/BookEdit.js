import React from 'react'
import { useState } from 'react'
function BookEdit({book,onSubmit}) {
  const[input,setinput]=useState(book.title);
  const handleInput=(event)=>{
    setinput(event.target.value);
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    onSubmit(book.id,input);

  }
  return (
    <form onSubmit={handleSubmit} className='book-edit'>
    <label>Title</label>
    <input value={input} onChange={handleInput} className='input'></input>
    <button className='button is-primary'>Save</button>
    </form>
  )
}

export default BookEdit