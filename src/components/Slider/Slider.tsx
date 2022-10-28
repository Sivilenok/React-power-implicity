import React from 'react';
import './slider.scss';

export const Slider = () => {
  return (
    <div className='slider'>
      <div className='slider__title'>
      The Power of Simplicity
      </div>

      <div className='slider__text'>
      Instead of spending time searching for the right app, our AI will bring the right app to you.
      </div>

      <button className='slider__btn'>
        Learn
      </button>

      <div className='slider__dots-spisok'>
        <ul className='slider__dots'>
          <li className='slider__dot'></li>
          <li className='slider__dot'></li>
          <li className='slider__dot slider__dot--active'></li>
          <li className='slider__dot'></li>
          <li className='slider__dot'></li>
        </ul>
      </div>
    </div>
  )
}
