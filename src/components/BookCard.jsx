import { useState, useContext } from 'react';
import Rating from '@mui/material/Rating';

import { BookContext } from '../context/BookContext';

export default function BookCard({
  book,
}) {
  const { removeBook, updateBook, editing, setEditing } = useContext(BookContext);

  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(1);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const onStarClick = (nextValue, prevValue, name) => {
    setRating(nextValue);
  };

  return (
    <div>
      {/* Book Card */}
      <div className='card__container'>
        <div className='card__img' onClick={togglePopup}>
          <div className='card__title-container'>
            <h3 className='card__title'>{book.title}</h3>
            <p className='card__author'>By: {book.author}</p>
          </div>
          <p className='card__genre'>{book.genre}</p>
        </div>
        <div className='card__btn_container'>
          <button onClick={() => setEditing(book.id)} className='edit__btn'>Edit</button>
          <button onClick={() => removeBook(book)} className='del__btn'>Delete</button>
        </div>
      </div>

      {/* Book Popup */}
      {isOpen && (
        <div className="popup">
          <div className="popup-inner">
            <button className="close-button" onClick={togglePopup}>
              x
            </button>
            <div className="book-info">
              <div className="popup-left">
                <div className='card__img'>
                  <div className='card__title-container'>
                    <h3 className='card__title'>{book.title}</h3>
                    <p className='card__author'>By: {book.author}</p>
                  </div>
                  <p className='card__genre'>{book.genre}</p>
                </div>
                <div className="stars-feature">
                  <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                </div>
              </div>
              <div className="popup-right">
                <div className="info">
                  <h2 style={{ margin: 0 }}>{book.title}</h2>
                  <p>Author: {book.author}</p>
                  <p>{book.desc}</p>
                </div>
              </div>
            </div>
            <button className='move__btn' onClick={togglePopup}>Move to Library Archive</button>
          </div>
        </div>
      )}
    </div>
  );
};
