import React from 'react';
import Image from 'next/image';

const MissionSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#0a0a0a] pt-32 pb-24 overflow-hidden border-t border-[#1a1a1a]">
      {/* Grid background */}
      <div className="absolute inset-0 grid-overlay opacity-[0.05] pointer-events-none" />

      <div className="container max-w-[1408px] mx-auto px-5 sm:px-12 desktop:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
          {/* Left: Text Content */}
          <div className="flex-1 flex flex-col">
            <div className="mb-6">
              <span className="inline-block border border-[#ff4f03] text-[#ff4f03] font-mono text-[10px] font-bold uppercase py-1 px-3 tracking-[0.2em]">
                WHAT WE DO
              </span>
            </div>

            <h2 className="text-white font-mono text-4xl sm:text-5xl lg:text-[50px] font-bold uppercase tracking-tight leading-[0.95] mb-10">
              THE MISSING LAYER <br />
              FOR AGENT ECONOMIC <br />
              CONTROL
            </h2>

            <p className="text-[#999999] font-sans text-lg lg:text-2xl max-w-[600px] leading-snug mb-12">
              AI agents trigger real economic actions API calls, compute, ad spend, trading but companies can't attribute costs, enforce budgets, or explain outcomes.
            </p>

            <div className="flex flex-col gap-8 border-l-2 border-[#ff4f03] pl-8 py-2 relative">
              <div className="absolute top-0 left-[-2px] w-[2px] h-4 bg-[#ff4f03]" />
              <div className="absolute bottom-0 left-[-2px] w-[2px] h-4 bg-[#ff4f03]" />
              <p className="text-white/60 font-sans text-base leading-relaxed max-w-[450px]">
                Caracal sits between agents and paid resources the system of record for automated spending.
              </p>
            </div>
          </div>


            {/* Right: Illustration */}
            <div className="flex-1 flex justify-center items-start">
            <div className="relative inline-block">
              {/* Decorative elements behind image */}
              <div className="absolute inset-0 -z-10 bg-black rounded-full blur-3xl opacity-30" />

              <div className="relative inline-block border border-[#1a1a1a] bg-black p-4">
              {/* Top left corner accent */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#ff4f03]" />
              {/* Bottom right corner accent */}
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#ff4f03]" />

              <img
                src="home_showcase.jpg"
                alt="Infrastructure nodes"
                className="block max-w-full h-auto"
              />
              </div>
            </div>
            </div>
        </div>

        {/* Section Divider */}
        <div className="mt-32 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff4f03]/30 to-transparent" />
      </div>
    </section>
  );
};

export default MissionSection;
