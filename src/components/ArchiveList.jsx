import React, { useState } from 'react'
import ArchiveCard from './ArchiveCard1';
import ArchiveCard2 from './ArchiveCard2';
import ArchiveCard3 from './ArchiveCard3';
import ArchiveCard4 from './ArchiveCard4';

import '../styles.css'

// Will replace with a map function later
export default function ArchiveList() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div style={styles.list__row}>
            <div className='list__row'>
                <ArchiveCard title='The Lightning Thief' author='Rick Riordan' func={togglePopup} />
                <ArchiveCard2 title='The Sea of Monsters' author='Rick Riordan' />
                <ArchiveCard3 title='The Titans Curse' author='Rick Riordan' />
                <ArchiveCard4 title='The Battle of the Labyrinth' author='Rick Riordan' />
            </div>
        </div>
    )
}

const styles = {
    list__row: {
        paddingLeft: 3,
    }
}