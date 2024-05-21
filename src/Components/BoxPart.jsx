import React from 'react';
import sectionimg from './images/section.png';
import pageimg from './images/page.png';
import './Styles/BoxPart.css';

const BoxPart = () => (
  <div className='boxpart'>
    <h3>Apply On Any Section Or Enable <br/>For Whole Page</h3>
    <div className='mainbox'>
      <div className='boxleft'>
        <h4>Apply On Section</h4>
        <p>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.</p>
        <img src={sectionimg} alt="Section" />
      </div>
      <div className='boxright'>
        <h4>Apply On Page</h4>
        <p>Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</p>
        <img src={pageimg} alt="Page" />
      </div>
    </div>
  </div>
);

export default BoxPart;
