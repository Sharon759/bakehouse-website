import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';
import Intro2 from './container/Intro/Intro2';

const App = () => (
  <div>
    <Navbar />
    <Intro2 />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
