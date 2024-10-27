import './Banner.css';

import { BannerProps } from './Banner.props';

function Banner({ children }: BannerProps) {
  const apiStreet = import.meta.env.VITE_STREET;
  const apiCity = import.meta.env.VITE_CITY;

  return(
    <div className='rect flex items-center flex-col mx-auto'>
      <img src="logo.svg" alt="" className='pt-8' />
      <h5 className='text-xl pt-6 font-helvetica'>121</h5>
      <h5 className='text-9xl pt-8 font-helveticaBold font-extralight'>BAR</h5>
      <h5 className='text-xl pt-6 pb-6 font-helvetica'>Local Bar with Live Music</h5>

      {children}
      <hr className='w-1/2 mt-16'/>
      <h5 className='text-xs py-8 font-helvetica'>{apiStreet} {apiCity}</h5>
    </div>
  );
}

export default Banner;