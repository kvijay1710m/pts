import React from 'react';

const Strategy = () => {
  return (
    <div className="mt-10 max-w-[1280px] mx-auto">
      <section className="w-[1280px] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          {/* Left Label */}
          <div className="max-w-[1280px] md:w-1/4">
            <p className="text-sm sm:text-base font-medium text-black">
              Our Strategy
            </p>
          </div>

          {/* Right Main Text */}
          <div className="w-full md:flex-1 max-w-3xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-black leading-snug">
              We drive business transformation<br />
              through innovative, client-focused, and<br />
              sustainable solutions
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Strategy;
