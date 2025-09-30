/* eslint-disable eol-last */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => {
  const containerRef = useRef(null);
  
  // Set up scroll tracking for parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const yImage = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.9]);
  const rotateImage = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1]
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.34, 1.56, 0.64, 1]
      }
    }
  };

  return (
    <div 
      ref={containerRef}
      className="app__bg app__wrapper section__padding" 
      id="contact"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <motion.div 
        className="app__wrapper_info"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants}>
          <SubHeading title="Contact" />
        </motion.div>

        <motion.h1 
          className="headtext__cormorant" 
          style={{ marginBottom: '3rem' }}
          variants={itemVariants}
        >
          Find Us
        </motion.h1>

        <motion.div 
          className="app__wrapper-content"
          variants={containerVariants}
        >
          <motion.p 
            className="p__opensans"
            variants={itemVariants}
          >
            Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
          </motion.p>

          <motion.p 
            className="p__cormorant" 
            style={{ color: '#DCCA87', margin: '2rem 0' }}
            variants={itemVariants}
          >
            Opening Hours
          </motion.p>

          <motion.p 
            className="p__opensans"
            variants={itemVariants}
          >
            Mon - Fri: 10:00 am - 02:00 am
          </motion.p>

          <motion.p 
            className="p__opensans"
            variants={itemVariants}
          >
            Sat - Sun: 10:00 am - 03:00 am
          </motion.p>
        </motion.div>

        <motion.button 
          type="button" 
          className="custom__button" 
          style={{ marginTop: '2rem' }}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(220, 202, 135, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          Visit Us
        </motion.button>
      </motion.div>

      {/* Image with Parallax */}
      <motion.div 
        className="app__wrapper_img"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{ 
          y: yImage,
          position: 'relative'
        }}
      >
        <motion.img 
          src={images.findus} 
          alt="findus_img"
          style={{ 
            scale,
            rotate: rotateImage
          }}
          whileHover={{
            scale: 1.1,
            rotate: 0,
            transition: { duration: 0.4 }
          }}
        />
      </motion.div>
    </div>
  );
};

export default FindUs;