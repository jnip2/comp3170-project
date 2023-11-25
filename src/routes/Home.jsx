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
        <div>
            <BookList />
        </div>
    )
}