import { useState, useContext } from 'react';
import BookImage from './book.png';
import Rating from '@mui/material/Rating';

import { BookContext } from '../../context/BookContext';

export default function BookCard ({
  book,
}) {
  const { removeBook, updateBook, editing, setEditing} = useContext(BookContext);

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
      <div className='card__container' onClick={togglePopup}>
        <div className='card__img'></div>
        <h3 className='card__title'>{book.title}</h3>
        <p className='card__author'>By: {book.author}</p>
        <button onClick={() => setEditing(book.id)} className='edit__btn'>Edit</button>
        <button onClick={() => removeBook(book)} className='del__btn'>Delete</button>
      </div>

      {/* Book Popup */}
      {isOpen && (
        <div className="popup">
          <div className="popup-inner">
            <button className="close-button" onClick={togglePopup}>
              X
            </button>
            <div className="book-info">
              <div className="popup-left">
                <img className="book-image" src={BookImage} alt="Title" />
                <div className="stars-feature">
                  <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                </div>
              </div>
              <div className="popup-right">
                <div className="info">
                  <h2 style={{ margin: 0 }}>Title</h2>
                  <p>Author:</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Scelerisque adipiscing mattis eu eget porttitor risus. Fermentum lorem adipiscing a et adipiscing tortor sodales vel at. Eu rhoncus commodo viverra ornare fermentum. Blandit velit nulla nunc id vel in lectus. Diam est nunc tristique malesuada sem feugiat eu. Bibendum malesuada dignissim dictumst velit ante vel risus metus aenean.
                  </p>
                </div>
              </div>
            </div>
            <button onClick={togglePopup}>Move to Library Archive</button>
          </div>
        </div>
      )}
      <style jsx>{`
        .popup {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .popup-inner {
          background: #fff;
          padding: 20px;
          text-align: center;
          max-width: 500px; 
          width: 80%; 
          position: relative;
        }

        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 20px;
          cursor: pointer;
          border: none;
          background: none;
        }

        .book-info {
          text-align: left;
          display: flex;
          justify-content: space-between;
        }

        .popup-left {
          flex: 1;
          text-align: left;
        }

        .popup-right {
          flex: 1;
          text-align: left;
        }

        .book-image {
          max-width: 200px; 
          height: auto;
          margin-right: 10px;
        }

        .stars-feature {
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
};
