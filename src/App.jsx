import React, { useState, useEffect } from 'react';
import PALETTES from './styles/palettes';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ExtensionsGrid from './components/ExtensionsGrid';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {
  const [palette, setPalette] = useState('midnight');
  const p = PALETTES[palette];

  useEffect(() => {
    document.body.style.backgroundColor = p.bg;
    document.body.style.color = p.text;
  }, [p]);

  return (
    <div style={{ minHeight: '100vh', background: p.bg, transition: 'background 0.4s ease' }}>
      <NavBar p={p} palette={palette} onPaletteChange={setPalette} />
      <Hero p={p} />
      <ExtensionsGrid p={p} />
      <About p={p} />
      <Footer p={p} />
    </div>
  );
};

export default App;
