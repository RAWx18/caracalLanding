import React from 'react';

const FeaturesGrid = () => {
  const features = [
    {
      title: "Dynamic access tokens",
      description: "No static secrets. Every agent action runs on ephemeral, identity-attested credentials that can be revoked instantly. Real-time, fine-grained access control verified at the edge keeps agents contained and accountable.",
      imageUrl: "/revoke.jpg",
      alt: "Dynamic access tokens illustration"
    },
    {
      title: "Federated Identity with Distributed Authorization",
      description: "Integrate seamlessly with your existing identity stack. Caracal unifies users, agents, and external systems, ensuring authorization happens at the edge where agents interact with their environment.",
      imageUrl: "/federated.jpg",
      alt: "Federated Identity illustration"
    },
    {
      title: "Agent-Native Data Model",
      description: "Map workloads, applications, users, and resources into logical, ephemeral zones for out-of-the-box access management. Spin zones up, down, or away as needed, perfect for dynamic, agent-native workloads that integrate directly into your software development lifecycle.",
      imageUrl: "/native.jpg",
      alt: "Agent-Native Data Model illustration"
    },
    {
      title: "SDKs for Developers",
      description: "Drop-in SDKs give developers everything they need to integrate identity, enforce access, and connect to tools securely. Empower creators to build production-ready agentic applications without touching IAM plumbing.",
      imageUrl: "/sdk.jpg",
      alt: "SDKs for Developers illustration"
    },
    {
      title: "Centralized Policy and Auditing",
      description: "Govern agents and tools at scale while empowering users to control what agents can do on their behalf. Deterministic, task-based policies define every action, with end-to-end auditing and transparency for full accountability.",
      imageUrl: "/policy.jpg",
      alt: "Centralized Policy and Auditing illustration"
    },
    {
      title: "Ecosystem Interoperability",
      description: "Unify identity, permissions, and compliance across MCP, OAuth, and emerging standards. Connect securely to any agent, tool, or service through our integrations gateway or plugin with full in-band authorization and auditing.",
      imageUrl: "/ecosystem.jpg",
      alt: "Ecosystem Interoperability illustration"
    }
  ];

  return (
    <section className="bg-black border-t border-[#333333] pt-24 pb-32">
      <div className="container mx-auto px-5 sm:px-12 desktop:px-20 max-w-[1408px]">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge-orange">FEATURES</span>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl desktop:text-[40px] font-mono font-bold uppercase mb-6 leading-tight">
            BUILT FOR ENTERPRISE CONTROL
          </h2>
          <p className="text-[#999999] text-base desktop:text-lg max-w-[720px] font-sans">
            Built for CIOs, FinOps, and compliance leaders to control money, risk, and accountability in automated systems.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-l border-t border-[#333333]">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col p-8 sm:p-10 border-r border-b border-[#333333] transition-colors duration-300 hover:bg-[#111111]"
            >
              <div className="mb-8 h-full flex flex-col">
                <h3 className="text-white text-xl font-mono font-bold uppercase mb-4 h-auto min-h-[1.5rem]">
                  {feature.title}
                </h3>
                <p className="text-[#999999] text-sm leading-relaxed mb-10 opacity-90">
                  {feature.description}
                </p>

                <div className="mt-auto relative w-full aspect-[4/3] flex items-center justify-center">
                  <img
                    src={feature.imageUrl}
                    alt={feature.alt}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;