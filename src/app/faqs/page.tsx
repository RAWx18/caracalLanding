import Navbar from "@/components/sections/navbar";
import SubpageHero from "@/components/sections/subpage-hero";
import CTAFooter from "@/components/sections/cta-footer";

export default function FAQsPage() {
  const faqs = [
    {
      "q": "WHAT IS CARACAL?",
      "a": "Caracal is an economic infrastructure layer for AI agents that enforces budgets, tracks spending, and records all economic actions across LLMs, APIs, tools, and inter-agent workflows."
    },
    {
      "q": "IS CARACAL OPEN SOURCE?",
      "a": "Yes. Caracal is open source under the AGPLv3 license, keeping the core economic and protocol layers fully transparent and auditable."
    },
    {
      "q": "IS THERE A HOSTED VERSION?",
      "a": "Caracal Enterprise is coming soon, offering a managed and self-hosted version with enterprise features like dashboards, integrations, and compliance tooling."
    },
    {
      "q": "CAN AGENTS BYPASS CARACAL?",
      "a": "No. Caracal enforces control at the network and runtime layer using gateways or sidecars, so agents cannot reach external services unless routed through Caracal, even with direct curl calls."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <main className="flex-grow pt-10">
        <SubpageHero 
          badge="SUPPORT"
          title="FAQs"
          subtitle="Everything you need to know about Caracal and the future of agentic ai."
        />
        <section className="py-24">
          <div className="container max-w-[1408px] mx-auto px-5 sm:px-12 desktop:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, i) => (
            <div key={i} className="border border-[#1a1a1a] p-8 hover:border-[#cdff3e]/20 transition-colors bg-[#0a0a0a]">
            <h3 className="text-white font-mono text-base sm:text-lg font-bold uppercase mb-4">{faq.q}</h3>
            <p className="text-[#999999] font-sans text-sm sm:text-base leading-relaxed opacity-80">{faq.a}</p>
            </div>
            ))}
            </div>
          </div>
        </section>
      </main>
      <CTAFooter />
    </div>
  );
}
