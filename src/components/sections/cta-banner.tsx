import React from 'react';

const CtaBanner: React.FC = () => {
  return (
    <section className="w-full bg-[#0a0a0a] overflow-hidden">
      {/* Rainbow gradient separator */}
      <div 
        className="w-full h-[3px] sm:h-[4px]" 
        style={{
          background: 'linear-gradient(90deg, #ff4f03 0%, #ffcf00 15%, #cdff3e 30%, #00e0ff 50%, #7000ff 70%, #ff00c7 85%, #ff4f03 100%)',
          opacity: 0.8
        }}
      />

      <div className="container mx-auto px-5 py-16 sm:py-24 desktop:py-32">
        <div className="relative border border-[#1f1f1f] bg-[#111111] p-8 sm:p-12 desktop:p-16 flex flex-col md:flex-row justify-between items-center gap-8 group">
          {/* Subtle background dot matrix effect */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-10" 
            style={{ backgroundImage: 'radial-gradient(circle, #222 1px, transparent 1px)', backgroundSize: '4px 4px' }}
          />

          <div className="relative z-10 flex flex-col gap-4 max-w-2xl">
            <h2 className="text-white text-[24px] sm:text-[32px] desktop:text-[40px] font-sans font-bold leading-[1.1] tracking-[-0.02em] uppercase">
              Turn your team into <br className="hidden sm:block" />
              an AI powerhouse
            </h2>
            <p className="text-[#a1a1aa] font-sans text-[16px] sm:text-[18px] leading-relaxed max-w-md">
              Ship safe, powerful, production-ready agents today.
            </p>
          </div>

          <div className="relative z-10">
            <a 
              href="/early-access"
              className="inline-flex items-center justify-center bg-[#cdff3e] text-[#0a0a0a] px-8 py-4 text-[14px] desktop:text-[16px] font-mono font-bold uppercase tracking-widest transition-all duration-300 ease-in-out hover:shadow-[0px_0px_48px_0px_rgba(205,255,62,0.32)] hover:brightness-110 active:scale-95 whitespace-nowrap"
              style={{ borderRadius: '2px' }}
            >
              Get Early Access
            </a>
          </div>

          {/* Decorative Corner Accents */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#cdff3e] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#cdff3e] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#cdff3e] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#cdff3e] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;