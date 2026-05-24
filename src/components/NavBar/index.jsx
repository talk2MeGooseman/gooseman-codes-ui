import React, { useState, useEffect } from 'react';

const PALETTE_KEYS = ['twilight', 'midnight', 'bone'];

const NavBar = ({ p, palette, onPaletteChange }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const nextPalette = () => {
    const idx = PALETTE_KEYS.indexOf(palette);
    onPaletteChange(PALETTE_KEYS[(idx + 1) % PALETTE_KEYS.length]);
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 48px', height: 64,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? p.bg + 'ee' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? `1px solid ${p.border}` : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      <div style={{ fontSize: 18, fontWeight: 700, color: p.text, letterSpacing: '-0.02em' }}>
        gooseman.codes
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
        {['Extensions', 'About', 'Contact'].map(label => (
          <NavLink key={label} href={`#${label.toLowerCase()}`} p={p} label={label} />
        ))}
        <button
          onClick={nextPalette}
          title={`Theme: ${p.name}`}
          style={{
            padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 600,
            border: `1px solid ${p.border}`, background: p.accentSubtle,
            color: p.accent, cursor: 'pointer', letterSpacing: '0.04em',
            transition: 'all 0.2s',
          }}
        >
          {p.name}
        </button>
      </div>
    </nav>
  );
};

const NavLink = ({ href, label, p }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      style={{
        fontSize: 14, color: hovered ? p.text : p.textMuted,
        textDecoration: 'none', fontWeight: 500, cursor: 'pointer',
        transition: 'color 0.2s',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </a>
  );
};

export default NavBar;
