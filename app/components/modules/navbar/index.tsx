import { JSX, useState } from "react";
import { BagIcon, ProfileIcon, WishListIcon } from "../../icons";
import Link from "next/link";
import Minicart from "./Minicart";

export default function Navbar(): JSX.Element {
    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
            <div className="bg-blue-600 text-white text-xs text-center py-1.5 hidden lg:block">
                <p>Free shipping on orders over $50 • Limited Time Offer: 20% off selected items</p>
            </div>
            <div className="max-w-7xl px-4 mx-auto xl:px-0">
                <div className="flex items-center justify-between py-3">

                    <div className="flex items-center gap-2">
                        <a href="/" className="flex items-center gap-2 shrink-0">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                                <BagIcon />
                            </div>
                            <span className="text-xl font-bold text-gray-900 tracking-tight">Sembark<span className="text-blue-600">Shop</span></span>
                        </a>
                    </div>
                    <div className="hidden md:block flex-1 max-w-xl mx-8">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search for products, categories, brands..."
                                className="w-full pl-14 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm transition-all"
                            />

                        </div>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2">
                        <button
                            type="button"
                            className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors"
                        >
                            <ProfileIcon />
                            <span className="hidden lg:inline">Account</span>
                        </button>

                    

                        <div className="relative">
                            <Minicart />
                        </div>

                        <button
                            type="button"
                            className="md:hidden flex items-center justify-center p-2 text-gray-600 hover:bg-gray-50 rounded-xl transition-colors"
                        >
                            <ProfileIcon />
                        </button>
                    </div>
                </div>
                <div className="hidden lg:flex items-center gap-1 pb-3 overflow-x-auto">
                    {["All", "Electronics", "Clothing", "Home & Kitchen", "Sports", "Books", "Beauty", "Toys"].map((cat) => (
                        <Link
                            key={cat}
                            href="/catalog"
                            className="flex-shrink-0 px-4 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors whitespace-nowrap"
                        >
                            {cat}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
