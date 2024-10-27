import './Galery.css';

import { GaleryProps } from './Galery.props';

function Galery({children, images}: GaleryProps) {
  return (
    <>
      <div className='my-20 flex justify-center'>
        {children}
      </div>
      <div className="grid sm:grid-cols-4 grid-cols-2 gap-2">
        <div className='col-span-2'>
          <img src={images[0].src} alt={images[0].alt} className='hover:scale-110 duration-300'/>
        </div>
        <div className='grid grid-rows-2 gap-2'>
          <img src={images[1].src} alt={images[1].alt} className='hover:scale-110 duration-300'/>
          <img src={images[2].src} alt={images[2].alt} className='hover:scale-110 duration-300'/>
        </div>
        <div className='grid grid-rows-2 gap-2'>
          <img src={images[3].src} alt={images[3].alt} className='hover:scale-110 duration-300'/>
          <img src={images[4].src} alt={images[4].alt} className='hover:scale-110 duration-300'/>
        </div>
      </div>
    </>
  );
}

export default Galery;