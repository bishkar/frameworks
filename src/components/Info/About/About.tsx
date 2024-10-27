import './About.css';

import { forwardRef } from 'react';

import { AboutProps } from './About.props';

const About = forwardRef<HTMLDivElement, AboutProps>(({ children }, ref) =>{
  return (
    <div className='grid sm:grid-cols-3 grid-cols-1 mb-16' ref={ref}>
      <div className='grid grid-rows-2 gap-3'>
        {children}
        <div className='text-lg font-helvetica'>Your Neighbourhood Institution</div>
      </div>
      <div className='text-base font-helvetica font-extralight'>
        Welcome to our website! We are dedicated to providing exceptional service and quality products to meet your needs. 
        Our team is passionate about delivering innovative solutions and outstanding customer support. 
      </div>
    </div>
  );
});

export default About;