import { useState } from 'react';
import LeftPanel from './assets/components/LeftPanel/LeftPanel';
import RightPanel from './assets/components/RightPanel/RightPanel';

import './App.css';

function App() {
  const buttons = [
    { id: 1, text: 'Triangle', type: 'triangle' },
    { id: 2, text: 'Square', type: 'square' },
  ];

  const [fractalType, setFractalType] = useState('');

  const handleButtonClick = (type) => {
    setFractalType(type);
  };

  return (
    <div className="container">
      <LeftPanel buttons={buttons} onButtonClick={handleButtonClick} />
      <hr />
      <RightPanel type={fractalType} />
    </div>
  );
}

export default App;
