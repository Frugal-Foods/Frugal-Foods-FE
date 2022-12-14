import React from 'react'
import { Link } from 'react-router-dom';
import "./Footer.css";

export const Footer = () => {
  return (
    <div className='footer'>
      <p>© Frugal Foods 2022</p>
      <p>Creators GitHubs · <a target="_blank" href='https://github.com/forsethnico' className='creators'>Nicole Forseth</a> · <a target="_blank" href='https://github.com/dsweeny1' className='creators'>Danielle Sweeny</a> · <a target="_blank" href='https://github.com/coopercodex' className='creators'>Derek Cooper</a></p>
    </div>
  )
}
