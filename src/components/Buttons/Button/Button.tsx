import './Button.css';
import { ButtonProps } from './Button.props';

function Button({ text, onClick }: ButtonProps) {
  return(
    <button className='
                       transition duration-300 ease-in-out
                       border border-solid border-white
                     hover:bg-white hover:text-black px-6 py-2' 
    onClick={onClick}
    >
      <span className='font-helveticaThin font-normal'>
        {text}
      </span>
    </button>
  );
}

export default Button;