import React, { JSX } from "react";
import Link from "next/link";
import ProductCard from "../catalog/ProductCard";
import { ArrowIcon } from "../../icons";

export default function FeaturedProducts(): JSX.Element {
  const products = [
    {
      id: 1,
      title: "Wireless Bluetooth Headphones",
      slug: "wireless-bluetooth-headphones",
      price: 89.99,
      description: "High-quality wireless headphones with noise cancellation and long battery life.",
      category: {
        name: "Electronics",
        slug: "electronics"
      },
      images: [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      ]
    },
    {
      id: 2,
      title: "Smart Watch Series 5",
      slug: "smart-watch-series-5",
      price: 199.99,
      description: "Feature-rich smartwatch with health tracking and smartphone notifications.",
      category: {
        name: "Electronics",
        slug: "electronics"
      },
      images: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      ]
    },
    {
      id: 3,
      title: "Leather Backpack",
      slug: "leather-backpack",
      price: 79.99,
      description: "Durable genuine leather backpack with multiple compartments for daily use.",
      category: {
        name: "Fashion",
        slug: "fashion"
      },
      images: [
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      ]
    },
    {
      id: 4,
      title: "Minimalist Sunglasses",
      slug: "minimalist-sunglasses",
      price: 45.99,
      description: "Classic minimalist sunglasses with UV protection and lightweight frame.",
      category: {
        name: "Fashion",
        slug: "fashion"
      },
      images: [
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      ]
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl px-4 mx-auto xl:px-0">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Featured Products
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Handpicked Selections Just For You
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our curated collection of trending products, carefully selected for quality and style.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={{
                ...product,
                id: Number(product.id.toString()),
              }}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/catalog"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all transform hover:scale-105"
          >
            Shop All Products
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}