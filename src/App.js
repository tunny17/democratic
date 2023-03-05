import React, { useRef } from 'react';
import './App.css';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { Body, Footer, Hero, Navbar } from './components'


function App() {
  const containerRef = useRef(null)

  return (
    <LocomotiveScrollProvider
      options={
        {
          smooth: true,
        }
      }
      watch={
        []
      }
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        <Navbar />
        <Hero />
        <Body />
        <Footer />
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
