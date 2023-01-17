import React from 'react'
import { useState } from 'react';
import BookCreate from './Components/BookCreate';
import BookList from './Components/BookList';

function App() {
  const [books,setBook]=useState([]);
  const editBookbyId=(id,newtitle)=>{
    const updateBooks=books.map((book)=>{
      if(book.id===id){
        return {...book,title:newtitle};
      }
      return book;
    })
    setBook(updateBooks);
  }
  const deleteBookbyid=(id)=>{
    const updatedBooks=books.filter((book)=>{
      return book.id!==id;
    });
    setBook(updatedBooks);
  };
  const handleBookCreate=(title)=>{
    // console.log(title);
    const updateBooks=[
      ...books,
      {
        id:Math.round(Math.random()*9999)
        ,title
      },
    ];
    setBook(updateBooks);
  }
  return (
    <div className='app'>
    <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookbyid} onEdit={editBookbyId}/>
      <BookCreate onCreate={handleBookCreate}/>
    </div>
  )
}

export default App;