import './Logo.css';

import cn from 'classnames';

import { LogoProps } from './Logo.props';

function Logo({ isOpen, onClick, fixed }: LogoProps) {
  return(!isOpen &&
    <div className={cn('flex flex-row cursor-pointer',
      { 'fixed top-10 left-10 z-50' : fixed, }
    )} onClick={onClick}>
      <img src="logo.svg" alt="" />
      <h1 className='header-logo font-helvetica'>BAR</h1>
      <h5 className='number-logo font-helvetica'>121</h5>
    </div>   
  );
}

export default Logo;