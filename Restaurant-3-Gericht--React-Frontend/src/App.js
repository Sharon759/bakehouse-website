import React from 'react';

import { AboutUs, FindUs, Footer, Intro, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';
import Intro2 from './container/Intro/Intro2';

const App = () => (
  <div>
    <Navbar />
    <Intro2 />
    <AboutUs />
    <Intro />
    <SpecialMenu />
    {/* <Laurels />
    <Gallery /> */}
    <FindUs />
    <Footer />
  </div>
);

export default App;
