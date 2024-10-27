import './InfoContainer.css';

import { InfoContainerProps } from './InfoContainer.props';

function InfoContainer({ children }: InfoContainerProps) {
  return (
    <div className='bg-black-90'>
      <div className='sm:px-36 px-5 py-12 sm:my-10 my-0'>
        {children}
      </div>
      <hr className='w-full'/>
      <h1 className='sm:text-xs text-sm p-6 flex justify-center'>© 2035 by Bar 121. Powered and secured by Bishkar</h1>
    </div>
  );
}

export default InfoContainer;