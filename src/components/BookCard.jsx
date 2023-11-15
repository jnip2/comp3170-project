import React from 'react'

import '../styles.css'

export default function BookCard({
  title="",
  author="",
  func=() => {}
}) {
  return (
    <div className='card__container' onClick={func()}>
      <div className='card__img'></div> 
      <h3 className='card__title'>{title}</h3>
      <p className='card__author'>By: {author}</p>
    </div>
  )
}
