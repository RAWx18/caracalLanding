import React from 'react';
import Image from 'next/image';

/**
 * ValueProposition component cloning the section titled
 * 'THE MISSING PILLAR FOR SECURE, TRUSTED AGENT ACCESS'
 * featuring the complex isometric technical illustration.
 */
export default function ValueProposition() {
  return (
    <section className="relative w-full bg-[#0a0a0a] pt-[120px] pb-[120px] overflow-hidden border-t border-[#1f1f1f]">
      {/* Container for alignment */}
      <div className="container mx-auto px-5 sm:px-12 desktop:px-20 max-w-[1408px]">
        
        {/* Top Label */}
        <div className="mb-6 flex flex-col items-start">
          <div className="border border-[#ff4f03] px-2 py-1 mb-6">
            <span className="text-[#ff4f03] font-mono text-[10px] sm:text-[12px] font-bold tracking-[0.1em] uppercase leading-none">
              WHAT WE DO
            </span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-white font-sans font-bold text-[32px] sm:text-[48px] leading-[1.1] tracking-[-0.01em] uppercase mb-8 max-w-[800px]">
            The missing pillar for secure,<br /> trusted agent access
          </h2>
          
          {/* Description */}
          <p className="text-[#a1a1aa] font-sans text-base sm:text-lg leading-relaxed max-w-[660px] mb-16">
            Securely connect your agents and applications – and the people that use them – to the APIs, tools, and information they need.
          </p>
        </div>

        {/* Isometric Illustration Section */}
        <div className="relative w-full aspect-[16/9] max-w-[1100px] mx-auto mb-16 overflow-visible">
          {/* The complex isometric SVG background/image */}
          <div className="relative w-full h-full flex justify-center items-center">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/92cbf2d5-7d30-4b08-962c-b9bdc09a1f45-keycard-ai/assets/svgs/SecondIllustration_e2916c04-1.svg"
              alt="Secure Agent Access Illustration"
              width={1100}
              height={620}
              className="object-contain w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Bottom Small Description / Caption */}
        <div className="w-full flex justify-center border-t border-[#1f1f1f] pt-8">
          <p className="text-[#a1a1aa] font-sans text-sm sm:text-base leading-relaxed text-center max-w-[700px]">
            Adopt trusted agents using dynamic access tokens, federated identity, task-based policy, and enforcement at the edge.
          </p>
        </div>

      </div>

      {/* Decorative Gradient Line (Bottom Separator) */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[linear-gradient(270deg,rgba(17,17,17,0.48)_10.44%,rgba(255,79,3,0.48)_49.44%,rgba(17,17,17,0.48)_88.44%)]" />
      
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-30 dot-matrix" />
    </section>
  );
}