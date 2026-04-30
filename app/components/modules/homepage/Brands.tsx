import Link from "next/link";
import React, { JSX } from "react";

export default function Brands(): JSX.Element {
  const brands = [
    { name: "Apple", url: "#" },
    { name: "Samsung", url: "#" },
    { name: "Sony", url: "#" },
    { name: "Nike", url: "#" },
    { name: "Adidas", url: "#" },
    { name: "Canon", url: "#" },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl px-4 mx-auto xl:px-0">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Trusted Brands
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop with Confidence from Top Brands
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We partner with industry leaders to bring you the best products guaranteed.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {brands.map((brand) => (
            <Link
              key={brand.name}
              href={brand.url}
              className="flex items-center justify-center bg-white rounded-2xl p-6  transition-all duration-300 border-2 border-gray-100"
            >
              <span className="text-2xl font-bold text-gray-600">{brand.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}