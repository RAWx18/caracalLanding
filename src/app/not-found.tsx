"use client";

import Link from 'next/link';
import Navbar from '@/components/sections/navbar';
import Footer from '@/components/sections/footer';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <main className="flex-grow flex items-start justify-center px-6 pt-[140px] sm:pt-[230px] pb-40">
        <div className="w-full max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            <div className="lg:w-1/2 flex justify-center lg:justify-start">
              <img
                src="404.avif"
                alt="404 Not Found"
                width={820}
                height={560}
                className="rounded-2xl shadow-2xl object-cover"
              />
            </div>

            <div className="lg:w-1/2 text-center lg:text-left space-y-8 px-4">
              <h1 className="text-5xl md:text-6xl font-mono font-extrabold tracking-tight">Something went wrong</h1>
              <p className="text-xl text-[#bdbdbd] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                The page you requested doesn't exist. It may have been removed, renamed, or the URL is incorrect.
              </p>

              <div className="flex items-center gap-4 justify-center lg:justify-start mt-2">
                <Link href="/" className="inline-flex items-center gap-2 px-6 py-4 bg-[#cdff3e] text-black rounded-md font-mono font-bold text-sm">
                  <ArrowLeft className="w-4 h-4" />
                  Go home
                </Link>

                <button
                  onClick={() => location.reload()}
                  className="px-6 py-4 border border-[#2a2a2a] rounded-md text-sm bg-transparent"
                >
                  Try again
                </button>
              </div>

              <p className="mt-4 text-[12px] text-[#666]">If you followed a link, check the URL. Otherwise, return home or try again.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
