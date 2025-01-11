import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-6 rounded-lg shadow-md">
            {/* Replace with your icon */}
            <div className="text-blue-500 text-4xl mb-4">{/* Icon */}</div> 
            <h3 className="text-xl font-semibold mb-2">Feature Title 1</h3>
            <p className="text-gray-600">
              A brief description of the feature and its benefits.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 rounded-lg shadow-md">
            <div className="text-blue-500 text-4xl mb-4">{/* Icon */}</div>
            <h3 className="text-xl font-semibold mb-2">Feature Title 2</h3>
            <p className="text-gray-600">
              A brief description of the feature and its benefits.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 rounded-lg shadow-md">
            <div className="text-blue-500 text-4xl mb-4">{/* Icon */}</div>
            <h3 className="text-xl font-semibold mb-2">Feature Title 3</h3>
            <p className="text-gray-600">
              A brief description of the feature and its benefits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;