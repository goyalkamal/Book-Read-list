import React from 'react'
import { useState } from 'react'
import BookEdit from './BookEdit';
function BookShow({book,onDelete,onEdit}) {
  const [showEdit,setShowedit]=useState(false);
  const handleEditClick=()=>{
    setShowedit(!showEdit);
  }
  const handleDeleteClick=()=>{
    // event.preventDefault();
    onDelete(book.id)
  }
  const handleSubmit=(id,newtitle)=>{
    onEdit(id,newtitle);
    setShowedit(false);
  }
  let content=<h3>{book.title}</h3>
  if(showEdit){
    content=<BookEdit onSubmit={handleSubmit} book={book}/>
  }
  
  return (
    <div className='book-show'>
    <img
      alt='books'
      src={`https://picsum.photos/seed/${book.id}/300/200`}
    />
    {content}
    <div className='actions'>
      <button className="edit" onClick={handleEditClick}>
        Edit
      </button>
      <button onClick={handleDeleteClick} className='delete'>
        Delete
      </button>
    </div>
    </div>
  )
}

export default BookShow