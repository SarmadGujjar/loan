"use client"
import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  const [scrollingDown, setScrollingDown] = useState<boolean>(false);
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      // Determine scroll direction
      if (currentScroll > lastScrollTop) {
        setScrollingDown(true); // Scrolling down
      } else {
        setScrollingDown(false); // Scrolling up
      }

      // Update last scroll position
      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-blue-500 text-white p-4 transition-transform duration-300 ${
        scrollingDown ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <nav className="container mx-auto">
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Services</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
