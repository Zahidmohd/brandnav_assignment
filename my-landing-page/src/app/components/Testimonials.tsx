import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="p-6 rounded-lg shadow-md bg-white">
            <p className="text-gray-600 italic mb-4">
              "This product has completely transformed my workflow. I can't imagine going back to the old way of doing things!"
            </p>
            <p className="font-semibold">- John Doe, Company X</p>
          </div>

          {/* Testimonial 2 */}
          <div className="p-6 rounded-lg shadow-md bg-white">
            <p className="text-gray-600 italic mb-4">
              "I was amazed by the ease of use and the powerful features. Highly recommend!"
            </p>
            <p className="font-semibold">- Jane Smith, Company Y</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;