import { useState } from 'react';
import BookImage from './wk1.jpg';
import Rating from '@mui/material/Rating';

export default function Book1 ({
  book,
  title="",
  author=""
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
                  <h2 style={{ margin: 0 }}>Diary of a Wimpy Kid</h2>
                  <p>Author: Jeff Kinney</p>
                  <p>
                  It’s a new school year, and Greg Heffley finds himself thrust into middle school, where undersized weaklings share the hallways with kids who are taller, meaner, and already shaving. The hazards of growing up before you’re ready are uniquely revealed through words and drawings as Greg records them in his diary.
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
