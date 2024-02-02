import React from 'react'
import './Footer.css';

const Footer = () => {
    const year = new Date();
  return (
    <footer>
        <p>&copy; {year.getFullYear()} Mohammed Aamir S R - Software Developer</p>
    </footer>
  )
}

export default Footer