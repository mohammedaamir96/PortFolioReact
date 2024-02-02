import React from 'react'
import './Header.css';
import myPhoto from '../../Photo.JPG';

const Header = () => {
  return (
    <header>
        <img src={myPhoto} alt="Mohammed Aamir S R" class="header-image"></img>
        <h1>Mohammed Aamir S R</h1>
        <p>Software Developer</p>
    </header>
  )
}

export default Header