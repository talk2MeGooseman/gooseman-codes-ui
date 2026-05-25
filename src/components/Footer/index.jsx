import React, { useState } from 'react';

const GitHubIcon = ({ color }) => (
  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill={color}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const DiscordIcon = ({ color }) => (
  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill={color}>
    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.947 2.418-2.157 2.418z"/>
  </svg>
);

const EmailIcon = ({ color }) => (
  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="M22 4l-10 8L2 4"/>
  </svg>
);

const ArrowIcon = ({ color, visible }) => (
  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginLeft: 'auto', flexShrink: 0, opacity: visible ? 1 : 0.4, transition: 'opacity 0.2s' }}>
    <path d="M4 12L12 4m0 0H5m7 0v7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ContactCard = ({ href, icon, label, sublabel, ariaLabel, p }) => {
  const [active, setActive] = useState(false);
  return (
    <a
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
      aria-label={ariaLabel}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 16,
        padding: '16px 20px', borderRadius: 10,
        background: active ? p.surfaceHover : p.cardBg,
        border: `1px solid ${active ? p.accent + '44' : p.border}`,
        textDecoration: 'none',
        transform: active ? 'translateY(-1px)' : 'translateY(0)',
        transition: 'all 0.2s ease',
        flex: 1,
        outline: 'none',
        boxShadow: active ? `0 0 0 2px ${p.accent}` : 'none',
      }}
    >
      <div style={{
        width: 40, height: 40, borderRadius: 10,
        background: p.accentSubtle,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        {icon(p.accent)}
      </div>
      <div>
        <div style={{ fontSize: 15, fontWeight: 600, color: p.text }}>{label}</div>
        <div style={{ fontSize: 13, color: p.textMuted, marginTop: 2 }}>{sublabel}</div>
      </div>
      <ArrowIcon color={p.accent} visible={active} />
    </a>
  );
};

const CONTACT_LINKS = [
  {
    label: 'GitHub',
    sublabel: 'talk2megooseman',
    href: 'https://github.com/talk2megooseman',
    ariaLabel: 'GitHub profile (opens in new tab)',
    icon: (color) => <GitHubIcon color={color} />,
  },
  {
    label: 'Discord',
    sublabel: 'Join the community',
    href: 'https://discord.gg/unMtWz3',
    ariaLabel: 'Discord server (opens in new tab)',
    icon: (color) => <DiscordIcon color={color} />,
  },
  {
    label: 'Email',
    sublabel: 'erik@gooseman.codes',
    href: 'mailto:erik@gooseman.codes',
    ariaLabel: 'Send email to erik@gooseman.codes',
    icon: (color) => <EmailIcon color={color} />,
  },
];

const Footer = ({ p }) => (
  <footer id="contact" style={{ borderTop: `1px solid ${p.border}` }}>
    <div role="region" aria-label="Contact" style={{ padding: '56px 48px 48px', maxWidth: 900, margin: '0 auto' }}>
      <div aria-hidden="true" style={{
        fontSize: 13, fontWeight: 600, color: p.accent,
        textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12,
      }}>
        Contact
      </div>
      <div style={{ fontSize: 24, fontWeight: 700, color: p.text, marginBottom: 24 }}>
        Get in touch
      </div>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        {CONTACT_LINKS.map(link => (
          <ContactCard key={link.label} {...link} p={p} />
        ))}
      </div>
    </div>
    <div style={{
      padding: '20px 48px',
      borderTop: `1px solid ${p.border}`,
      background: p.footerBg,
    }}>
      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <span style={{ fontSize: 13, color: p.textMuted }}>© 2026 Erik Guzman</span>
      </div>
    </div>
  </footer>
);

export default Footer;
