"use client";

import { useState, useEffect } from "react";
import Image from 'next/image';
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function EarlyAccessPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Registration successful! Check your email.");
        setFormData({ firstName: "", lastName: "", email: "", company: "" });
      } else {
        toast.error(data.error || "Something went wrong.");
      }
    } catch (error) {
      toast.error("Failed to connect to the server.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-white font-sans">
      <Navbar />
      <main className="flex-grow flex items-center justify-center px-6 pt-[116px] sm:pt-[160px]">
        <div className="w-full max-w-[1200px]">
            <div className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="order-1 lg:order-1">
              <div className="mb-6">
              <h1 className={`text-4xl md:text-5xl font-mono font-bold tracking-tighter mb-4 text-[#cdff3e] transition-transform duration-700 will-change-transform`}>REQUEST ACCESS</h1>
              <p className="text-[#999999] text-lg max-w-md">Join the waitlist for Caracal Enterprise. Infrastructure for trusted AI agents.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-widest text-[#666]">First Name</label>
              <input
                required
                type="text"
                placeholder="RYAN"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full bg-black border border-[#1a1a1a] p-4 text-white font-mono focus:border-[#cdff3e] focus:outline-none transition-colors"
              />
              </div>
              <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-widest text-[#666]">Last Name</label>
              <input
                required
                type="text"
                placeholder="CARACAL"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full bg-black border border-[#1a1a1a] p-4 text-white font-mono focus:border-[#cdff3e] focus:outline-none transition-colors"
              />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-widest text-[#666]">Business Email</label>
              <input
              required
              type="email"
              placeholder="RYAN@GARUDEXLABS.COM"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-black border border-[#1a1a1a] p-4 text-white font-mono focus:border-[#cdff3e] focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-widest text-[#666]">Company / Organization</label>
              <input
              required
              type="text"
              placeholder="GARUDEX LABS"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full bg-black border border-[#1a1a1a] p-4 text-white font-mono focus:border-[#cdff3e] focus:outline-none transition-colors"
              />
            </div>

            <button
              disabled={isLoading}
              type="submit"
              className="w-full bg-[#cdff3e] text-black font-mono font-bold py-5 mt-4 hover:bg-[#b8e637] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                PROCESSING...
              </>
              ) : (
              "REQUEST EARLY ACCESS"
              )}
            </button>
              </form>

              <p className="mt-8 text-[10px] font-mono text-[#444] uppercase tracking-[0.2em]">
              By requesting access you agree to our terms of service and privacy policy.
              </p>
            </div>

            <div className="order-2 lg:order-2 flex justify-center lg:justify-end mt-6 lg:mt-18">
              <div className="relative w-[320px] h-[220px] sm:w-[550px] rounded-md overflow-visible">
              <img
                src="/early.jpg"
                alt="Decorative"
                className="object-cover rounded-md"
              />
              </div>
            </div>
            </div>

          <style jsx>{`
            .abs-bracket{
              position: absolute;
              top: 12px;
              font-family: monospace;
              font-size: 48px;
              color: rgba(255,255,255,0.06);
              transition: transform 420ms cubic-bezier(.2,.9,.2,1), color 240ms ease;
              pointer-events: none;
              text-shadow: 0 8px 32px rgba(0,0,0,0.6);
            }
            .abs-bracket.left{ left: -36px; transform: translateY(6px) }
            .abs-bracket.right{ right: -36px; transform: translateY(6px) }
            .relative:hover .abs-bracket.left{ transform: translate(-6px,-6px) rotate(-6deg); color: rgba(205,255,62,0.65) }
            .relative:hover .abs-bracket.right{ transform: translate(6px,-6px) rotate(6deg); color: rgba(205,255,62,0.65) }
            @media (max-width: 1024px){
              .abs-bracket{ display: none }
            }
          `}</style>
        </div>
      </main>

      <Footer />
    </div>
  );
}
