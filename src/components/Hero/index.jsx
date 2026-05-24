import React, { useState } from 'react';

const Hero = ({ p }) => {
  const [ctaHovered, setCtaHovered] = useState(false);

  return (
    <section style={{
      maxWidth: 680, margin: '0 auto', padding: '140px 48px 72px',
      textAlign: 'center',
    }}>
      <div style={{
        fontSize: 13, fontWeight: 600, color: p.accent,
        textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16,
      }}>
        Twitch Extensions
      </div>
      <h1 style={{
        fontSize: 52, fontWeight: 800, color: p.text,
        lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 20,
      }}>
        Tools that enhance your stream
      </h1>
      <p style={{
        fontSize: 18, color: p.textMuted, lineHeight: 1.6,
        maxWidth: 480, margin: '0 auto 36px',
      }}>
        A suite of extensions built for broadcasters who care about their community. Easy to install, free to use.
      </p>
      <a
        href="#extensions"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '14px 28px',
          background: ctaHovered ? p.accentHover : p.accent,
          color: '#fff', border: 'none', borderRadius: 8,
          fontSize: 15, fontWeight: 600, cursor: 'pointer',
          textDecoration: 'none',
          transform: ctaHovered ? 'translateY(-1px)' : 'translateY(0)',
          transition: 'background 0.2s, transform 0.15s',
        }}
        onMouseEnter={() => setCtaHovered(true)}
        onMouseLeave={() => setCtaHovered(false)}
      >
        Browse Extensions
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 3v10m0 0l4-4m-4 4L4 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </section>
  );
};

export default Hero;
