import React from 'react'
import MenuBtn from './MenuBtn'

import '../styles.css'

export default function NavBar() {
  return (
    <div className='nav__container'>
        <MenuBtn />
        <h1 className='nav__title'>BookNest</h1>
    </div>
  )
}
