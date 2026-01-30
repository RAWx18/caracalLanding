import Navbar from "@/components/sections/navbar";
import SubpageHero from "@/components/sections/subpage-hero";
import CTAFooter from "@/components/sections/cta-footer";
import Link from "next/link";

export default function BlogPage() {
  const posts = [
    {
      date: "OCT 21, 2025",
      title: "INTRODUCING CARACAL: THE TRUST LAYER FOR THE AGENTIC AGE",
      excerpt: "We launched Caracal as open-source under the AGPLv3 license, providing a transparent, community-driven trust layer for agentic systems.",
      category: "ANNOUNCEMENT"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <main className="flex-grow">
        <SubpageHero 
          badge="OUR BLOG"
          title="THE LATEST FROM CARACAL"
          subtitle="Insights, announcements, and technical deep-dives into the future of agentic security and identity."
        />
        
        <section className="py-24">
          <div className="container max-w-[1408px] mx-auto px-5 sm:px-12 desktop:px-20">
            <div className="grid grid-cols-1 gap-12">
              {posts.map((post, i) => (
                <Link key={i} href="#" className="group">
                  <article className="border border-[#1a1a1a] p-8 sm:p-12 hover:border-[#cdff3e]/30 transition-all bg-[#0a0a0a] flex flex-col md:flex-row gap-12 items-start">
                    <div className="flex flex-col gap-4 min-w-[200px]">
                      <span className="text-[#cdff3e] font-mono text-[12px] font-bold uppercase tracking-widest">{post.category}</span>
                      <span className="text-[#333333] font-mono text-[12px] font-bold uppercase">{post.date}</span>
                    </div>
                    <div className="flex flex-col gap-6">
<h2 className="text-white text-2xl sm:text-3xl font-mono uppercase font-bold leading-tight group-hover:text-[#cdff3e] transition-colors">
{post.title}
</h2>
<p className="text-[#999999] text-base sm:text-lg leading-relaxed max-w-3xl font-sans opacity-80">
{post.excerpt}
</p>

                      <div className="flex items-center gap-2 text-[#cdff3e] font-mono text-[12px] font-bold uppercase tracking-widest">
                        READ MORE 
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-1">
                          <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <CTAFooter />
    </div>
  );
}
