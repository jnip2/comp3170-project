import { useState } from 'react';
import BookImage from './wk3.jpg';
import Rating from '@mui/material/Rating';


export default function Book3({
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
                                    <h2 style={{ margin: 0 }}>Diary of a Wimpy Kid: The Last Straw</h2>
                                    <p>Author: Rick Riordan</p>
                                    <p>
                                        You see, Frank Heffley actually thinks he can get his son to toughen up, and he enlists Greg in organized sports and other “manly” endeavors. Of course, Greg is able to easily sidestep his father’s efforts to change him. But when Greg’s dad threatens to send him to military academy, Greg realizes he has to shape up . . . or get shipped out.
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
