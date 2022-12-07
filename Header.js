import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='header'>
        <Link to='/'>
        <img className='header__icon'
        src='https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Florida_Gators_gator_logo.svg/1200px-Florida_Gators_gator_logo.svg.png'
        alt='' />
        </Link>

        <div className='header__center'>
            <h1>AirBnBeast</h1>
          
        </div>
        <div className='header__right'>
            <p>Final Group Project</p>
   
        </div>
    </div>
  )
}

export default Header