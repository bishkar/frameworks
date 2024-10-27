import { useEffect, useState } from 'react';
import cn from 'classnames';
import { BackToTopProps } from './BackToTopProps';

function BackToTop({ onClick }: BackToTopProps){
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      type='button'
      onClick={onClick}
      className={cn(
        '!fixed bottom-5 right-5 rounded-full bg-red-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-red-700 focus:bg-red-700 focus:outline-none active:bg-red-800',
        { hidden: !visible }
      )}
      id='btn-back-to-top'>
      <span className='[&>svg]:w-4'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='3'
          stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18' />
        </svg>
      </span>
    </button>
  );
}

export default BackToTop;