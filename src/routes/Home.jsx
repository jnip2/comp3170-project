import React from "react"
import { useState } from "react"

import BookList from "../components/BookList"

import '../styles.css'

import { BookContext } from "../context/BookContext"

export default function Home() {
    const [books, setBooks] = useState([]);
    const [editing, setEditing] = useState(null);

    const addBook = (book) => {
        setBooks([...books, book]);
        setEditing(null);
    }

    const removeBook = (b) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== b.id;
        })

        setBooks(updatedBooks);
    }

    const updateBook = (book) => {
        setBooks(
            books.map((b) => {
                if (b.id === book.id) {
                    return book;
                } else {
                    return b;
                }
            }),
        );
        setEditing(null);
    };

    return (
        <div>
            <BookContext.Provider value={{
                books,
                addBook,
                removeBook,
                updateBook,
                editing,
                setEditing
            }}>
                <BookList />
            </BookContext.Provider>
        </div>
    )
}