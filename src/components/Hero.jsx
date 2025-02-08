import React from 'react';
import { FloatingCard } from './ui/FloatingCard';
import { ProgressCircle } from './ui/ProgressCircle';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-[#4B7F21] via-[#4B7F21] to-[#1E4D4E] min-h-screen">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 py-8 px-12">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-16">
            <a href="/" className="text-2xl font-bold text-white">Sassto</a>
            <div className="flex gap-8">
              <a href="#" className="text-white/80 hover:text-white">Home</a>
              <a href="#" className="text-white/80 hover:text-white">About</a>
              <a href="#" className="text-white/80 hover:text-white">Feature</a>
              <a href="#" className="text-white/80 hover:text-white">Integration</a>
              <a href="#" className="text-white/80 hover:text-white">Pages</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#9FE870] rounded-full text-xs flex items-center justify-center">0</span>
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <button className="bg-[#9FE870] text-black px-8 py-2 rounded-full">Sign in</button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-8 pt-32 pb-24">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 pt-12">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Essential metrics<br />
              marketing tool for<br />
              your <span className="text-[#59f33a] relative">
                business
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M1 5.5C47.6667 2.33333 141 -0.499999 199 5.5" stroke="#9FE870" strokeWidth="2"/>
                </svg>
              </span>
            </h1>
            <p className="text-white/80 text-lg mt-8 mb-12 max-w-xl">
              At the core of our mission, we are dedicatedly committed to supporting thriving businesses. With unwavering passion, we pave the way for your success.
            </p>

            <div className="relative max-w-lg">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-14 pl-12 pr-40 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#9FE870]"
              />
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#9FE870] text-black px-8 py-3 rounded-full">
                Get started
              </button>
            </div>

            <div className="flex gap-8 mt-8">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#9FE870]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white/80">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#9FE870]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white/80">15 days free trial</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 relative pt-12">
            <div className="relative">
              {/* Background Glow - improved blur and opacity */}
              <div className="absolute inset-0 bg-[#9FE870]/10 rounded-[40px] blur-[60px] transform scale-110"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-[#9FE870]/20 via-[#9FE870]/10 to-transparent backdrop-blur-md rounded-[40px] border border-white/10 shadow-2xl">
                <div className="p-6 lg:p-8">
                  <img 
                    src='https://cdn.prod.website-files.com/66cbfda6f8f0a70bdfa8fb2e/66cc4f9e9baf5f27f4cf2d4f_holding-cell-phone-smiling-smile-adult%201.png' 
                    alt="Hero" 
                    className="relative z-5 w-full h-auto rounded-2xl shadow-lg animate-fadeIn"
                  />

                  {/* Analytics Card - added animation */}
                  <FloatingCard className="absolute -left-8 top-1/2 lg:-left-29 p-6 shadow-xl bg-white/95 backdrop-blur-sm border border-gray-100 animate-slideInLeft hover:scale-105 transition-transform duration-300">
                    <div className="text-sm font-medium text-gray-800 mb-3 animate-fadeIn">Analytics Overview</div>
                    <div className="animate-spin-slow">
                      <ProgressCircle percentage={80} />
                    </div>
                    <div className="flex justify-between mt-4 text-xs font-medium animate-fadeIn delay-300">
                      <div className="flex flex-col items-center hover:-translate-y-1 transition-transform duration-200">
                        <span className="text-gray-600">Sale</span>
                        <span className="text-gray-900 mt-1">64%</span>
                      </div>
                      <div className="flex flex-col items-center hover:-translate-y-1 transition-transform duration-200">
                        <span className="text-gray-600">Distribute</span>
                        <span className="text-gray-900 mt-1">28%</span>
                      </div>
                      <div className="flex flex-col items-center hover:-translate-y-1 transition-transform duration-200">
                        <span className="text-gray-600">Return</span>
                        <span className="text-gray-900 mt-1">8%</span>
                      </div>
                    </div>
                  </FloatingCard>

                  {/* Session Duration Card - added animation */}
                  <FloatingCard className="absolute -right-8 top-1/3 lg:right-5 p-4 shadow-xl animate-slideInRight hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Session Duration</div>
                        <div className="font-medium">2m 18s</div>
                        <div className="text-xs text-green-500">+13%</div>
                      </div>
                    </div>
                  </FloatingCard>

                  {/* Chart Card - added animation */}
                  <FloatingCard className="absolute bottom-16 right-1 -translate-x-1/5 p-6 bg-white/95 backdrop-blur-sm border border-gray-100 shadow-xl animate-slideInUp hover:scale-105 transition-transform duration-300">
                    <div className="w-64">
                      <div className="flex justify-between items-center mb-4 animate-fadeIn">
                        <div>
                          <div className="text-sm font-medium text-gray-800">Monthly Revenue</div>
                          <div className="text-2xl font-bold text-gray-900 animate-countUp">$24,680</div>
                          <div className="text-xs text-green-500 font-medium animate-pulse">↑ 12.5% vs last month</div>
                        </div>
                        <select className="text-sm text-gray-600 border rounded-lg px-2 py-1 hover:border-[#9FE870] transition-colors duration-200">
                          <option>1 Month</option>
                          <option>3 Months</option>
                          <option>6 Months</option>
                        </select>
                      </div>
                      <svg className="w-full h-24 animate-drawLine" viewBox="0 0 200 100" fill="none">
                        <path 
                          d="M0 70 C20 60, 40 80, 60 50 C80 20, 120 40, 140 30 C160 20, 180 40, 200 30" 
                          stroke="#1E4D4E" 
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path 
                          d="M0 70 C20 60, 40 80, 60 50 C80 20, 120 40, 140 30 C160 20, 180 40, 200 30" 
                          stroke="#9FE870" 
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeDasharray="3 3"
                        />
                      </svg>
                    </div>
                  </FloatingCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Special Offer Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#9FE870] py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <div className="inline-flex items-center gap-32">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                Special offer: 10% off on this week
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}