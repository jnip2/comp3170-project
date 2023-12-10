import React, { useState, useContext } from 'react'
import BookCard from './BookCard';
import AddBookPopUp from './AddBookPopUp';

import '../styles.css'

import { BookContext } from '../context/BookContext';

export default function BookList() {
    const { addBook, updateBook, editing, setEditing, books } = useContext(BookContext);
    
    const [isPopupOpen, setIsPopupOpen] = useState(false)

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
                    onClick={() => setEditing("new")}
                >Add</button>
            </div>
            <div className='list__container'>
                {
                    books.map((book) => {
                        return (
                            <BookCard
                                key={book.id}
                                book={book}
                            />
                        )
                    })
                }
            </div>
            { editing && <AddBookPopUp onClose={() => setEditing(null)}/> }
        </div>
    )
}
