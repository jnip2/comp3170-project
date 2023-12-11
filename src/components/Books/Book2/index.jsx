import { useState } from 'react';
import BookImage from './wk2.jpg';
import Rating from '@mui/material/Rating';


export default function Book2({
  book,
  title = "",
  author = ""
}) {
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
        <img className="book-image" src={BookImage} alt="Title" />
        <h3 className='card__title'>{title}</h3>
        <p className='card__author'>By: {author}</p>
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
                  <h2 style={{ margin: 0 }}>Diary of a Wimpy Kid: Rodrick Rules</h2>
                  <p>Author: Jeff Kinney</p>
                  <p>
                    As Greg enters the new school year, he’s eager to put the past three months behind him . . . and one event in particular.

                    Unfortunately for Greg, his older brother, Rodrick, knows all about the incident Greg wants to keep under wraps. But secrets have a way of getting out . . . especially when a diary is involved.

                    Diary of a Wimpy Kid: Rodrick Rules chronicles Greg’s attempts to navigate the hazards of middle school, impress the girls, steer clear of the school talent show, and most important, keep his secret safe.
                  </p>
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
