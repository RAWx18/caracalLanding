import React from 'react';
import Image from 'next/image';

const features = [
  {
    title: "Dynamic access tokens",
    description: "No static secrets. Every agent action runs on ephemeral, identity-attested credentials that can be revoked instantly. Real-time, fine-grained access control verified at the edge keeps agents contained and accountable.",
    illustration: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/92cbf2d5-7d30-4b08-962c-b9bdc09a1f45-keycard-ai/assets/svgs/FeatureFirstIllustration_cfdeb1ae-7.svg",
  },
  {
    title: "Federated Identity with Distributed Authorization",
    description: "Integrate seamlessly with your existing infrastructure. Caracal unifies users, agents, and resources, enforcing authorization at the edge where agents operate across environments.",
    illustration: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/92cbf2d5-7d30-4b08-962c-b9bdc09a1f45-keycard-ai/assets/svgs/FeatureSecondIllustration_9ded878e-11.svg",
  },
  {
    title: "Agent-Native Data Model",
    description: "Map workloads, applications, users, and resources into logical, ephemeral zones for out-of-the-box access management. Spin zones up, down, or away as needed, perfect for dynamic, agent-native workloads that integrate directly into your software development lifecycle.",
    illustration: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/92cbf2d5-7d30-4b08-962c-b9bdc09a1f45-keycard-ai/assets/svgs/FeatureThirdIllustration_aa048446-8.svg",
  },
  {
    title: "SDKs for Developers",
    description: "Drop-in SDKs give developers everything they need to authenticate and connect to tools securely. Ship production-ready agentic applications without touching IAM plumbing.",
    illustration: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/92cbf2d5-7d30-4b08-962c-b9bdc09a1f45-keycard-ai/assets/svgs/FeatureFourthIllustration_843ab903-10.svg",
  },
  {
    title: "Centralized Policy and Auditing",
    description: "Govern agents and tools at scale while empowering users to control what agents can do on their behalf. Deterministic, task-based policies define every action, with end-to-end auditing and transparency for full accountability.",
    illustration: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/92cbf2d5-7d30-4b08-962c-b9bdc09a1f45-keycard-ai/assets/svgs/FeatureFifthIllustration_0db8276a-9.svg",
  },
  {
    title: "Ecosystem Interoperability",
    description: "Unify identity, permissions, and control across disparate systems. Connect securely to any agent, framework, or cloud provider with full in-band authorization and compliance.",
    illustration: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/92cbf2d5-7d30-4b08-962c-b9bdc09a1f45-keycard-ai/assets/svgs/FeatureSixthIllustration_c504816f-12.svg",
  },
];

const UnderTheHood = () => {
  return (
    <section className="bg-[#0a0a0a] py-[120px] px-5 sm:px-12 desktop:px-20 border-t border-[#1f1f1f]">
      <div className="max-w-[1408px] mx-auto">
        <div className="mb-16">
          <div className="inline-block border border-[#FF4F03] px-2 py-0.5 mb-6">
            <span className="font-mono text-[12px] text-[#FF4F03] font-bold tracking-[0.1em]">FEATURES</span>
          </div>
          <h2 className="text-[32px] md:text-[48px] font-bold text-white uppercase tracking-tight mb-6 font-sans">
            What&apos;s under the hood
          </h2>
          <p className="text-[#A1A1AA] text-[16px] md:text-[18px] max-w-[660px] font-sans leading-relaxed">
            Everything you need to build, run, and adopt trusted AI systems. From first experiment to enterprise scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-l border-t border-[#1f1f1f]">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col p-10 border-r border-b border-[#1f1f1f] bg-[#111111] overflow-hidden"
            >
              <div className="absolute inset-0 dot-matrix opacity-10 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-[20px] md:text-[24px] font-bold text-white mb-4 font-sans uppercase leading-tight">
                  {feature.title}
                </h3>
                
                <p className="text-[#A1A1AA] text-[16px] leading-[1.6] mb-10 font-sans">
                  {feature.description}
                </p>

                <div className="mt-auto pt-4 flex items-center justify-center">
                  <div className="relative w-full aspect-[4/3] max-w-[400px]">
                    <Image
                      src={feature.illustration}
                      alt={feature.title}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                      priority={index < 2}
                    />
                  </div>
                </div>
              </div>

              {/* Decorative corner glow */}
              <div className="absolute -top-[100px] -right-[100px] w-[200px] h-[200px] bg-[#cdff3e] blur-[120px] opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .dot-matrix {
          background-image: radial-gradient(circle, #222 1px, transparent 1px);
          background-size: 8px 8px;
        }
      `}</style>
    </section>
  );
};

export default UnderTheHood;