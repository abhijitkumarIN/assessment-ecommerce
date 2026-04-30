import React, { JSX, useState } from "react";

export default function Newsletter(): JSX.Element {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail("");
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Get 15% Off Your First Order
        </h2>
        <p className="text-blue-100 mb-8 text-lg">
          Subscribe to our newsletter and receive exclusive offers and the latest product updates.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-5 py-3 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-900 text-sm"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>
        ) : (
          <div className="bg-white/20 backdrop-blur-sm inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Thanks for subscribing! Check your inbox for a confirmation email.
          </div>
        )}

        <p className="text-blue-200 text-sm mt-4">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
