/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prefer-destructuring */
/* eslint-disable arrow-parens */
import React, { useEffect, useRef, useState } from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => {
  const [isVisible, setIsVisible] = useState({
    contact: false,
    logo: false,
    hours: false,
    copyright: false
  });

  const footerRef = useRef(null);
  const contactRef = useRef(null);
  const logoRef = useRef(null);
  const hoursRef = useRef(null);
  const copyrightRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          
          if (target === contactRef.current) {
            setIsVisible(prev => ({ ...prev, contact: true }));
          } else if (target === logoRef.current) {
            setIsVisible(prev => ({ ...prev, logo: true }));
          } else if (target === hoursRef.current) {
            setIsVisible(prev => ({ ...prev, hours: true }));
          } else if (target === copyrightRef.current) {
            setIsVisible(prev => ({ ...prev, copyright: true }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const refs = [contactRef, logoRef, hoursRef, copyrightRef];
    refs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="app__footer section__padding" id="login" ref={footerRef}>
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links">
        <div 
          ref={contactRef}
          className={`app__footer-links_contact footer-animate ${isVisible.contact ? 'footer-slide-right' : ''}`}
          style={{ animationDelay: '0.2s' }}
        >
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">456 Bakery Street, Mumbai, MH 400001</p>
          <p className="p__opensans">+91 22-1234-5678</p>
          <p className="p__opensans">info@channel9bakery.com</p>
        </div>

        <div 
          ref={logoRef}
          className={`app__footer-links_logo footer-animate ${isVisible.logo ? 'footer-scale-in' : ''}`}
          style={{ animationDelay: '0.3s' }}
        >
          {/* <img src={images.channel9} alt="footer_logo" /> */}
          <p className="p__opensans">&quot;Baked with love, served with a smile. Channel9 - Where every bite tells a story.&quot;</p>
          <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>

        <div 
          ref={hoursRef}
          className={`app__footer-links_work footer-animate ${isVisible.hours ? 'footer-slide-left' : ''}`}
          style={{ animationDelay: '0.4s' }}
        >
          <h1 className="app__footer-headtext">Bakery Hours</h1>
          <p className="p__opensans">Monday-Saturday:</p>
          <p className="p__opensans">07:00 am - 09:00 pm</p>
          <p className="p__opensans">Sunday:</p>
          <p className="p__opensans">08:00 am - 08:00 pm</p>
        </div>
      </div>

      <div 
        ref={copyrightRef}
        className={`footer__copyright footer-animate ${isVisible.copyright ? 'footer-fade-in' : ''}`}
        style={{ animationDelay: '0.5s' }}
      >
        <p className="p__opensans">2025 Channel9 Bakery by KodeAndCo. All Rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;