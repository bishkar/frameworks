import React from 'react';
import cn from 'classnames';
import './Advertisment.css';
import { AdvertismentProps } from './Advertisment.props';

function Advertisment({ children, title, event, date, time, img, reverse = false }: AdvertismentProps) {
  const Logo = React.Children.toArray(children)[0];
  const Button = React.Children.toArray(children)[1];

  return (
    <>
      <div className='mb-24'>
        {Logo}
      </div>
      <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-36 gap-12'>
        <img src={img} alt="" className={cn(
          'max-w-full',
          { 'sm:order-1': reverse },
        )} />
        <div className='my-auto'>
          <h5 className='text-lg font-helvetica'>{title}</h5>
          <h5 className='text-2xl font-helveticaBold py-6'>{event}</h5>
          <div className='pb-5'>
            <h5 className='text-xs font-helveticaThin'>{date}</h5>
            <h5 className='text-xs font-helveticaThin'>{time}</h5>
          </div>
          {Button}
        </div>
      </div>
    </>
  );
}

export default Advertisment;
