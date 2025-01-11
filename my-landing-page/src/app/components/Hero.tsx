import React from 'react';
import Image from 'next/image'; // For optimized images

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Hero Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Headline of your landing page
          </h1>
          <p className="text-gray-600 text-lg mt-4">
            A concise and engaging description of your product/service. Explain the key benefits and value proposition.
          </p>
          <div className="mt-8 flex space-x-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
              Learn More
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded">
              See Demo
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div>
          <Image src="/hero-image.png" alt="Hero Image" width={500} height={400} /> 
        </div>
      </div>
    </section>
  );
};

export default Hero;