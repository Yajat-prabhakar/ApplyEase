"use client";

import { useEffect } from 'react';

const ContactForm = () => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    script.onload = () => {
      if (typeof (window as any).Tally !== 'undefined') {
        (window as any).Tally.loadEmbeds();
      }
    };
    script.onerror = () => {
      if (typeof (window as any).Tally !== 'undefined') {
         (window as any).Tally.loadEmbeds();
      }
    }

    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      const a = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (a) {
        document.body.removeChild(a);
      }
    };
  }, []);


  return (
    <iframe
      data-tally-src="https://tally.so/embed/n046r9?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
      loading="lazy"
      width="100%"
      height="316"
      frameBorder="0"
      marginHeight={0}
      marginWidth={0}
      title="Contact Form"
    ></iframe>
  );
};

export default ContactForm;
