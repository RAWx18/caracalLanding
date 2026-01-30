"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <div className={`w-full bg-[#cdff3e] h-10 border-b border-[#333333] transition-all duration-300 ${isScrolled ? '-mt-10 opacity-0' : 'mt-0 opacity-100'}`}>
        <div className="max-w-[1408px] w-full h-full flex items-center justify-center mx-auto px-5 sm:px-12 desktop:px-20">
          <Link
        className="flex gap-2 items-center group transition-all duration-300"
        href="https://github.com/Garudex-Labs/Caracal"
        target="_blank"
        rel="noopener noreferrer"
          >
        <span className="text-black group-hover:underline font-mono text-[10px] sm:text-[12px] font-bold text-center uppercase tracking-tight">
          Open-source Caracal, built with industry to make AI agents financially intelligent
        </span>
        <svg
          className="stroke-black transition-transform group-hover:translate-x-1"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12H19M19 12L13 6M19 12L13 18"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
          </Link>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`fixed left-0 right-0 z-50 px-5 sm:px-12 desktop:px-20 transition-all duration-500 ease-in-out ${
          isScrolled ? 'top-4' : 'top-14 sm:top-16'
        }`}
      >
        <div className="w-full max-w-[1408px] mx-auto bg-[rgba(10,10,10,0.8)] backdrop-blur-xl border border-[#333333] rounded-[2px] shadow-2xl overflow-hidden">
            <div className="flex justify-between items-center p-4 sm:px-8 sm:py-5">
              {/* Logo */}
              <Link className="flex items-center w-fit" href="/">
                <img
                  src="/garudex.png"
                  alt="Garudex Labs Logo"
                  width={147}
                  height={31}
                  className="h-6 sm:h-8 w-auto"
                />
              </Link>

                {/* Desktop Menu */}
                <div className="hidden gap-8 lg:flex lg:items-center">
                  <div className="flex gap-8 items-center">
                    <Link
                      href="/company"
                      className="font-mono text-[12px] font-bold text-white uppercase tracking-wider hover:text-[#cdff3e] transition-colors duration-300"
                    >
                      COMPANY
                    </Link>
                    <Link
                      href="/blog"
                      className="font-mono text-[12px] font-bold text-white uppercase tracking-wider hover:text-[#cdff3e] transition-colors duration-300"
                    >
                      BLOG
                    </Link>
                    <Link
                      href="/faqs"
                      className="font-mono text-[12px] font-bold text-white uppercase tracking-wider hover:text-[#cdff3e] transition-colors duration-300"
                    >
                      FAQ
                    </Link>
                  </div>
                
                  <Link
                    href="/early-access"
                    className="bg-[#cdff3e] text-[#0a0a0a] font-mono text-[12px] font-bold px-8 py-4 rounded-[2px] uppercase tracking-wider hover:shadow-[0px_0px_48px_0px_rgba(205,255,62,0.32)] transition-all duration-300"
                  >
                    GET EARLY ACCESS
                  </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="flex justify-center items-center w-8 h-8 text-white lg:hidden"
                aria-label="Open menu"
              >
              <div className="relative w-6 h-6 flex flex-col justify-center gap-1.5">
                <span className="w-6 h-[2px] bg-white"></span>
                <span className="w-6 h-[2px] bg-white"></span>
                <span className="w-6 h-[2px] bg-white"></span>
              </div>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
