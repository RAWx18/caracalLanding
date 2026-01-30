import React from 'react';
import Image from 'next/image';

const useCases = [
  {
    title: 'Extend copilots & adopt agents',
    illustration: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/92cbf2d5-7d30-4b08-962c-b9bdc09a1f45-keycard-ai/assets/svgs/UseCaseFirstIllustration_ff321393-3.svg',
    alt: 'Extend copilots illustration'
  },
  {
    title: 'Create trusted agents & tools',
    illustration: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/92cbf2d5-7d30-4b08-962c-b9bdc09a1f45-keycard-ai/assets/svgs/UseCaseSecondIllustration_ffdafc76-4.svg',
    alt: 'Create trusted agents illustration'
  },
  {
    title: 'Build multi-agent systems',
    illustration: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/92cbf2d5-7d30-4b08-962c-b9bdc09a1f45-keycard-ai/assets/svgs/UseCaseThirdIllustration_6e85b19f-5.svg',
    alt: 'Build multi-agent systems illustration'
  },
  {
    title: 'Build next-generation products',
    illustration: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/92cbf2d5-7d30-4b08-962c-b9bdc09a1f45-keycard-ai/assets/svgs/UseCaseFourthIllustration_7bff4977-6.svg',
    alt: 'Build next-generation products illustration'
  }
];

const AgentNativePartner = () => {
  return (
    <section className="relative w-full bg-[#0a0a0a] py-[120px] px-5 sm:px-12 desktop:px-20 overflow-hidden">
      {/* Decorative Top Border Gradient */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-[linear-gradient(270deg,rgba(17,17,17,0.48)_10%,rgba(255,79,3,0.48)_50%,rgba(17,17,17,0.48)_90%)]" />

      <div className="max-w-[1408px] mx-auto">
        <div className="flex flex-col items-start mb-16">
          <div className="inline-block border border-[#ff4f03] px-2 py-0.5 mb-6">
            <span className="font-mono text-[12px] font-bold text-[#ff4f03] tracking-widest uppercase">
              USE CASES
            </span>
          </div>
          <h2 className="text-white text-[32px] md:text-[48px] font-bold uppercase tracking-tight leading-[1.1] max-w-2xl">
            Your partner in becoming agent-native
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1f1f1f] border border-[#1f1f1f]">
          {useCases.map((useCase, index) => (
            <div 
              key={index} 
              className="bg-[#111111] group relative overflow-hidden flex flex-col min-h-[440px] p-8 transition-colors duration-300"
            >
              {/* Card Title */}
              <h3 className="text-white text-[20px] font-bold uppercase mb-auto z-10">
                {useCase.title}
              </h3>

              {/* Illustration Container */}
              <div className="relative w-full h-[240px] mt-8 flex items-end justify-center z-10">
                <div className="relative w-full h-full transform transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={useCase.illustration}
                    alt={useCase.alt}
                    fill
                    className="object-contain"
                    priority={index < 2}
                  />
                </div>
              </div>

              {/* Subtle Dot Matrix Overlay on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none dot-matrix" />
              
              {/* Accent Line at Bottom */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-transparent group-hover:bg-[#cdff3e] transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Background Grid Pattern Overlay (Matches High Level Design) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] grid-background" />
      
      <style jsx global>{`
        .dot-matrix {
          background-image: radial-gradient(circle, #222 1px, transparent 1px);
          background-size: 4px 4px;
        }
        .grid-background {
          background-image: 
            linear-gradient(to right, rgba(31, 31, 31, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(31, 31, 31, 0.25) 1px, transparent 1px);
          background-size: 82px 82px;
        }
      `}</style>
    </section>
  );
};

export default AgentNativePartner;