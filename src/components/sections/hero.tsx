"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative flex flex-col justify-center items-center px-5 pt-[180px] pb-[120px] sm:pt-[220px] sm:pb-[140px] desktop:pt-[220px] desktop:pb-[180px] min-h-[600px] sm:min-h-[800px] w-full isolate overflow-hidden">
      {/* Background Grid Pattern Overlay */}
      {/* Replicating the structure from html_structure where multiple divs with aspect-square create the grid */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-25">
        <div className="grid-overlay absolute inset-0 w-full h-full" />
      </div>

      {/* Main Content Container */}
      <div className="max-w-[1408px] w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-8 relative z-10">

        <div className="px-2 lg:px-0">
          {/* Headline */}
          <h1 className="text-white uppercase font-mono text-[2.25rem] leading-[1.05] md:text-[3rem] desktop:text-[3.75rem] tracking-tight max-w-[900px]">
            Caracal
            <br className="hidden 2xl:block" />
            Economic infrastructure
            <br className="hidden 2xl:block" />
            layer for AI agents
          </h1>

          {/* Description Paragraph */}
          <p className="font-sans font-normal text-sm sm:text-base desktop:text-[17px] mt-6 max-w-[560px] text-[#999999] leading-relaxed">
            Financial control for AI agents. Give every agent an identity, budget, and spending limits with full accountability and ROI tracking.
          </p>

          {/* Call to Action Link */}
          <div className="flex items-center mt-6 group">
            <a
              href="/early-access"
              className="flex items-center gap-2 text-[#cdff3e] font-mono font-bold text-[12px] tracking-widest uppercase hover:opacity-80 transition-all duration-300"
            >
              GET EARLY ACCESS
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Right-side decorative image with sleek animation */}
        <div className="hidden lg:flex justify-end items-center">
          <HeroImage />
        </div>
      </div>

      {/* Bottom Gradient Divider */}
      {/* Matches the 'before' pseudo-element styling from the HTML structure */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[linear-gradient(270deg,rgba(17,17,17,0.48)_10.44%,rgba(255,79,3,0.48)_49.44%,rgba(17,17,17,0.48)_88.44%)]" />

      {/* Inline styles for the grid overlay if globals.css is not already handling it natively with the requested tokens */}
      <style jsx>{`
        .grid-overlay {
          background-image: 
            linear-gradient(to right, rgba(51, 51, 51, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(51, 51, 51, 0.25) 1px, transparent 1px);
          background-size: 82px 82px;
          background-position: center top;
        }
        @media (max-width: 1024px) {
          .grid-overlay {
            background-size: 34px 34px;
          }
        }
        @media (max-width: 640px) {
          .grid-overlay {
            background-size: 17px 17px;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;

function HeroImage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true) }, []);

  return (
    <div className={`relative w-[420px] h-[300px] rounded-lg overflow-visible transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <Image
        src="/caracal_inverted.png"
        alt="Decorative"
        height={550}
        width={550}
        className="object-cover rounded-lg shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]"
      />

      <style jsx>{`
        .hero-bracket{
          position: absolute;
          font-family: monospace;
          font-size: 56px;
          color: rgba(255,255,255,0.06);
          top: 8px;
          transition: transform 420ms cubic-bezier(.2,.9,.2,1), color 240ms ease;
          pointer-events: none;
        }
        .hero-bracket.left{ left: -36px; }
        .hero-bracket.right{ right: -36px; }
        .relative:hover .hero-bracket.left{ transform: translate(-6px,-6px) rotate(-6deg); color: rgba(205,255,62,0.65) }
        .relative:hover .hero-bracket.right{ transform: translate(6px,-6px) rotate(6deg); color: rgba(205,255,62,0.65) }
        @media (max-width: 1024px){ .hero-bracket{ display:none } }
      `}</style>
    </div>
  )
}