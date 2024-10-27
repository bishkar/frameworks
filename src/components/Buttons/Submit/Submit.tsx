import './Submit.css';
import { SubmitProps } from './Submit.props';

function Submit({ text }: SubmitProps) {
  return(
    <button type="submit" className='sm:w-auto w-full
                     transition duration-300 ease-in-out
                     border border-solid border-yellow-600 text-black bg-yellow-600
                   hover:bg-black hover:text-yellow-600 
                     px-6 pb-1' 
    >
      <span className='font-helveticaThin sm:text-xs text-lg'>
        {text}
      </span>
    </button>
  );
}

export default Submit;