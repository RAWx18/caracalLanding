"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";

interface UseCase {
  id: number;
  title: string;
  illustration: string;
}

const USE_CASES: UseCase[] = [
  {
    id: 1,
    title: "EXTEND COPILOTS & ADOPT AGENTS",
    illustration:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/92cbf2d5-7d30-4b08-962c-b9bdc09a1f45-keycard-ai/assets/svgs/UseCaseFirstIllustration_ff321393-3.svg",
  },
  {
    id: 2,
    title: "CREATE TRUSTED AGENTS & TOOLS",
    illustration:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/92cbf2d5-7d30-4b08-962c-b9bdc09a1f45-keycard-ai/assets/svgs/UseCaseSecondIllustration_ffdafc76-4.svg",
  },
  {
    id: 3,
    title: "BUILD MULTI-AGENT SYSTEMS",
    illustration:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/92cbf2d5-7d30-4b08-962c-b9bdc09a1f45-keycard-ai/assets/svgs/UseCaseThirdIllustration_6e85b19f-5.svg",
  },
  {
    id: 4,
    title: "BUILD NEXT-GENERATION PRODUCTS",
    illustration:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/92cbf2d5-7d30-4b08-962c-b9bdc09a1f45-keycard-ai/assets/svgs/UseCaseFourthIllustration_7bff4977-6.svg",
  },
];

export default function UseCasesBanner() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Simple infinite marquee effect logic is handled via pure CSS transform
  
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0a] py-16 md:py-24 border-t border-gray-800">
      {/* Upper Static Part */}
      <div className="container mx-auto px-5 sm:px-12 desktop:px-20 mb-12">
        <div className="flex flex-col items-start gap-4">
          <div className="badge-orange border border-[#FF4F03] text-[#FF4F03] px-2 py-0.5 text-[10px] font-mono leading-tight tracking-wider">
            USE CASES
          </div>
          <h2 className="text-white text-[32px] md:text-[40px] font-mono font-bold leading-[1.1] tracking-tight max-w-[600px] uppercase">
            YOUR PARTNER IN BECOMING <br /> AGENT-NATIVE
          </h2>
        </div>
      </div>

      {/* Scrolling Content */}
      <div className="relative flex overflow-hidden select-none">
        {/* The Marquee Track */}
        <div 
          className="flex whitespace-nowrap animate-marquee"
          style={{ 
            animation: 'marquee 40s linear infinite',
            display: 'flex',
            minWidth: '100%'
          }}
        >
          {/* First set of items */}
          {USE_CASES.map((useCase) => (
            <div 
              key={`use-case-1-${useCase.id}`}
              className="flex-shrink-0 flex flex-col items-center justify-center px-12 md:px-20 border-r border-[#333333] last:border-r-0"
              style={{ width: 'clamp(300px, 40vw, 500px)' }}
            >
              <div className="relative w-full aspect-[4/3] mb-8 group">
                <Image
                  src={useCase.illustration}
                  alt={useCase.title}
                  fill
                  className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  sizes="(max-width: 768px) 300px, 500px"
                />
              </div>
              <h3 className="text-white font-mono text-center text-sm md:text-base font-bold tracking-wider uppercase">
                {useCase.title}
              </h3>
            </div>
          ))}
          
          {/* Duplicated set for seamless loop */}
          {USE_CASES.map((useCase) => (
            <div 
              key={`use-case-2-${useCase.id}`}
              className="flex-shrink-0 flex flex-col items-center justify-center px-12 md:px-20 border-r border-[#333333]"
              style={{ width: 'clamp(300px, 40vw, 500px)' }}
            >
              <div className="relative w-full aspect-[4/3] mb-8 group">
                <Image
                  src={useCase.illustration}
                  alt={useCase.title}
                  fill
                  className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  sizes="(max-width: 768px) 300px, 500px"
                />
              </div>
              <h3 className="text-white font-mono text-center text-sm md:text-base font-bold tracking-wider uppercase">
                {useCase.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle line decoration */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#333] to-transparent opacity-50" />

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
}