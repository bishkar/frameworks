import { InfoFooterContainerProps } from './InfoFooterContainer.props';


function InfoFooterContainer({ children }: InfoFooterContainerProps) {
  return (
    <ul className='my-5'>
      {children}
    </ul>
  );
}

export default InfoFooterContainer;