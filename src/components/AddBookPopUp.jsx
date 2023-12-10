import CloseIcon from '@mui/icons-material/Close';

import { nanoid } from 'nanoid';
import { useState, useContext } from 'react';

import { BookContext } from '../context/BookContext';

export default function AddBookPopUp({ 
    onClose,
}) {
    const { addBook, updateBook, editing, setEditing, books } = useContext(BookContext);

    let initialData = {
        title: "",
        author: "",
        genre: "",
        desc: "",
    }

    if( editing !== "new") {
        initialData = books.find((b) => {
            return b.id === editing;
        })
    }

    const [book, setBook] = useState(initialData)

    const handleInput = (event, field) => {
        setBook({ ... book, [field]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if(editing === "new") {
            addBook({
                ...book,
                id: nanoid(),
            })
        } else {
            updateBook(book)
        }
    }
    
    return (
        <>
            <div style={styles.popUpBg}>
                <div style={styles.popUpContainer}>
                    <div style={styles.container}>
                        <div style={{ display: 'flex' }}>
                            <form style={styles.formContainer} onSubmit={handleSubmit}>
                                <div style={styles.inputContainer}>
                                    <label style={styles.labelContainer}>
                                        Title
                                        <input style={styles.inputBox} type='text' onChange={(e) => handleInput(e, "title")} value={book.title}/>
                                    </label>
                                    <label style={styles.labelContainer}>
                                        Author
                                        <input style={styles.inputBox} type='text' onChange={(e) => handleInput(e, "author")} value={book.author}/>
                                    </label>
                                    <label style={styles.labelContainer}>
                                        Genre
                                        <input style={styles.inputBox} type='text' onChange={(e) => handleInput(e, "genre")} value={book.genre}/>
                                    </label>
                                    <label style={styles.labelContainer}>
                                        Description
                                        <input style={styles.inputBox} type='text' onChange={(e) => handleInput(e, "desc")} value={book.desc}/>
                                    </label>
                                </div>
                                <div style={styles.buttonContainer}>
                                    <button type='submit' style={{ width: 285, height: 50 }}>{editing !== "new" ? "Update Book" : "Add to Library"}</button>
                                </div>
                            </form>
                        </div>
                        <div style={styles.iconContainer} onClick={onClose}>
                            <CloseIcon />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const styles = {
    container: {
        width: 734,
        height: 484,
        border: '1px solid black',
        position: 'relative',
        background: 'white'
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 77,
        marginLeft: 26,
        marginTop: 27
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 33
    },
    inputBox: {
        width: 399
    },
    labelContainer: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        gap: 18
    },
    iconContainer: {
        position: 'absolute',
        right: 10,
        top: 10
    },
    buttonContainer: {
        justifyContent: 'center',
        width: 734,
        marginLeft: -26
    },
    popUpBg: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    popUpContainer: {
        margin: 'auto', // Center horizontally and vertically
        position: 'relative',
    }
}