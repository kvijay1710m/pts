import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const achievements = [
  {
    title: 'Million-Dollar Tech Ventures',
    description:
      "We’ve helped scale startups into multi-million dollar businesses, driving innovation, efficiency, and market leadership across diverse industries.",
    value: 10,
    suffix: '+',
  },
  {
    title: 'Client Projects Delivered',
    description:
      "Successfully completed projects, delivering tailored tech solutions that enhance business performance and create long-term value for our clients.",
    value: 50,
    suffix: '+',
  },
  {
    title: 'Deployed Applications',
    description:
      'Launched over high-performance mobile and web applications, designed to be scalable, user-friendly, and optimized for growth.',
    value: 30,
    suffix: '+',
  },
  {
    title: 'Global User Engagement',
    description:
      'With over daily active users globally, our platforms provide seamless digital experiences, fostering deeper connections and engagement.',
    value: 100,
    suffix: 'K+',
  },
  {
    title: 'Startup Consultations Delivered',
    description:
      'Consulted with entrepreneurs worldwide, offering strategic guidance to accelerate their digital growth, from concept to execution.',
    value: 500,
    suffix: '+',
  },
  {
    title: 'Transactions Powered Daily',
    description:
      'Processing daily transactions securely, we ensure reliable, real-time operations, building trust and efficiency in every interaction.',
    value: 10,
    suffix: 'K+',
  },
];

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Allows re-triggering on every view
    threshold: 0.25,     // Trigger when 25% of the section is visible
  });

  return (
    <div ref={ref} className="max-w-6xl mx-auto px-4 py-5">
      <h2 className="text-[16px] text-black mb-14">7 years in, here is what we have achieved</h2>
      <div className="space-y-10">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:justify-between border-t border-t-[#E7E7E7] pt-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:gap-4 sm:max-w-[75%]">
              <h3 className="text-[32px] w-[350px] font-normal leading-[1.3] tracking-normal align-middle text-gray-800 ">
                {item.title}
              </h3>
              <p className="text-[#5D5D5D] text-sm sm:flex-1 sm:mt-0 mt-2">{item.description}</p>
            </div>
            <div className="mt-4 sm:mt-0 text-[62px] font-normal text-black sm:text-right">
              {inView ? (
                <CountUp
                  key={`countup-${index}-${inView}`} // forces remount when inView changes
                  end={item.value}
                  duration={2}
                  suffix={item.suffix}
                />
              ) : (
                `0${item.suffix}`
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
