import cn from 'classnames';

import { AdaptiveMenuProps } from './AdaptiveMenu.props';

function AdaptiveMenu({ toggleMenu, isOpen }: AdaptiveMenuProps) {
  return (
    <button
      onClick={toggleMenu}
      type="button"
      className={cn(
        'fixed top-10 right-10 ml-auto inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-orange-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-orange-200 dark:text-orange-400 dark:focus:ring-white transition-colors duration-300 ease-in-out',
      )}
      aria-controls="navbar-default"
      aria-expanded={isOpen}
    >
      <svg
        className="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <line
          className={cn(
            'transition-transform duration-300 ease-in-out text-white'
          )}
          x1="4"
          y1="6"
          x2="20"
          y2={ !isOpen ? '6' : '20' }
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          className={cn(
            'text-white',
            { 'opacity-0': isOpen }
          )}
          x1="4"
          y1="12"
          x2="20"
          y2="12"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          className={cn(
            'transition-transform duration-300 ease-in-out text-white'
          )}
          x1="4"
          y1="20"
          x2="20"
          y2={ !isOpen ? '20' : '6' }
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default AdaptiveMenu;
