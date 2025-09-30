/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable no-lonely-if */
import React from 'react';

import { meal } from '../../constants';


const Intro = () => {
  const vidRef = React.useRef();
  const containerRef = React.useRef();

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
    <div className="app__video" ref={containerRef}>
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
    </div>
  );
};

export default Intro;