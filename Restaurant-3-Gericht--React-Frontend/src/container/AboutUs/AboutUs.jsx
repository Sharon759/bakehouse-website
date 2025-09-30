/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => {
  const containerRef = useRef(null);
  
  // Set up scroll tracking for parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const yOverlay = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yKnife = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1]
      }
    }
  };

  const knifeVariants = {
    hidden: { opacity: 0, rotate: -45, scale: 0.5 },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.34, 1.56, 0.64, 1],
        delay: 0.3
      }
    }
  };

  return (
    <div 
      ref={containerRef}
      className="app__aboutus app__bg flex__center section__padding" 
      id="about"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Parallax Overlay */}
      <motion.div 
        className="app__aboutus-overlay flex__center"
        style={{ y: yOverlay }}
      >
        <motion.img 
          src={images.G} 
          alt="G_overlay"
          style={{ scale }}
        />
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="app__aboutus-content flex__center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* About Us Section */}
        <motion.div 
          className="app__aboutus-content_about"
          variants={itemVariants}
        >
          <motion.h1 
            className="headtext__cormorant"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            About Us
          </motion.h1>
          
          <motion.img 
            src={images.spoon} 
            alt="about_spoon" 
            className="spoon__img"
            initial={{ opacity: 0, rotate: -180 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          
          <motion.p 
            className="p__opensans"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
          </motion.p>
          
          <motion.button 
            type="button" 
            className="custom__button"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            Know More
          </motion.button>
        </motion.div>

        {/* Knife Section with Parallax */}
        
        <motion.div 
          className="app__aboutus-content_knife flex__center"
          variants={knifeVariants}
          style={{ y: yKnife }}
        >
          <motion.img 
            src={images.knife} 
            alt="about_knife"
            whileHover={{ 
              rotate: [0, -5, 5, -5, 0],
              transition: { duration: 0.5 }
            }}
          />
        </motion.div>

        {/* History Section */}
        <motion.div 
          className="app__aboutus-content_history"
          variants={itemVariants}
        >
          <motion.h1 
            className="headtext__cormorant"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our History
          </motion.h1>
          
          <motion.img 
            src={images.spoon} 
            alt="about_spoon" 
            className="spoon__img"
            initial={{ opacity: 0, rotate: 180 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          
          <motion.p 
            className="p__opensans"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.
          </motion.p>
          
          <motion.button 
            type="button" 
            className="custom__button"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            Know More
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;