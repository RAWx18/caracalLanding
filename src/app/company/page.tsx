import Navbar from "@/components/sections/navbar";
import SubpageHero from "@/components/sections/subpage-hero";
import CTAFooter from "@/components/sections/cta-footer";
import Image from "next/image";

export default function CompanyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <main className="flex-grow pt-10">
        <SubpageHero 
          badge="OUR MISSION"
          title="Economic Infrastructure for Autonomous Systems"
          subtitle="To make autonomous software economically accountable by giving AI agents identity, budgets, and enforceable financial boundaries."
        />
        
        {/* Story Section */}
        <section className="py-24 border-b border-[#1a1a1a]">
          <div className="container max-w-[1408px] mx-auto px-5 sm:px-12 desktop:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
              <div className="flex flex-col gap-8">
              <h2 className="text-white text-2xl sm:text-3xl font-mono uppercase font-bold leading-tight">The Evolution We’re Building</h2>
              <div className="flex flex-col gap-6 text-[#999999] text-base sm:text-lg leading-relaxed font-sans opacity-80">
              <p>
              As software becomes autonomous, traditional financial systems fail to keep up. Human-centric accounting cannot govern machine-driven economies.
              </p>
              <p>
              Caracal introduces a new economic layer for autonomous systems, where agents operate under explicit financial rules, every decision is economically traceable, and organizations can safely scale automation without losing control of money, risk, or accountability.
              </p>
              </div>
              </div>
              <div className="relative aspect-square-sm bg-[#0a0a0a] overflow-hidden group">
                <div className="absolute inset-0 grid-overlay opacity-[0.05] group-hover:opacity-[0.1] transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-1/2 h-1/2 border border-[#cdff3e]/20 flex items-center justify-center relative">
                    <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#cdff3e]" />
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#cdff3e]" />
                    <span className="text-[#cdff3e] font-mono text-[10px] uppercase font-bold tracking-[0.2em] animate-pulse">FINANCIAL_SCAN: OK</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-24 border-b border-[#1a1a1a]">
          <div className="container max-w-[1408px] mx-auto px-5 sm:px-12 desktop:px-20">
            <h2 className="text-[#333333] font-mono text-[10px] uppercase font-bold tracking-[0.2em] mb-16">FOUNDING TEAM</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
              {
                name: "Ryan Madhuwala",
                role: "Founder & CEO",
                desc: "Lab Leader at LF Decentralized Trust and open-source advocate with a background in scaling technology companies.",
                url: "https://www.linkedin.com/in/ryanmadhuwala"
              },
              {
                name: "Position Open",
                role: "Co-Founder & CTO",
                desc: "Interested can contact us at ryan@garudexlabs.com",
                url: "mailto:ryan@garudexlabs.com"
              },
                  ].map((founder, i) => (
              <a
                key={i}
                href={founder.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${founder.name} LinkedIn`}
                className="block border border-[#1a1a1a] p-8 hover:border-[#cdff3e]/30 transition-colors bg-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-[#cdff3e]/40"
              >
                <h3 className="text-white font-mono text-xl font-bold uppercase mb-2">{founder.name}</h3>
                <p className="text-[#cdff3e] font-mono text-[12px] uppercase font-bold mb-6 tracking-widest">{founder.role}</p>
                <p className="text-[#666666] font-sans text-sm leading-relaxed">{founder.desc}</p>
              </a>
              ))}
            </div>
          </div>
        </section>

        {/* Investors Section */}
        {/* <section className="py-24 border-b border-[#1a1a1a]">
          <div className="container max-w-[1408px] mx-auto px-5 sm:px-12 desktop:px-20">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
              <div className="flex flex-col gap-4">
                <h2 className="text-[#333333] font-mono text-[10px] uppercase font-bold tracking-[0.2em]">BACKED BY</h2>
            <h3 className="text-white text-3xl sm:text-4xl font-mono uppercase font-bold">WORLD CLASS INVESTORS</h3>
            </div>
            <div className="text-right">
            <span className="text-[#cdff3e] font-mono text-3xl sm:text-4xl font-bold uppercase tracking-tight">$XM FUNDED</span>
            </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['a16z', 'YC', 'Accel', 'EF'].map((investor, i) => (
                <div key={i} className="h-32 border border-[#1a1a1a] flex items-center justify-center group hover:border-[#cdff3e]/20 transition-all">
                   <span className="text-[#333333] font-mono text-lg font-bold uppercase group-hover:text-white transition-colors">{investor}</span>
                </div>
              ))}
            </div>
          </div>
        </section> */}
      </main>
      <CTAFooter />
    </div>
  );
}
