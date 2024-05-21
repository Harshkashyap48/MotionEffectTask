import React from 'react';
import chrome from './images/chrome.png';
import './Styles/SupportedBrowsers.css';

const SupportedBrowsers = () => (
  <div className='sectionlastone'>
    <h3>Supported by All Popular Browsers</h3>
    <p>Rest assured, Motion Art is designed to be compatible <br/> with all major web browsers.</p>
    <img src={chrome} alt="Chrome" />
  </div>
);

export default SupportedBrowsers;
