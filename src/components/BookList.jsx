import React, { useState } from 'react'
import BookCard from './BookCard';

import '../styles.css'

// Will replace with a map function later
export default function BookList() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };
    
  return (
    <div className='list__container'>
        <div className='list__row'>
            <BookCard title='Book Title' author='Author Name' func={togglePopup}/>
            <BookCard title='Book Title' author='Author Name'/>
            <BookCard title='Book Title' author='Author Name'/>
            <BookCard title='Book Title' author='Author Name'/>
        </div>
        <div className='list__row'>
            <BookCard title='Book Title' author='Author Name'/>
            <BookCard title='Book Title' author='Author Name'/>
            <BookCard title='Book Title' author='Author Name'/>
            <BookCard title='Book Title' author='Author Name'/>
        </div>
        <div className='list__row'>
            <BookCard title='Book Title' author='Author Name'/>
            <BookCard title='Book Title' author='Author Name'/>
            <BookCard title='Book Title' author='Author Name'/>
            <BookCard title='Book Title' author='Author Name'/>            
        </div>
        <div className='list__row'>
            <BookCard title='Book Title' author='Author Name'/>
            <BookCard title='Book Title' author='Author Name'/>
            <BookCard title='Book Title' author='Author Name'/>
            <BookCard title='Book Title' author='Author Name'/>
        </div>
    </div>
  )
}
