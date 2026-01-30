"use client";

import React from 'react';

interface SubpageHeroProps {
  title: string;
  subtitle: string;
  badge: string;
}

const SubpageHero: React.FC<SubpageHeroProps> = ({ title, subtitle, badge }) => {
  return (
<section className="relative pt-32 pb-16 border-b border-[#1a1a1a] overflow-hidden">
<div className="absolute inset-0 grid-overlay opacity-[0.03] pointer-events-none" />
<div className="container max-w-[1408px] mx-auto px-5 sm:px-12 desktop:px-20 relative z-10">
<div className="max-w-4xl">
<div className="mb-6">
<span className="inline-block border border-[#cdff3e] text-[#cdff3e] font-mono text-[9px] font-bold uppercase py-1 px-3 tracking-[0.2em]">
{badge}
</span>
</div>
<h1 className="text-white font-mono text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-[1.1] mb-6">
{title}
</h1>
<p className="text-[#999999] font-sans text-lg lg:text-xl max-w-2xl leading-normal opacity-80">
{subtitle}
</p>
</div>
</div>
</section>

  );
};

export default SubpageHero;
