import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

export default function MenuBtn() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLibraryArchiveClick = () => {
    navigate('./archive');
  };

  const handleLibraryClick = () => {
    navigate('.');
  };

  useEffect(() => {
    const closeNavOnClickOutside = (event) => {
      if (isNavOpen && !event.target.closest('.menu__container') && !event.target.closest('.horizontal__nav')) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener('click', closeNavOnClickOutside);

    return () => {
      document.removeEventListener('click', closeNavOnClickOutside);
    };
  }, [isNavOpen]);

  return (
    <div>
      <div className={`menu__container ${isNavOpen ? 'active' : ''}`} onClick={toggleNav}>
        <div className='menu__bar'></div>
        <div className='menu__bar'></div>
        <div className='menu__bar'></div>
      </div>

      <div className={`horizontal__nav ${isNavOpen ? 'open' : ''}`}>
        <p onClick={handleLibraryArchiveClick}>Library Archive</p>
        <p onClick={handleLibraryClick}>Library</p>
      </div>
    </div>
  );
}
