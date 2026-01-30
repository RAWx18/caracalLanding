import Navbar from "@/components/sections/navbar";
import SubpageHero from "@/components/sections/subpage-hero";
import CTAFooter from "@/components/sections/cta-footer";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <main className="flex-grow">
        <SubpageHero 
          badge="LEGAL"
          title="PRIVACY POLICY"
          subtitle="How we collect, use, and protect your data at Caracal."
        />
        
        <section className="py-24">
          <div className="container max-w-[1408px] mx-auto px-5 sm:px-12 desktop:px-20">
            <div className="max-w-4xl mx-auto flex flex-col gap-16">
              <div className="flex flex-col gap-8">
                <h2 className="text-white text-3xl font-mono uppercase font-bold">1. INTRODUCTION</h2>
                <p className="text-[#999999] font-sans text-lg leading-relaxed">
                  Garudex Labs, Inc. ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you visit our website, use our services, or interact with us.
                </p>
              </div>

              <div className="flex flex-col gap-8">
                <h2 className="text-white text-3xl font-mono uppercase font-bold">2. INFORMATION WE COLLECT</h2>
                <div className="flex flex-col gap-4 text-[#999999] font-sans text-lg leading-relaxed">
                  <p>We collect information you provide directly to us, such as when you request early access, sign up for our newsletter, or contact us for support. This may include:</p>
                  <ul className="list-disc pl-8 flex flex-col gap-4">
                    <li>Name and contact information (e.g., email address, company name)</li>
                    <li>Professional information (e.g., job title, industry)</li>
                    <li>Communications you send to us</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-8">
                <h2 className="text-white text-3xl font-mono uppercase font-bold">3. HOW WE USE YOUR INFORMATION</h2>
                <p className="text-[#999999] font-sans text-lg leading-relaxed">
                  We use the information we collect to provide, maintain, and improve our services, communicate with you about updates and new features, and protect the security and integrity of our platform.
                </p>
              </div>

              <div className="flex flex-col gap-8 p-12 bg-[#111111] border border-[#333333]">
                <h2 className="text-white text-xl font-mono uppercase font-bold">CONTACT US</h2>
                <p className="text-[#999999] font-sans">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <a href="mailto:support@garudexlabs.com" className="text-[#cdff3e] font-mono font-bold uppercase hover:underline">
                  support@garudexlabs.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <CTAFooter />
    </div>
  );
}
