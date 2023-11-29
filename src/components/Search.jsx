import React, { useState } from 'react';
import axios from 'axios';

const SearchBooks = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
}

export default function SearchBooks() {

  const searchBooks = async () => {
    try {
      const result = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyDGx1HR6VgFar2J8XF92pvWATPjSG5L-X4`);
      setBooks(result.data.items);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={searchBooks}>Search</button>
      <div>
        {books.map((book, index) => (
          <div key={index}>
            <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
            <h2>{book.volumeInfo.title}</h2>
            <p>{book.volumeInfo.authors?.join(', ')}</p>
            <p>{book.volumeInfo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

