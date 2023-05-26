import React from 'react'
import social from '../../ASSETS/social.png'
import './Footer2.css'

const Footer2 = () => {
  return (
    <div className='footer'>
      <div className='footerin2'>
        <h3>© Copyright 2023 Soham Kale, Inc.  All rights reserved</h3>
        <span><img src={social} alt='social' className='social' /></span> 
      </div>
    </div>
  )
}

export default Footer2