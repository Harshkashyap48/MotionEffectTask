import React from 'react';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import './Styles/Features.css';

const Features = () => (
  <div>
    <div className='sectionlasttwo'>
      <h3>An All-Round Plugin With <br/>Powerful Features</h3>
      <p>Whether you're a seasoned web designer or just starting out, Motion Art for <br/>Elementor seamlessly integrates with the Elementor platform, providing you <br/>with a seamless and intuitive experience.</p>
    </div>
    <div className='sectionlast'>
      <div className='sectionlastbox'>
        <img src={img1} alt="Light Weight" />
        <h4>Light Weight</h4>
        <p>Motion Art for Elementor is designed to be lightweight.</p>
      </div>
      <div className='sectionlastbox'>
        <img src={img2} alt="Responsive" />
        <h4>100% Responsive</h4>
        <p>Create a consistent visual experience across all devices.</p>
      </div>
      <div className='sectionlastbox'>
        <img src={img3} alt="User Friendly" />
        <h4>User Friendly Interface</h4>
        <p>Ensure a smooth experience for both applicants and administrators.</p>
      </div>
    </div>
  </div>
);

export default Features;
