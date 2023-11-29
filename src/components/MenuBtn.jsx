import React, { useState, useEffect } from 'react';
import '../styles.css';

export default function MenuBtn() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
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
        <p>Library Archive</p>
      </div>
    </div>
  );
}
