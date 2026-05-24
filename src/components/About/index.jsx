import React from 'react';

const About = ({ p }) => (
  <section id="about" style={{
    padding: '56px 48px',
    maxWidth: 900, margin: '0 auto',
    borderTop: `1px solid ${p.border}`,
  }}>
    <div style={{
      fontSize: 13, fontWeight: 600, color: p.accent,
      textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 24,
    }}>
      About
    </div>
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <div style={{
        width: 72, height: 72, borderRadius: '50%',
        background: p.accentSubtle, border: `2px solid ${p.border}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 22, fontWeight: 700, color: p.accent, flexShrink: 0,
      }}>
        EG
      </div>
      <div>
        <div style={{ fontSize: 18, fontWeight: 700, color: p.text, marginBottom: 4 }}>
          Erik Guzman
        </div>
        <div style={{ fontSize: 15, color: p.textMuted, lineHeight: 1.6 }}>
          Senior Software Developer building tools that make Twitch better for streamers and their communities. Focused on accessibility, developer experience, and open source.
        </div>
      </div>
    </div>
  </section>
);

export default About;
