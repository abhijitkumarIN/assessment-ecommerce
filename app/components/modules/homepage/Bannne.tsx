import React, { JSX } from "react";
import Link from "next/link";
import { CreditCard, Package } from "lucide-react";
import { ChatIcon, PaymentIcon, RightArrowIcon, SearchIcon, TrickIcon } from "../../icons";

export default function Banner(): JSX.Element {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-700 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMSIvPgo8L3N2Zz4K')] opacity-30"></div>
      </div>

      <div className="relative max-w-7xl px-4 mx-auto xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[500px] py-20 lg:py-32">
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              Limited Time - Free shipping on orders over $50
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Premium Quality
              <span className="block text-yellow-300">For Your Lifestyle</span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Discover thousands of curated products from trusted brands. Quality guaranteed, prices you will love, and delivery that's always on time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/catalog"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transform  transition-all shadow-lg hover:shadow-xl"
              >
                Shop Now
                <RightArrowIcon />
              </Link>

              <Link
                href="/catalog"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transform  transition-all"
              >
                <SearchIcon />
                Browse Categories
              </Link>
            </div>

            <div className="hidden lg:flex items-center gap-6 mt-8 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <PaymentIcon />
                Secure Payment
              </div>
              <div className="flex items-center gap-2">
                <TrickIcon />
                Free Returns
              </div>
              <div className="flex items-center gap-2">
                <ChatIcon />
                24/7 Support
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-white/20 rounded-full blur-2xl animate-pulse" />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-4 shadow-2xl border border-white/20">
                <div className="relative w-72 h-72 sm:w-80 sm:h-80">
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
                    alt="Shopping app on mobile device"
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -left-4 bg-white rounded-xl p-3 shadow-xl border border-gray-100 ">
                <div className="flex items-center gap-2">
                  <span className="text-2xl"><Package /></span>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Fast Delivery</div>
                    <div className="text-xs text-gray-500">2-3 days</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-3 shadow-xl border border-gray-100 " >
                <div className="flex items-center gap-2">
                  <span className="text-2xl"><CreditCard /></span>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Secure Payment</div>
                    <div className="text-xs text-gray-500">100% safe</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
