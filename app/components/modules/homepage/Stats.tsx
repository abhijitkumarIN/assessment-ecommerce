import React, { JSX } from "react";

export default function Stats(): JSX.Element {
  const stats = [
    { value: "10K+", label: "Products", desc: "Wide selection" },
    { value: "50K+", label: "Customers", desc: "Worldwide" },
    { value: "98%", label: "Satisfaction", desc: "Rated 5 stars" },
    { value: "24/7", label: "Support", desc: "Always ready" },
  ];

  return (
    <section className="bg-white py-16 border-y border-gray-100">
      <div className="max-w-7xl px-4 mx-auto xl:px-0">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-gray-700 mb-1">{stat.label}</div>
              <div className="text-xs text-gray-500">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
