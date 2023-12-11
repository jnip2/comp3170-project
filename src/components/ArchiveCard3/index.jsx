import { useState } from 'react';
import BookImage from './pj3.jpg';
import Rating from '@mui/material/Rating';


export default function ArchiveCard3 ({
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
        <div className='card__img'></div>
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
                  <h2 style={{ margin: 0 }}>Percy Jackson: The Titan's Curse</h2>
                  <p>Author: Rick Riordan</p>
                  <p>
                  When Percy Jackson gets an urgent distress call from his friend Grover, he immediately prepares for battle. He knows he will need his powerful demigod allies at his side, his trusty bronze sword Riptide, and… a ride from his mom.
                  The demigods rush to the rescue to find that Grover has made an important discovery: two powerful half-bloods whose parentage is unknown. But that’s not all that awaits them. The titan lord Kronos has devised his most treacherous plot yet, and the young heroes have just fallen prey.
                  They’re not the only ones in danger. 
                  </p>
                </div>
              </div>
            </div>
            <button onClick={togglePopup}>Move back to Library</button>
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
