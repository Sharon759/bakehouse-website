/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */
/* eslint-disable no-lonely-if */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const vidRef = React.useRef();
  const containerRef = React.useRef();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.9]);

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
    <motion.div 
      className="app__video" 
      ref={containerRef}
      style={{ opacity }}
    >
      <motion.video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
        style={{ y, scale }}
      />
    </motion.div>
  );
};

export default Intro;