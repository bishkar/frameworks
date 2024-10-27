
import './Navbar.css';
import cn from 'classnames';
import { NavbarProps } from './Navbar.props';

function Navbar({ children }: NavbarProps) {
  return (
    <nav>
      <div className={cn(
        'max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-6 sm:px-0 px-4 sm:mb-0 mb-36',
      )}>
        {children}
      </div>
    </nav>
  );
}

export default Navbar;