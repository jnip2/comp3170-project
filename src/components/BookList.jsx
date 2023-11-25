import React, { useState } from 'react'
import BookCard from './BookCard';
import AddBookPopUp from './AddBookPopUp';

import '../styles.css'

// Will replace with a map function later
export default function BookList() {
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const [books, setBooks] = useState([]);

    const addBook = (book) => {
        setBooks([...books, book]);
    }

    const removeBook = (b) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== b.id;
        })

        setBooks(updatedBooks);
    }
    return (
        <div className='book__list'>
            <div className="lib__container">
                <div className="lib__sort">
                    <h3 className="lib__sort_title">Library</h3>
                    <label>
                        Sort By:
                        <select>
                            <option>All</option>
                            <option>Recent</option>
                            <option>Shuffle</option>
                        </select>
                    </label>
                </div>
                <button
                    className="lib__btn"
                    onClick={() => setIsPopupOpen(true)}
                >Add</button>
            </div>
            <div className='list__container'>
                {
                    books.map((book) => {
                        return (
                            <BookCard
                                key={book.id}
                                book={book}
                                remove={removeBook}
                            />
                        )
                    })
                }
            </div>
            {isPopupOpen && <AddBookPopUp onClose={() => setIsPopupOpen(false)} addBook={addBook} />}
        </div>
    )
}
