import React from 'react';
import innovationImg from '../assets/imgs/home/cardicon1.png';
import customerImg from '../assets/imgs/home/cardicon2.png';
import scalableImg from '../assets/imgs/home/cardicon3.png';

const CardsHome = () => {
  const cards = [
    {
      image: innovationImg,
      title: 'Innovation at the Core',
      description:
        'We continuously innovate to provide businesses with the most advanced technologies, helping them stay ahead in a rapidly evolving digital landscape.',
    },
    {
      image: customerImg,
      title: 'Customer Centric Excellence',
      description:
        'We focus on understanding our clients’ needs and crafting bespoke solutions that deliver real, measurable impact, ensuring maximum value from every partnership.',
    },
    {
      image: scalableImg,
      title: 'Scalable Success',
      description:
        'Our solutions are designed with scalability in mind, enabling businesses to grow seamlessly as they expand into new markets or increase their operational capacity.',
    },
  ];

  return (
    <div className="px-4 py-10 md:px-10 lg:px-20 bg-white mb-16 max-w-[1280px] mx-auto">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white border border-[#5D5D5D]/20 rounded-sm p-6 hover:shadow-md transition-shadow duration-300 h-[400px]"
            >
            <img
              src={card.image}
              alt={card.title}
              className="w-8 h-8 mb-7"
            />
            <h3 className="text-[24px] w-[220px] font-normal mb-2 mt-[100px]">{card.title}</h3>
            <p className="text-[16px] text-[#5D5D5D] mt-7">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsHome;
