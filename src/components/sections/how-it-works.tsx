import React from 'react';
import Image from 'next/image';

const HowItWorks = () => {
  return (
    <section className="bg-[#0a0a0a] py-[80px] md:py-[120px] px-5 sm:px-12 desktop:px-20">
      <div className="max-w-[1408px] mx-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-20">
          <div className="inline-block border border-[#FF4F03] px-2 py-0.5 mb-6">
            <span className="font-mono text-[10px] md:text-[12px] text-[#FF4F03] tracking-[0.1em] font-bold">
              HOW IT WORKS
            </span>
          </div>
          <h2 className="text-white text-[32px] md:text-[48px] font-bold uppercase leading-[1.1] mb-6 max-w-4xl">
            The foundation for trusted,<br />production-ready agentic applications
          </h2>
          <p className="text-[#A1A1AA] text-base md:text-lg max-w-2xl">
            Empower developers to build, users to adopt and control, and security to govern.
          </p>
        </div>

        {/* Multipart Cards Stack */}
        <div className="flex flex-col gap-8">
          
          {/* Card 1: Build */}
          <div className="bg-[#111111] border border-[#1F1F1F] rounded-[2px] p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute inset-0 dot-matrix opacity-10"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-8">
                <h3 className="text-white text-xl md:text-2xl font-bold uppercase flex items-baseline gap-4">
                  <span className="font-mono text-[#A1A1AA] text-lg">1</span>
                  <span>Build agentic applications without becoming an IAM expert</span>
                </h3>
              </div>
              
              <div className="flex-1 flex items-center justify-center py-10">
                <div className="relative w-full max-w-[600px] aspect-[16/9]">
                  {/* Mockup for SDK/Code */}
                  <div className="absolute inset-0 bg-[#0a0a0a] border border-[#1F1F1F] rounded-md shadow-2xl p-6 font-mono text-sm overflow-hidden">
                    <div className="flex gap-1.5 mb-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
                    </div>
                    <div className="text-[#a1a1aa] leading-relaxed">
                      <span className="text-[#cdff3e]">async</span> <span className="text-blue-400">function</span> <span className="text-white">initAgent</span>() &#123;<br />
                      &nbsp;&nbsp;<span className="text-[#cdff3e]">const</span> user = <span className="text-purple-400">await</span> <span className="text-white">validateUser</span>(input);<br />
                      &nbsp;&nbsp;<span className="text-[#cdff3e]">import</span> &#123; CaracalClient &#125; <span className="text-[#cdff3e]">from</span> <span className="text-orange-400">&apos;@caracal&apos;</span>;<br />
                      &nbsp;&nbsp;<span className="text-[#cdff3e]">if</span> (user) &#123;<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">await</span> <span className="text-white">authorize</span>(user, CaracalClient);<br />
                      &nbsp;&nbsp;&#125;<br />
                      &#125;
                    </div>
                  </div>
                  {/* Floating Caracal Asset */}
                  <div className="absolute -right-4 -bottom-4 w-32 md:w-48 aspect-square flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-[#1F1F1F] rounded-lg shadow-[0_0_30px_rgba(205,255,62,0.15)] flex items-center justify-center">
                       <div className="w-12 h-12 text-[#cdff3e]">
                         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                       </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-[#A1A1AA] text-sm md:text-base leading-relaxed max-w-3xl">
                  No custom access logic or protocol expertise required to build agents and tools. Use drop-in SDKs for popular frameworks that handle authentication & authorization, identity binding, and standards compliance for you.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Connect */}
          <div className="bg-[#111111] border border-[#1F1F1F] rounded-[2px] p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute inset-0 dot-matrix opacity-10"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-8">
                <h3 className="text-white text-xl md:text-2xl font-bold uppercase flex items-baseline gap-4">
                  <span className="font-mono text-[#A1A1AA] text-lg">2</span>
                  <span>Connect agents to everything they need to work</span>
                </h3>
              </div>

              <div className="flex-1 flex items-center justify-center py-10">
                <div className="relative w-full max-w-[700px] aspect-[16/9] bg-[#0d0d0d] border border-[#1F1F1F] rounded-md p-4 overflow-hidden">
                   {/* Diagram Mockup Illustration */}
                   <div className="w-full h-full flex flex-col items-center justify-center gap-8 relative">
                      <div className="flex gap-20 items-center">
                         <div className="w-24 h-12 border border-[#1F1F1F] bg-[#111] rounded flex items-center justify-center text-[10px] text-[#A1A1AA] uppercase">Customer DB</div>
                         <div className="w-32 h-16 border border-[#cdff3e] bg-[#111] rounded-lg flex items-center justify-center text-[12px] text-white font-bold uppercase shadow-[0_0_20px_rgba(205,255,62,0.2)]">MCP SERVER</div>
                         <div className="w-24 h-12 border border-[#1F1F1F] bg-[#111] rounded flex items-center justify-center text-[10px] text-[#A1A1AA] uppercase">Salesforce</div>
                      </div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-12 bg-gradient-to-b from-[#cdff3e] to-transparent"></div>
                      <div className="w-40 h-16 border border-[#1F1F1F] bg-[#0a0a0a] rounded flex items-center justify-center text-[12px] text-[#A1A1AA] uppercase font-mono">INTERNAL AGENT</div>
                   </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-[#A1A1AA] text-sm md:text-base leading-relaxed max-w-3xl">
                  Link agents — the ones you build or buy — to users, SaaS tools, and internal systems without sacrificing control or visibility. Distributed enforcement keeps access consistent and secure across environments at any scale.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Empower */}
          <div className="bg-[#111111] border border-[#1F1F1F] rounded-[2px] p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute inset-0 dot-matrix opacity-10"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-8">
                <h3 className="text-white text-xl md:text-2xl font-bold uppercase flex items-baseline gap-4">
                  <span className="font-mono text-[#A1A1AA] text-lg">3</span>
                  <span>Empower everyone to control agents, securely and precisely</span>
                </h3>
              </div>

              <div className="flex-1 flex items-center justify-center py-10">
                <div className="relative w-full max-w-[600px] h-[300px]">
                   {/* UI Mockup - Overlapping Windows */}
                   <div className="absolute top-0 left-0 w-[320px] bg-[#1a1a1a] border border-[#1F1F1F] rounded p-4 shadow-xl z-20">
                      <div className="flex items-center gap-2 mb-4 border-b border-[#1F1F1F] pb-2">
                         <div className="w-4 h-4 rounded-full bg-[#cdff3e]"></div>
                         <span className="text-white text-xs font-bold font-mono">LUKE SKYWALKER</span>
                      </div>
                      <div className="space-y-2">
                         <div className="h-6 bg-[#0a0a0a] rounded px-2 flex items-center justify-between">
                            <span className="text-[10px] text-white">Customer DB</span>
                            <span className="text-[10px] text-[#cdff3e]">ACTIVE</span>
                         </div>
                         <div className="h-6 bg-[#0a0a0a] rounded px-2 flex items-center justify-between">
                            <span className="text-[10px] text-white">Google Drive</span>
                            <span className="text-[10px] text-red-500 font-mono">DENIED</span>
                         </div>
                      </div>
                   </div>

                   <div className="absolute bottom-0 right-0 w-[380px] bg-[#1a1a1a] border border-[#1F1F1F] rounded p-4 shadow-2xl z-10">
                      <div className="text-[10px] text-[#A1A1AA] mb-4 font-mono uppercase">Audit Logs</div>
                      <div className="space-y-3">
                         <div className="flex flex-col gap-1">
                            <div className="flex items-center justify-between text-[11px]">
                               <span className="text-white">Agent cursor-1 to customer_db</span>
                               <span className="text-[#cdff3e]">Success</span>
                            </div>
                            <div className="h-1 w-full bg-[#333] rounded-full overflow-hidden">
                               <div className="h-full w-full bg-[#cdff3e]"></div>
                            </div>
                         </div>
                         <div className="flex flex-col gap-1">
                            <div className="flex items-center justify-between text-[11px]">
                               <span className="text-white">Agent slack-bot to drive_delete</span>
                               <span className="text-red-500">Blocked</span>
                            </div>
                            <div className="h-1 w-full bg-[#333] rounded-full overflow-hidden">
                               <div className="h-full w-[40%] bg-red-500"></div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-[#A1A1AA] text-sm md:text-base leading-relaxed max-w-3xl">
                  Give security teams unified visibility and policy enforcement across every agent, tool, and user action in real time.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;