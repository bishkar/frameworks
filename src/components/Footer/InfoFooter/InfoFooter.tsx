import './InfoFooter.css';

import { InfoFooterProps } from './InfoFooter.props';

function InfoFooter({ children }: InfoFooterProps) {
  return (
    <footer className="footer">
      {children}
    </footer>
  );
}

export default InfoFooter;