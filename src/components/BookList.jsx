import React, { useState, useContext } from 'react'
import BookCard from './BookCard';
import AddBookPopUp from './AddBookPopUp';
import Book1 from './Books/Book1';
import Book2 from './Books/Book2';
import Book3 from './Books/Book3';

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
            {editing && <AddBookPopUp onClose={() => setEditing(null)} />}
            <div style={styles.list__row}>
                <div className='list__row'>
                    <Book1 title='Diary of a Wimpy Kid' author='Jeff Kinney' />
                    <Book2 title='Diary of a Wimpy Kid: Rodrick Rules' author='Jeff Kinney' />
                    <Book3 title='Diary of a Wimpy Kid: The Last Straw' author='Jeff Kinney' />
                </div>
            </div>
        </div>

    )
}

const styles = {
    list__row: {
        padding: 5,
    }
}