import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      label: 'Total Downloads',
      value: '29.6M',
      description: '21% More Than Last Month',
    },
    {
      label: 'Total Reviews',
      value: '906K',
      description: '46% More Than Last Month',
    },
    {
      label: 'Active Apps',
      value: '132+',
      description: '31 More Will Launch',
    },
  ];

  return (
    <section className="bg-[#7c3aed] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center text-white">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Trusted By Millions, Built For You
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <p className="text-sm opacity-80 mb-2 uppercase tracking-wide">
                {stat.label}
              </p>
              <h3 className="text-5xl md:text-6xl font-extrabold mb-3">
                {stat.value}
              </h3>
              <p className="text-sm opacity-80">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;