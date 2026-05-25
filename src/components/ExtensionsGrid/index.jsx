import React, { useState } from 'react';

const EXTENSIONS = [
  {
    name: 'Stream Closed Captioner',
    desc: 'Easily provide closed captioning for your viewers. Install the extension, open the companion web app, and click "On" — accessibility made simple.',
    tags: ['Accessibility', 'Twitch Extension'],
    link: 'https://stream-cc.gooseman.codes',
    icon: '♿',
  },
  {
    name: 'GitHub Project Panel',
    desc: 'Showcase your GitHub projects right on your channel. Viewers can browse your repos without leaving the stream.',
    tags: ['Developer Tools', 'Twitch Extension'],
    link: 'https://www.twitch.tv/ext/yncbd7i177on3ia536r307nlvt8g1w',
    icon: '⟨/⟩',
  },
  {
    name: 'Better Information Panel',
    desc: 'A highly configurable panel for the info your chat needs. Custom colors, multiple tabs, and live-updating content.',
    tags: ['Customization', 'Twitch Extension'],
    link: 'https://www.twitch.tv/ext/pp16i51f77pxhwls8tqqo72f5m5ttz',
    icon: '☰',
  },
  {
    name: 'Stream Team',
    desc: 'Display your team in your panels the way it was meant to be seen. Viewers can discover and follow other team members.',
    tags: ['Community', 'Twitch Extension'],
    link: 'https://www.twitch.tv/ext/d4t75sazjvk9cc84h30mgkyg7evbvz',
    icon: '👥',
  },
];

const ExtensionCard = ({ ext, p }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        background: hovered ? p.surfaceHover : p.cardBg,
        border: `1px solid ${hovered ? p.accent + '44' : p.border}`,
        borderRadius: 12, padding: 28,
        display: 'flex', flexDirection: 'column', gap: 14,
        transition: 'all 0.25s ease',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        width: 44, height: 44, borderRadius: 10,
        background: p.accentSubtle,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 20, marginBottom: 4,
      }}>
        {ext.icon}
      </div>
      <div style={{ fontSize: 20, fontWeight: 700, color: p.text, letterSpacing: '-0.01em' }}>
        {ext.name}
      </div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {ext.tags.map(tag => (
          <span key={tag} style={{
            fontSize: 12, padding: '3px 10px', borderRadius: 20,
            background: p.tagBg, color: p.tagText, fontWeight: 500,
          }}>
            {tag}
          </span>
        ))}
      </div>
      <div style={{ fontSize: 15, color: p.textMuted, lineHeight: 1.6, flex: 1 }}>
        {ext.desc}
      </div>
      <InstallLink href={ext.link} p={p} />
    </div>
  );
};

const InstallLink = ({ href, p }) => {
  const [hovered, setHovered] = useState(false);
  const label = href.includes('twitch.tv/ext/') ? 'Install on Twitch' : 'Open';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex', alignItems: 'center',
        gap: hovered ? 10 : 6,
        fontSize: 14, fontWeight: 600, color: p.accent,
        textDecoration: 'none', marginTop: 4,
        transition: 'gap 0.2s',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <path d="M4 12L12 4m0 0H5m7 0v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  );
};

const ExtensionsGrid = ({ p }) => (
  <section id="extensions" style={{ padding: '0 48px 80px', maxWidth: 900, margin: '0 auto' }}>
    <div style={{
      fontSize: 13, fontWeight: 600, color: p.accent,
      textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 24,
    }}>
      Extensions
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
      {EXTENSIONS.map(ext => (
        <ExtensionCard key={ext.name} ext={ext} p={p} />
      ))}
    </div>
  </section>
);

export default ExtensionsGrid;
