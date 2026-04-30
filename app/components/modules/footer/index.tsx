import React, { JSX } from "react";
import Link from "next/link";
import { BagIcon, FacebookIcon, InstagramIcon } from "../../icons";
export default function Footer(): JSX.Element {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl px-4 mx-auto xl:px-0 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center">
                <BagIcon />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Sembark<span className="text-blue-400">Shop</span></span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Your trusted partner for premium products at unbeatable prices. We bring you the best selection of electronics, fashion, home goods, and more.
            </p>
            <div className="flex gap-3 mt-6">
              <Link href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <FacebookIcon />
              </Link>

              <Link href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <InstagramIcon />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Best Sellers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Sales</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Gift Cards</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Shipping Info</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Returns</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Track Order</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Press</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Partners</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">Subscribe to get special offers and updates</p>
          <div className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 md:w-64 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
            />
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="bg-black/30 py-4">
        <div className="max-w-7xl px-4 mx-auto xl:px-0 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>2026 SembarkShop All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}