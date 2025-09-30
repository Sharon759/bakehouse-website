/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-duplicates */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable no-lonely-if */
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Intro.css';
import { meal } from '../../constants';
import { SubHeading, MenuItem } from '../../components';
import { data } from '../../constants';

const Intro2 = () => {
  const vidRef = React.useRef();
  const containerRef = React.useRef();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 0, 0]);
  const videoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.6, 0.4]);
  const videoY = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, -50]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5, 1], [0, 20, 30]);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (vidRef.current) {
              vidRef.current.play();
            }
          } else {
            if (vidRef.current) {
              vidRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="app__video-container" ref={containerRef} style={{ height: '200vh', background: 'var(--color-black)' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-black)' }}>
        <motion.div
          style={{
            scale: videoScale,
            y: videoY,
            borderRadius,
            overflow: 'hidden',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <video
            ref={vidRef}
            src={meal}
            type="video/mp4"
            loop
            controls={false}
            muted
            className="app__video-background"
          />
        </motion.div>
        
        <motion.div 
          className="app__video-overlay"
          style={{ opacity: textOpacity }}
        >
          <div className="app__specialMenu flex__center section__padding menu-overlay-container" id="menu" style={{ background: 'transparent', width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
            <motion.div 
              className="app__specialMenu-title"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <SubHeading title="Freshly Baked Every Morning" />
              <h1 className="headtext__cormorant" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: '1.2' }}>Channel9's Signature Delights</h1>
            </motion.div>

            <motion.div 
              className="app__specialMenu-menu"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              style={{ width: '100%', maxWidth: '1400px' }}
            >
              <motion.div 
                className="app__specialMenu-menu_wine flex__center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="app__specialMenu-menu_heading">Breads & Pastries</p>
                <div className="app__specialMenu_menu_items">
                  {data.wines.map((wine, index) => (
                    <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="app__specialMenu-menu_cocktails flex__center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="app__specialMenu-menu_heading">Cakes & Desserts</p>
                <div className="app__specialMenu_menu_items">
                  {data.cocktails.map((cocktail, index) => (
                    <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              style={{ marginTop: 15 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.button 
                type="button" 
                className="custom__button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Full Menu
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Intro2;