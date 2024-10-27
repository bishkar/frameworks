import './FooterContainer.css';

import { forwardRef } from 'react';
import { FooterContainerProps } from './FooterContainer.props';

const FooterContainer = forwardRef<HTMLDivElement, FooterContainerProps>(({ children }, ref) => {
  return (
    <div ref={ref} className='grid sm:grid-cols-4 grid-cols-1 gap-12'>
      {children}
    </div>
  );
});

export default FooterContainer;