import CloseIcon from '@mui/icons-material/Close';

export default function AddBookPopUp() {
    return (
        <>
            <div style={styles.container}>
                <div style={{ display: 'flex' }}>
                    <form style={styles.formContainer}>
                        <div style={styles.inputContainer}>
                            <label style={styles.labelContainer}>
                                Title
                                <input style={styles.inputBox} type='text' />
                            </label>
                            <label style={styles.labelContainer}>
                                Author
                                <input style={styles.inputBox} type='text' />
                            </label>
                            <label style={styles.labelContainer}>
                                Genre
                                <input style={styles.inputBox} type='text' />
                            </label>
                        </div>
                        <div style={styles.buttonContainer}>
                            <button type='submit' style={{ width: 285, height: 50 }}>Add to Library</button>
                        </div>
                    </form>
                </div>
                <div style={styles.iconContainer}>
                    <CloseIcon />
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
        position: 'relative'
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
    }
}