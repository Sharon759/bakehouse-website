/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable no-lonely-if */
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Intro.css';
import { homevideo1 } from '../../constants';
import { SubHeading } from '../../components';

const Intro2 = () => {
  const vidRef = React.useRef();
  const containerRef = React.useRef();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);

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
    <div className="app__video-container" ref={containerRef}>
      <motion.video
        ref={vidRef}
        src={homevideo1}
        type="video/mp4"
        loop
        controls={false}
        muted
        className="app__video-background"
        style={{ scale }}
      />
      <motion.div 
        className="app__video-overlay"
        style={{ opacity }}
      >
        <div className="app__header app__wrapper section__padding" id="home">
          <motion.div 
            className="app__wrapper_info"
            style={{ y }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <SubHeading title="Chase the new flavour" />
            </motion.div>
            
            <motion.h1 
              className="app__header-h1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              The Key To Fine Dining
            </motion.h1>
            
            <motion.p 
              className="p__opensans" 
              style={{ margin: '2rem 0' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus
            </motion.p>
            
            <motion.button 
              type="button" 
              className="custom__button"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Menu
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Intro2;