import React, { JSX } from "react";

export default function Testimonials(): JSX.Element {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Graphic Designer",
      rating: 5,
      text: "I've been shopping here for over a year and I'm always impressed with the quality and speed of delivery. The customer service is exceptional!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Software Engineer",
      rating: 4.5,
      text: "Great products at fair prices. The website is easy to navigate and the checkout process is smooth. Highly recommend!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Fitness Trainer",
      rating: 5,
      text: "The product selection is amazing and I love that they offer eco-friendly options. Fast shipping and easy returns make shopping a pleasure.",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl px-4 mx-auto xl:px-0">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            What Our Customers Say
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Stories, Real Satisfaction
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Hear from our valued customers about their experiences with our products and service.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-2xl p-6  transition-all duration-300 border-2 border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name}'s photo`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <div className="text-yellow-400 space-x-1">
                      {[1, 2, 3, 4, 5].map((star, index) => (
                        <span key={index}>
                          {index < testimonial.rating ? "★" : "☆"}
                        </span>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-500">
                      ({testimonial.rating}/5)
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}