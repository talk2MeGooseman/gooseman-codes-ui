import React from 'react';

const About = ({ p }) => (
  <section id="about" aria-label="About" style={{
    padding: '56px 48px',
    maxWidth: 900, margin: '0 auto',
    borderTop: `1px solid ${p.border}`,
  }}>
    <div style={{
      fontSize: 13, fontWeight: 600, color: p.accent,
      textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 24,
    }}>
      Who Am I?
    </div>
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <img
        src="/images/me.png"
        alt="Erik Guzman"
        style={{
          width: 72, height: 72, borderRadius: '50%',
          border: `2px solid ${p.border}`,
          objectFit: 'cover', flexShrink: 0,
        }}
      />
      <div>
        <div style={{ fontSize: 18, fontWeight: 700, color: p.text, marginBottom: 4 }}>
          Erik Guzman - talk2MeGooseman
        </div>
        <div style={{ fontSize: 15, color: p.textMuted, lineHeight: 1.6 }}>
          A Staff Engineer and Twitch stream lurker building tools that make Twitch better for streamers and their communities in my free time. Focused on accessibility, developer experience, and open source.
        </div>
      </div>
    </div>
  </section>
);

export default About;
