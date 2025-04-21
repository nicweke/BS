'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding?: boolean;
      }) => void;
    };
  }
}

const CalendlyBadge = () => {
  useEffect(() => {
    // Add the stylesheet once
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Add the script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: 'https://calendly.com/33bsdesigns/onboarding',
          text: 'Schedule time to discuss your project',
          color: '#0069ff',
          textColor: '#ffffff',
          branding: false,
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  return null; // No JSX needed since Calendly injects the badge itself
};

export default CalendlyBadge;
