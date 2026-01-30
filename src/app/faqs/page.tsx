import Navbar from "@/components/sections/navbar";
import SubpageHero from "@/components/sections/subpage-hero";
import CTAFooter from "@/components/sections/cta-footer";

export default function FAQsPage() {
  const faqs = [
    {
      q: "WHAT IS AGENT IDENTITY?",
      a: "Agent identity is a unique, cryptographically verifiable identifier assigned to an AI agent. It allows systems to distinguish between different agents and the humans they represent, enabling fine-grained access control."
    },
    {
      q: "HOW DOES CARACAL SECURE AGENT ACCESS?",
      a: "Caracal uses dynamic, ephemeral tokens and federated identity protocols. Instead of long-lived API keys, agents are issued short-lived credentials that are tied to specific tasks and policies."
    },
    {
      q: "CAN I USE CARACAL WITH EXISTING IAM SYSTEMS?",
      a: "Yes. Caracal is designed to federate with existing identity providers (IdPs) like Okta, Auth0, and Azure AD, extending human identity to the agents they deploy."
    },
    {
      q: "WHAT FRAMEWORKS DO YOU SUPPORT?",
      a: "Caracal provides SDKs for major AI frameworks including LangChain, LlamaIndex, and AutoGPT, as well as a generic REST API for custom implementations."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <main className="flex-grow">
        <SubpageHero 
          badge="SUPPORT"
          title="FREQUENTLY ASKED QUESTIONS"
          subtitle="Everything you need to know about Caracal and the future of agentic security."
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
