import { CreditCard, Lock, Star, Van } from "lucide-react";
import React, { JSX } from "react";
import { RightArrowIcon } from "../../icons";

export default function Market(): JSX.Element {
  const features = [
    {
      icon: <Van />,
      title: "Free Express Shipping",
      desc: "Free delivry on orders over $50. Fast 2-3 day shipping to your door."
    },
    {
      icon: <Lock />,
      title: "100% Secure Checkout",
      desc: "Your payment information is protected with bank-level security encryption"
    },
    {
      icon: <CreditCard />,
      title: "30-Day Returns",
      desc: "Not satisfied? Return any item within 30 days for a full refund."
    },
    {
      icon: <Star />,
      title: "Premium Quality",
      desc: "All products carefully vetted for quality and customer satisfction."
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl px-4 mx-auto xl:px-0">

        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shopping Experience That You Can Trust
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We're committed to providing the best products and services. Your satisfaction is our top priority.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 md:gap-8 gap-3 mb-16">
          {features.map((feature, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 text-center transition-all duration-300 border-2 border-gray-100">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Join Over 50,000 Happy Customers
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Be part of our growing community. Sign up today and get 15% off your first order plus exclusive access to new arrivals.
          </p>
          <button className="bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-gray-100 transition-all cursor-pointer inline-flex items-center gap-2">
            Get Started Now
            <RightArrowIcon />
          </button>
        </div>

        <div className="mt-12">
          <div className="font-semibold text-center text-gray-400 uppercase text-sm tracking-wider">
            Trusted By Leading Brands
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 mt-6 opacity-60">
            <span className="text-2xl font-bold text-gray-500">BLINKIT</span>
            <span className="text-2xl font-bold text-gray-500">ZEPTO</span>
            <span className="text-2xl font-bold text-gray-500">FLIPKART</span>
            <span className="text-2xl font-bold text-gray-500">MISSO</span>
            <span className="text-2xl font-bold text-gray-500">SWIGGY</span>
          </div>
        </div>

      </div>
    </section>
  );
}
