import './NavItem.css';
import { NavItemProps } from './NavItem.props';
import cn from 'classnames';

function NavItem({ text, isOpen, onClick }: NavItemProps) {
  return (
    <li className='block py-2 mx-7 cursor-pointer'>
      <a
        onClick={onClick}
        className={cn(
          'block py-2 mx-7 transition duration-300 ease-in-out',
          'md:text-xs text-xl font-helveticaThin font-thin',
          'sm:hover:text-yellow-600 sm:text-white',
          'text-yellow-600',
          { 'pt-7': isOpen }
        )}
      >
        {text}
      </a>
    </li>
  );
}

export default NavItem;
