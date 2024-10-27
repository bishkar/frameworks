import './LeftPanel.css';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import {v4 as uuidv4} from 'uuid';

function LeftPanel({ buttons, onButtonClick }) {
  return (
    <div className='left-panel'>
      <Logo />
      {buttons.map((button) => (
        <div key={uuidv4()} onClick={() => onButtonClick(button.type)}>
          <Button
            text={button.text}
          />
        </div>
      ))}
    </div>
  );
}

export default LeftPanel;
