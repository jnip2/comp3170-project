import React from "react"
import { useState } from "react"

import BookList from "../components/BookList"
import NavBar from "../components/NavBar"
import AddBookPopUp from "../components/AddBookPopUp"

import '../styles.css'

export default function Home() {
    const [isAddBookPopUpOpen, setIsAddBookPopUpOpen] = useState(false);

    const handleOpen = () => {
        setIsAddBookPopUpOpen(true)
    }

    const handleClose = () => {
        setIsAddBookPopUpOpen(false)
    }
    return (
        <>
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
                    onClick={handleOpen}
                >Add</button>
            </div>
            <BookList />
            {isAddBookPopUpOpen && <AddBookPopUp onClose={handleClose} />}
        </>
    )
}