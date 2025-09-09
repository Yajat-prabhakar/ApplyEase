"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">
          &copy; {year} Momentum Careers. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="#services" className="text-sm hover:underline underline-offset-4">
            Services
          </Link>
          <Link href="#about" className="text-sm hover:underline underline-offset-4">
            About
          </Link>
          <Link href="#contact" className="text-sm hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
