import './App.css';

import cn from 'classnames';
import { useCallback, useRef, useState } from 'react';


import Logo from './components/Navbar/Logo/Logo';
import ApadtiveMenu from './components/Navbar/ApadtiveMenu/ApadtiveMenu';
import NavItem from './components/Navbar/NavItem/NavItem';

import Banner from './components/Banner/Banner';
import Button from './components/Buttons/Button/Button';

import About from './components/Info/About/About';
import Header from './components/Info/Header/Header';
import InfoContainer from './components/Info/InfoContainer/InfoContainer';
import Advertisment from './components/Info/Advertisment/Advertisment';
import BackToTop from './components/BackToTop/BackToTop';
import Galery from './components/Info/Galery/Galery';
import Reservation from './components/Info/Reservation/Reservation/Reservation';
import Navbar from './components/Navbar/Navbar/Navbar';
import NavbarContainer from './components/Navbar/NavbarContainer/NavbarContainer';

import FooterContainer from './components/Footer/FooterContainer/FooterContainer';
import InfoFooter from './components/Footer/InfoFooter/InfoFooter';
import InfoFooterContainer from './components/Footer/InfoFooter/InfoFooterContainer/InfoFooterContainer';
import InfoFooterItem from './components/Footer/InfoFooter/InfoFooterItem/InfoFooterItem';
import ContactFooter from './components/Footer/ContactFooter/ContactFooter';
import ScheduleFooter from './components/Footer/ScheduleFooter/ScheduleFooter';
import FormFooter from './components/Footer/FormFooter/FormFooter';

const loadImages = () => {
  return [
    { 'src': 'photoes/1.jpg', 'alt': '1' }, { 'src': 'photoes/2.jpg', 'alt': '2' }, { 'src': 'photoes/3.jpg', 'alt': '3' }, { 'src': 'photoes/4.jpg', 'alt': '4' }, { 'src': 'photoes/5.jpg', 'alt': '5' }
  ];
};

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const regRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const toggleMenu = () => {
    if (!isOpen) {
      scrollToTop();
    }
    setIsOpen(!isOpen);
  };

  const scrollToReg = () => {
    regRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={cn('bg-cover bg-center h-screen', { 
      'bg-black bg-image' : isOpen,
      'bg-cocktail' : !isOpen,
    })}>
      <BackToTop onClick={scrollToTop}/>

      <Navbar>
        <Logo isOpen={isOpen} onClick={scrollToTop} fixed/>
        <ApadtiveMenu toggleMenu={toggleMenu} isOpen={isOpen} />
        <NavbarContainer isOpen={isOpen}>
          <NavItem text="What's On" isOpen={isOpen} onClick={scrollToAbout}/>
          <NavItem text="Menu" isOpen={isOpen}/>
          <NavItem text="Book a Table" isOpen={isOpen} onClick={scrollToReg}/>
          <NavItem text="Contact" isOpen={isOpen} onClick={scrollToFooter}/>
        </NavbarContainer>
      </Navbar>
      <>
        <Banner>
          <Button text="Book a Table" onClick={scrollToReg}/>
        </Banner>
        <InfoContainer>
          <hr className='sm:w-0 w-full h1 sm:mb-0 mb-12'/>
          <About ref={aboutRef}>
            <Header text="About"/>
          </About>
          <hr className='sm:w-full w-0 h1 sm:mb-12 mb-0'/>

          <Advertisment
            title="Happy Hour"
            event="50% on all cocktails"
            date="Monday to Thursday"
            time="3pm-6pm"
            img="cocktails.jpg"
            reverse={false}
          >
            <Header text="What's on"/>
            <Button text="Book a Table" onClick={scrollToReg}/>
          </Advertisment>
          <Advertisment
            title="Friday Night Live"
            event="Taylor Rees"
            date="January 1st, 2035"
            time="8pm"
            img="tailor.jpeg"
            reverse={true}
          >
            <Header text=""></Header>
            <Button text="Book a Table" onClick={scrollToReg}/>
          </Advertisment>

          <Galery
            images={loadImages()}
          >
            <Header text="Come Down & Grab a Pint"/>
          </Galery>

          <Reservation ref={regRef}>
            <Header text="Reserve a Table"/>
          </Reservation>

          <FooterContainer ref={footerRef}>
            <InfoFooter>
              <Logo isOpen={false} onClick={scrollToTop}/>
              <InfoFooterContainer>
                <InfoFooterItem text="What's On" onClick={scrollToAbout}/>
                <InfoFooterItem text="Menu" />
                <InfoFooterItem text="Reserve a Table" onClick={scrollToReg}/>
                <InfoFooterItem text="Contact" />
              </InfoFooterContainer>
            </InfoFooter>
            <ContactFooter />
            <FormFooter />
            <ScheduleFooter />
          </FooterContainer>
        </InfoContainer>
      </>
    </div>
  );
}

export default App;