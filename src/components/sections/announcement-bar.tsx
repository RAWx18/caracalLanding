import React from 'react';
import Link from 'next/link';

/**
 * AnnouncementBar Component
 * 
 * A sticky announcement bar positioned at the top of the page.
 * Features centered text and a subtle background blend/gradient.
 */
const AnnouncementBar = () => {
  return (
    <div className="flex sticky top-0 z-50 justify-center items-center w-full transition-all duration-300 overflow-clip px-5 sm:px-12 md:px-20 2xl:px-0 bg-blend-overlay h-10 bg-[#0a0a0a] border-b border-[#333333]">
      {/* Decorative subtle gradient overlay effect from screenshots */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,transparent_0%,#cdff3e_50%,transparent_100%)] pointer-events-none" />
      
      <div className="max-w-[1408px] w-full flex items-center justify-center 3xl:max-w-[1500px] mx-auto relative z-10">
        <Link 
          href="https://github.com/Garudex-Labs/Caracal"
          className="flex gap-2 items-center hover:opacity-80 transition-opacity group"
        >
          <span className="text-white font-mono text-center text-[10px] sm:text-[12px] font-bold uppercase tracking-tight group-hover:underline decoration-neutral-500 underline-offset-4">
            Open-source Caracal, built with industry to make AI agents financially intelligent
          </span>
          <svg 
            className="fill-white transition-transform duration-200 group-hover:translate-x-1" 
            width="14" 
            height="14" 
            viewBox="0 0 19 19" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M4.75 14.25L14.25 4.75M14.25 4.75H6.65M14.25 4.75V12.35" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default AnnouncementBar;