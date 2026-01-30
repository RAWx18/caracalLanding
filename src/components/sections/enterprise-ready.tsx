"use client";

import React from 'react';
import { Shield, Key, Cloud, Search } from 'lucide-react';

const EnterpriseReady = () => {
  const features = [
    {
      title: "SSO & Role-Based\nAccess Control",
      description: "Manage Caracal at scale with SSO, SCIM provisioning, and fine-grained RBAC. Define who can govern agents, tools, and policies across teams with precision and auditability.",
      icon: <Shield className="w-6 h-6 text-[#cdff3e]" />,
      bgImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/92cbf2d5-7d30-4b08-962c-b9bdc09a1f45-keycard-ai/assets/images/images_2.png"
    },
    {
      title: "Bring Your Own Keys (BYOK)",
      description: "Root Caracal's encryption and signing operations in your own Key Management Service, AWS KMS, GCP KMS, Azure Key Vault, or on-prem. Maintain complete control and auditability.",
      icon: <Key className="w-6 h-6 text-[#cdff3e]" />,
      bgImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/92cbf2d5-7d30-4b08-962c-b9bdc09a1f45-keycard-ai/assets/images/images_3.png"
    },
    {
      title: "Enterprise Cloud\nDeployment",
      description: "Flexible control-plane and data-plane separation provides isolation, network control, and compliance, all within Caracal's fully managed enterprise cloud.",
      icon: <Cloud className="w-6 h-6 text-[#cdff3e]" />,
      bgImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/92cbf2d5-7d30-4b08-962c-b9bdc09a1f45-keycard-ai/assets/images/images_4.png"
    },
    {
      title: "Continuous Audit\nIntegration",
      description: "Connect Caracal's audit stream to your SIEM and monitoring tools to extend visibility into agent activity. Enable real-time detection and compliance.",
      icon: <Search className="w-6 h-6 text-[#cdff3e]" />,
      bgImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/92cbf2d5-7d30-4b08-962c-b9bdc09a1f45-keycard-ai/assets/images/images_5.png"
    }
  ];

  return (
    <section className="relative bg-[#0a0a0a] py-24 desktop:py-32 overflow-hidden border-t border-[#1a1a1a]">
      {/* Background grid */}
      <div className="absolute inset-0 grid-overlay opacity-[0.05] pointer-events-none" />

      <div className="container max-w-[1408px] mx-auto px-5 sm:px-12 desktop:px-20 relative z-10">
        {/* Header Section */}
        <div className="mb-16 desktop:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <div className="mb-8">
              <span className="inline-block border border-[#ff4f03] text-[#ff4f03] font-mono text-[10px] font-bold uppercase py-1 px-3 tracking-[0.2em]">
                ENTERPRISE READY
              </span>
            </div>
            <h2 className="text-white font-mono text-4xl sm:text-5xl lg:text-[72px] font-bold uppercase tracking-tight leading-[0.95] mb-8">
              Built for the <br /> Enterprise
            </h2>
          </div>
          <p className="text-[#999999] font-sans text-lg desktop:text-xl max-w-[480px] leading-snug">
            Trusted by e-commerce, fintech, trading, and cloud teams to prevent runaway costs and enforce governance.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 desktop:grid-cols-4 border border-[#1a1a1a] bg-[#111111]/30 backdrop-blur-sm relative overflow-hidden">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative flex flex-col p-8 lg:p-10 border-[#1a1a1a] border-b md:border-b-0 md:border-r last:border-b-0 desktop:last:border-r-0 min-h-[450px] group transition-all duration-700 hover:bg-[#111111]/80 overflow-hidden"
            >
              {/* Card Background Image */}
              <div
                className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 bg-cover bg-center grayscale mix-blend-overlay"
                style={{ backgroundImage: `url(${feature.bgImage})` }}
              />

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-transparent group-hover:border-[#cdff3e] transition-all duration-700" />

              {/* Icon Container */}
              <div className="mb-16 relative z-10">
                <div className="w-12 h-12 flex items-center justify-center border border-[#333333] bg-[#0a0a0a] group-hover:border-[#cdff3e] transition-colors duration-700">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div className="mt-auto relative z-10">
                <h3 className="text-white font-mono text-xl lg:text-2xl font-bold uppercase mb-6 whitespace-pre-line leading-tight tracking-tight group-hover:text-[#cdff3e] transition-colors duration-700">
                  {feature.title}
                </h3>
                <p className="text-[#999999] font-sans text-sm lg:text-base leading-relaxed group-hover:text-white/80 transition-colors duration-700">
                  {feature.description}
                </p>
              </div>

              {/* Interactive Line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#cdff3e] group-hover:w-full transition-all duration-700 ease-in-out" />

              {/* Decorative scanline on hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-5 transition-opacity duration-700">
                <div className="w-full h-1/2 bg-gradient-to-b from-[#cdff3e] to-transparent animate-scanline" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .animate-scanline {
          animation: scanline 4s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default EnterpriseReady;
