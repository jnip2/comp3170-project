import CloseIcon from '@mui/icons-material/Close';

import { nanoid } from 'nanoid';
import { useState } from 'react';

export default function AddBookPopUp({ 
    onClose,
    addBook={},
}) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");

    const handleTitle = (event) => {
        setTitle(event.target.value);
    }

    const handleAuthor = (event) => {
        setAuthor(event.target.value);
    }

    const handleGenre = (event) => {
        setGenre(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const newBook = {
            title,
            author,
            genre,
            id: nanoid()
        }

        addBook(newBook);

        setTitle("");
        setAuthor("");
        setGenre("");
        onClose();
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
                                        <input style={styles.inputBox} type='text' onChange={handleTitle} value={title}/>
                                    </label>
                                    <label style={styles.labelContainer}>
                                        Author
                                        <input style={styles.inputBox} type='text' onChange={handleAuthor} value={author}/>
                                    </label>
                                    <label style={styles.labelContainer}>
                                        Genre
                                        <input style={styles.inputBox} type='text' onChange={handleGenre} value={genre}/>
                                    </label>
                                </div>
                                <div style={styles.buttonContainer}>
                                    <button type='submit' style={{ width: 285, height: 50 }}>Add to Library</button>
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