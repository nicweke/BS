'use client';

import { useEffect } from 'react';

// 👇 Fix for TypeScript window.Calendly error
declare global {
    interface Window {
      Calendly: any;
    }
  }

export default function CalendlyLink() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/33bsdesigns/onboarding',
      });
    }
  };

  return (
    <a
      href="#"
      onClick={handleClick}
      style={{
        color: '#fff',
        backgroundColor: '#1a1a1a',
        padding: '10px 15px',
        borderRadius: '5px',
        textDecoration: 'none',
      }}
    >
      Schedule time with me
    </a>
  );
}
