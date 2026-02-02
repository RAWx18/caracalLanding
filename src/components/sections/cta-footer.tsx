"use client";

import React from 'react';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';

const CTAFooter: React.FC = () => {
  return (
    <footer className="w-full bg-[#0a0a0a] flex flex-col items-center overflow-hidden">
      {/* Turn your team into an AI powerhouse Banner */}
      <div className="w-full max-w-[1408px] mx-auto px-5 sm:px-12 desktop:px-20 py-12 sm:pt-16 sm:pb-24">
        <div className="relative border border-[#333333] p-8 sm:p-12 flex flex-col md:flex-row justify-between items-center gap-8 bg-[#111111] group">
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-[#cdff3e]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="flex flex-col gap-2 relative z-10">
            <h2 className="text-white font-mono text-2xl sm:text-4xl font-bold leading-tight uppercase tracking-tight">
              Caracal OpenSource is now available
            </h2>
            <p className="text-[#999999] font-sans text-lg">
              Install the latest version of Caracal directly from the Python Package Index.
            </p>
          </div>
          <a
            href="https://pypi.org/project/caracal-core"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#cdff3e] text-[#0a0a0a] font-mono text-[14px] font-bold px-10 py-5 rounded-[2px] uppercase tracking-wider hover:shadow-[0px_0px_48px_0px_rgba(205,255,62,0.32)] transition-all duration-300 relative z-10"
          >
            View on PyPI
          </a>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="w-full max-w-[1408px] mx-auto px-5 sm:px-12 desktop:px-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-12">

          {/* Left Column: UNLOCK SECURE AI INFRASTRUCTURE */}
          <div className="md:col-span-6 flex flex-col gap-8">
            <div className="flex flex-col gap-10">
              <h1 className="text-white font-mono text-4xl sm:text-5xl font-bold leading-[1] uppercase tracking-tighter max-w-[500px]">
                UNLOCK SECURE <br /> AI INFRASTRUCTURE
              </h1>
              <Link
                href="/early-access"
                className="bg-[#cdff3e] text-[#0a0a0a] font-mono text-[14px] font-bold px-10 py-5 rounded-[2px] uppercase tracking-wider hover:shadow-[0px_0px_48px_0px_rgba(205,255,62,0.32)] transition-all duration-300 w-fit"
              >
                GET EARLY ACCESS
              </Link>
            </div>
          </div>


          {/* Right Columns: Links */}
          <div className="md:col-span-6 grid grid-cols-2 lg:grid-cols-3 gap-12">

            {/* Caracal Column */}
            <div className="flex flex-col gap-8">
              <h4 className="text-[#333333] font-mono text-[10px] uppercase font-bold tracking-[0.2em]">
                CARACAL
              </h4>
              <nav className="flex flex-col gap-5">
                <Link href="/company" className="text-white font-mono text-[12px] uppercase font-bold hover:text-[#cdff3e] transition-colors">
                  COMPANY
                </Link>
                {/* <Link href="/blog" className="text-white font-mono text-[12px] uppercase font-bold hover:text-[#cdff3e] transition-colors">
                  BLOG
                </Link> */}
                <Link href="/faqs" className="text-white font-mono text-[12px] uppercase font-bold hover:text-[#cdff3e] transition-colors">
                  FAQ
                </Link>
                <Link href="/press" className="text-white font-mono text-[12px] uppercase font-bold hover:text-[#cdff3e] transition-colors">
                  PRESS
                </Link>
                <Link href="https://github.com/Garudex-Labs/caracal" className="text-white font-mono text-[12px] uppercase font-bold hover:text-[#cdff3e] transition-colors">
                  REPOSITORY
                </Link>
              </nav>
            </div>

            {/* Social Media Column */}
            <div className="flex flex-col gap-8">
              <h4 className="text-[#333333] font-mono text-[10px] uppercase font-bold tracking-[0.2em]">
                SOCIAL MEDIA
              </h4>
              <nav className="flex flex-col gap-5">
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-white font-mono text-[12px] uppercase font-bold hover:text-[#cdff3e] transition-colors">
                  X (upcoming)
                </a>
                <a href="https://github.com/garudex-Labs" target="_blank" rel="noopener noreferrer" className="text-white font-mono text-[12px] uppercase font-bold hover:text-[#cdff3e] transition-colors">
                  GITHUB
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white font-mono text-[12px] uppercase font-bold hover:text-[#cdff3e] transition-colors">
                  LINKEDIN (upcoming)
                </a>
              </nav>
            </div>

            {/* Legal Column */}
            <div className="flex flex-col gap-8 lg:col-span-1 col-span-2">
              <h4 className="text-[#333333] font-mono text-[10px] uppercase font-bold tracking-[0.2em]">
                LEGAL
              </h4>
              <nav className="flex flex-col gap-5">
                <Link href="/privacy" className="text-white font-mono text-[12px] uppercase font-bold hover:text-[#cdff3e] transition-colors">
                  PRIVACY POLICY
                </Link>
                <Link href="/vulnerability" className="text-white font-mono text-[12px] uppercase font-bold hover:text-[#cdff3e] transition-colors">
                  REPORT VULNERABILITY
                </Link>
              </nav>

              <div className="mt-4">
                <p className="text-[#999999] font-sans text-[13px] leading-relaxed italic opacity-60">
                  © 2026 Garudex Labs, Inc. <br />
                  All rights reserved.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* THE STATIONARY HALF-HIDDEN CARACAL TEXT */}
      <StationaryText />

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </footer>
  );
};

const StationaryText = () => {
  return (
    <div className="w-full select-none overflow-hidden relative flex justify-center -mb-[10vw]">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay" />
      <span
        className="text-[25vw] font-mono font-bold uppercase tracking-tighter text-transparent stroke-text opacity-10 leading-none"
        style={{ WebkitTextStroke: '2px rgba(255,255,255,10)' }}
      >
        CARACAL
      </span>
    </div>
  );
};

export default CTAFooter;
