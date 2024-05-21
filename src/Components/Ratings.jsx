import React from 'react';
import ratingimg1 from './images/rating1.png';
import ratingimg2 from './images/rating2.png';
import ratingimg3 from './images/rating3.png';
import starimg from './images/star.png';
import './Styles/Ratings.css';

const Ratings = () => (
  <div className='rating'>
    <div>
      <h2>Trusted by thousands of users around the world</h2>
    </div>
    <div className='starhandle'>
      <div className='stars'>
        <div><img src={ratingimg1} alt="Rating 1" /></div>
        <div>
          <img src={starimg} alt="Star" />
          <p>4.5 Score, 9 Reviews</p>
        </div>
      </div>
      <div className='stars'>
        <div><img src={ratingimg2} alt="Rating 2" /></div>
        <div>
          <img src={starimg} alt="Star" />
          <p>4.5 Score, 9 Reviews</p>
        </div>
      </div>
      <div className='stars'>
        <div><img src={ratingimg3} alt="Rating 3" /></div>
        <div>
          <img src={starimg} alt="Star" />
          <p>4.5 Score, 9 Reviews</p>
        </div>
      </div>
    </div>
  </div>
);

export default Ratings;
