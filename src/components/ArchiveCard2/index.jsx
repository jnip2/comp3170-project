import { useState } from 'react';
import BookImage from './pj2.jpg';
import Rating from '@mui/material/Rating';


export default function ArchiveCard2 ({
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
                  <h2 style={{ margin: 0 }}>Percy Jackson: The Sea of Monsters</h2>
                  <p>Author: Rick Riordan</p>
                  <p>
                  When Thalia’s tree is mysteriously poisoned, the magical borders of Camp Half-Blood begin to fail. Now Percy and his friends have just days to find the only magic item powerful to save the camp before it is overrun by monsters. The catch: they must sail into the Sea of Monsters to find it. Along the way, Percy must stage a daring rescue operation to save his old friend Grover, and he learns a terrible secret about his own family, which makes him question whether being the son of Poseidon is an honor or a curse.
                  </p>
                </div>
              </div>
            </div>
            <button onClick={togglePopup}>Move back to Library</button>
          </div>
        </div>
      )}
    </div>
  );
};
