import React from 'react';
// use native <img> for small static logo to avoid Next image optimizer issues

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-[#1f1f1f] pt-20 pb-12 px-5 sm:px-12 desktop:px-20 2xl:px-0">
      <div className="max-w-[1408px] 3xl:max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          {/* Logo and Tagline Section */}
          <div className="lg:col-span-4 flex flex-col items-start gap-8">
            <a href="/" className="inline-block transition-opacity hover:opacity-80">
              <img
                src="/garudex.png"
                alt="Caracal Logo"
                width={147}
                height={31}
                className="h-8 w-auto"
              />
            </a>
            <h2 className="text-[28px] md:text-[32px] font-bold uppercase leading-[1.1] tracking-tight text-white max-w-[300px]">
              UNLOCK <br></br>SECURE AI INFRASTRUCTURE
            </h2>
            <div className="flex flex-col gap-4 mt-4">
               <button className="bg-[#cdff3e] text-[#0a0a0a] font-mono text-[12px] font-bold py-3 px-6 uppercase rounded-[2px] hover:shadow-[0px_0px_48px_0px_rgba(205,255,62,0.32)] transition-all duration-300 w-fit">
                Get Early Access
              </button>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-2">
            <p className="font-mono text-[12px] font-bold text-[#a1a1aa] uppercase tracking-[0.1em] mb-8">Caracal</p>
            <ul className="flex flex-col gap-4">
              <li><a href="/company" className="font-mono text-[11px] font-bold text-white uppercase hover:text-[#cdff3e] transition-colors">Company</a></li>
              <li><a href="/blog" className="font-mono text-[11px] font-bold text-white uppercase hover:text-[#cdff3e] transition-colors">Blog</a></li>
              <li><a href="/faqs" className="font-mono text-[11px] font-bold text-white uppercase hover:text-[#cdff3e] transition-colors">FAQ</a></li>
              <li><a href="/press" className="font-mono text-[11px] font-bold text-white uppercase hover:text-[#cdff3e] transition-colors">Press Media Kit</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="font-mono text-[12px] font-bold text-[#a1a1aa] uppercase tracking-[0.1em] mb-8">Social Media</p>
            <ul className="flex flex-col gap-4">
              <li><a href="https://x.com" className="font-mono text-[11px] font-bold text-white uppercase hover:text-[#cdff3e] transition-colors">X</a></li>
              <li><a href="https://github.com/garudex-Labs" className="font-mono text-[11px] font-bold text-white uppercase hover:text-[#cdff3e] transition-colors">Github</a></li>
              <li><a href="https://linkedin.com" className="font-mono text-[11px] font-bold text-white uppercase hover:text-[#cdff3e] transition-colors">Linkedin</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="font-mono text-[12px] font-bold text-[#a1a1aa] uppercase tracking-[0.1em] mb-8">Legal</p>
            <ul className="flex flex-col gap-4">
              <li><a href="/privacy" className="font-mono text-[11px] font-bold text-white uppercase hover:text-[#cdff3e] transition-colors">Privacy Policy</a></li>
              <li><a href="/vulnerability-report" className="font-mono text-[11px] font-bold text-white uppercase hover:text-[#cdff3e] transition-colors">Report Vulnerability</a></li>
            </ul>
          </div>

          {/* Description Section */}
          <div className="lg:col-span-2">
            <h3 className="font-mono text-[12px] font-bold text-white uppercase tracking-[0.1em] mb-6 leading-tight">
              Build next-generation products
            </h3>
            <p className="text-[14px] leading-relaxed text-[#a1a1aa] font-sans">
              Evolve your products into agentic platforms. Caracal connect agents to your platform securely, allowing your users to delegate work and execute transactions confidently with full control, visibility, and accountability for every agent action.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1f1f1f] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 relative overflow-visible">
          <p className="text-[12px] font-mono text-[#52525b] uppercase tracking-wider">
            © {currentYear} Garudex Labs, Inc. All rights reserved.
          </p>
          <div className="hidden lg:block">
            <div className="watermark opacity-8 pointer-events-none select-none tracking-[0.5em] font-sans font-black text-[90px] absolute bottom-6 right-6 overflow-hidden leading-none z-0">
              CARACAL
            </div>
            <style jsx>{`
              .watermark{
                opacity: 0.08;
                filter: blur(2px) saturate(0.95);
                color: rgba(255,255,255,0.06);
                -webkit-text-stroke: 0.4px rgba(0,0,0,0.32);
                white-space: nowrap;
              }
              @media (max-width: 1024px){ .watermark{ display:none } }
            `}</style>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;