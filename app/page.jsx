'use client'
import './styles/Globals.scss';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skillset from './components/Skillset/Skillset';
import Projects from './components/Projec/Projects';

import { useState } from 'react';
import Loader from './components/Loader/Loader';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function HomePage () {

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div id='app' >
      <Loader />
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
      <About />
      <Projects />
      <Skillset />
      <Contact />
      <Footer />
    </div>
  )
}
