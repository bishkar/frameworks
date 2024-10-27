import './Header.css';

import { HeaderProps } from './Header.props';

function Header({ text }: HeaderProps) {
  return(
    <h1 className='text-5xl font-helveticaBold'>{text}</h1>
  );
}

export default Header;