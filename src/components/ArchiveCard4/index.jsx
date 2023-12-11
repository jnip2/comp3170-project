import { useState } from 'react';
import BookImage from './pj4.jpg';
import Rating from '@mui/material/Rating';


export default function ArchiveCard4({
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
                  <h2 style={{ margin: 0 }}>Percy Jackson: The Battle of the Labyrinth</h2>
                  <p>Author: Rick Riordan</p>
                  <p>
                    Percy Jackson isn’t expecting freshman orientation to be any fun, but when a mysterious mortal acquaintance appears, pursued by demon cheerleaders, things quickly go from bad to worse.
                    Time is running out for Percy. War between the gods and the Titans is drawing near. Even Camp Half-Blood isn’t safe, as Kronos’ army prepares to invade its once impenetrable borders. To stop them, Percy and his friends must set out on a quest through the Labyrinth — a sprawling underground world with surprises and danger at every turn.
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
