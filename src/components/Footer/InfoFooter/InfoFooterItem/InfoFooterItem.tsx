import { InfoFooterItemProps } from './InfoFooterItem.props';


function InfoFooterItem({ text, onClick }: InfoFooterItemProps) {
  return (
    <li onClick={onClick} className='cursor-pointer'>
      <a className='text-xs'>{text}</a>
    </li>
  );
}

export default InfoFooterItem;