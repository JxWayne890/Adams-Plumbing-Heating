import React, { useState, useEffect } from 'react';
    import { Routes, Route } from 'react-router-dom';
    import { Link, animateScroll as scroll } from 'react-scroll';
    import Home from './components/Home';

    function App() {
      const [isSticky, setIsSticky] = useState(false);
      const [navContent, setNavContent] = useState({ logo: true, phone: true });

      useEffect(() => {
        const handleScroll = () => {
          const headerHeight = document.querySelector('header').offsetHeight;
          setIsSticky(window.scrollY > headerHeight);

          if (window.scrollY > headerHeight) {
            setNavContent({ logo: false, phone: false });
          } else {
            setNavContent({ logo: true, phone: true });
          }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      return (
        <div>
          <header>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="logo" style={{ opacity: navContent.logo ? 1 : 0, transition: 'opacity 0.5s ease', fontSize: '2.2em', whiteSpace: 'nowrap', textAlign: 'left', marginRight: 'auto' }}>Adams Plumbing & Heating</div>
              <div className="phone" style={{ opacity: navContent.phone ? 1 : 0, transition: 'opacity 0.5s ease', fontSize: '1.4em', textAlign: 'right', marginLeft: 'auto' }}>(325) 677-6322</div>
            </div>
          </header>
          <nav className={isSticky ? 'sticky' : ''}>
            <div className="nav-content">
              <Link to="home" smooth={true} duration={500}>Home</Link>
              <Link to="about" smooth={true} duration={500}>About Us</Link>
              <Link to="services" smooth={true} duration={500}>Services</Link>
              <Link to="contact" smooth={true} duration={500}>Contact Us</Link>
              <div className="nav-logo" style={{ opacity: isSticky ? 1 : 0, transition: 'opacity 0.5s ease', fontSize: '1.5em', whiteSpace: 'nowrap', marginRight: 'auto' }}>Adams Plumbing & Heating</div>
              <div className="nav-phone" style={{ opacity: isSticky ? 1 : 0, transition: 'opacity 0.5s ease', fontSize: '1.2em', marginLeft: 'auto' }}>(325) 677-6322</div>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <footer>
            <p>&copy; 2023 Adams Plumbing & Heating. All rights reserved.</p>
          </footer>
        </div>
      );
    }

    export default App;
