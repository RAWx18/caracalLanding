import Navbar from "@/components/sections/navbar";
import SubpageHero from "@/components/sections/subpage-hero";
import CTAFooter from "@/components/sections/cta-footer";

export default function PressPage() {
  const news = [
    {
      date: "JAN 30, 2026",
      source: "OpenSource Security",
      title: "Caracal starts with opensoure release",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <main className="flex-grow">
        <SubpageHero 
          badge="RESOURCES"
          title="PRESS & MEDIA KIT"
          subtitle="Latest news, brand assets, and contact information for media inquiries."
        />
        
        <section className="py-24 border-b border-[#1a1a1a]">
          <div className="container max-w-[1408px] mx-auto px-5 sm:px-12 desktop:px-20">
            <h2 className="text-[#333333] font-mono text-[10px] uppercase font-bold tracking-[0.2em] mb-12">LATEST NEWS</h2>
            <div className="grid grid-cols-1 gap-6">
              {news.map((item, i) => (
                <div key={i} className="border border-[#1a1a1a] p-8 hover:border-[#cdff3e]/20 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[#0a0a0a]">
                  <div className="flex flex-col gap-2">
                    <span className="text-[#cdff3e] font-mono text-[10px] font-bold uppercase tracking-widest">{item.source}</span>
                    <h3 className="text-white font-mono text-xl font-bold uppercase">{item.title}</h3>
                  </div>
                  <span className="text-[#333333] font-mono text-sm font-bold">{item.date}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container max-w-[1408px] mx-auto px-5 sm:px-12 desktop:px-20">
            <div className="bg-[#111111] border border-[#333333] p-12 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex flex-col gap-4">
                <h2 className="text-white text-3xl font-mono uppercase font-bold">BRAND ASSETS</h2>
                <p className="text-[#999999] font-sans max-w-xl">
                  Download our official logos, brand guidelines, and executive headshots.
                </p>
              </div>  
              <a
                href="/media-kit.zip"
                download
                className="bg-white text-black font-mono text-[12px] font-bold px-10 py-5 uppercase tracking-wider hover:bg-[#cdff3e] transition-colors whitespace-nowrap inline-block text-center"
              >
                DOWNLOAD MEDIA KIT (.ZIP)
              </a>
            </div>
          </div>
        </section>
      </main>
      <CTAFooter />
    </div>
  );
}
