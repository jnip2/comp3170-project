import React, { useState } from 'react'
import ArchiveCard from './ArchiveCard';

import '../styles.css'

// Will replace with a map function later
export default function ArchiveList() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='list__container'>
            <div className='list__row'>
                <ArchiveCard title='Book Title' author='Author Name' func={togglePopup} />
                <ArchiveCard title='Book Title' author='Author Name' />
                <ArchiveCard title='Book Title' author='Author Name' />
                <ArchiveCard title='Book Title' author='Author Name' />
            </div>
            <div className='list__row'>
                <ArchiveCard title='Book Title' author='Author Name' />
                <ArchiveCard title='Book Title' author='Author Name' />
                <ArchiveCard title='Book Title' author='Author Name' />
                <ArchiveCard title='Book Title' author='Author Name' />
            </div>
            <div className='list__row'>
                <ArchiveCard title='Book Title' author='Author Name' />
                <ArchiveCard title='Book Title' author='Author Name' />
                <ArchiveCard title='Book Title' author='Author Name' />
                <ArchiveCard title='Book Title' author='Author Name' />
            </div>
            <div className='list__row'>
                <ArchiveCard title='Book Title' author='Author Name' />
                <ArchiveCard title='Book Title' author='Author Name' />
                <ArchiveCard title='Book Title' author='Author Name' />
                <ArchiveCard title='Book Title' author='Author Name' />
            </div>
        </div>
    )
}
