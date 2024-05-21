import React from 'react';
import magic from './images/magic.png';
import arrow from './images/arrow.png';
import './Styles/MagicPart.css';

const MagicPart = () => (
  <div className='magicpart'>
    <div className='magicpartleft'>
      <h3>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</h3>
      <p>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>
      <div className='magicpartleftbutton'>
        <button>Purchase from evanto <img src={arrow} alt="Arrow" /></button>
      </div>
    </div>
    <div className='magicpartright'>
      <img src={magic} alt="Magic" />
    </div>
  </div>
);

export default MagicPart;
