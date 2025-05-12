import React from "react";
import service7 from "../../assets/imgs/services/service7.png";
import service8 from "../../assets/imgs/services/service8.png";
import service9 from "../../assets/imgs/services/service9.png";
import service10 from "../../assets/imgs/services/service10.png";

const cardData = [
  {
    title: "UX/UI Designt",
    description: "We craft user-centric, visually engaging designs that enhance digital experiences and customer retention.",
    image: service7,
  },
  {
    title: "Cloud Solutions",
    description: "We provide secure cloud solutions that help businesses scale, cut costs, and boost performance.",
    image: service8,
  },
  {
    title: "Consulting & Strategy",
    description: "Our consultants align with your goals to optimize digital strategy for long-term success and competitiveness.",
    image: service9,
  },
  {
    title: "Quality Assurance & Testing",
    description: "At Pixalive Technology Services, we ensure your products meet the highest standards of quality with our comprehensive Quality Assurance & Testing services.",
    image: service10,
  },
];

const Servicelastcards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-5 mt-1 py-8 max-w-[1230px] mx-auto">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-white border border-[#B0B0B0] p-4 flex flex-col"
        >
          {/* Image */}
          <div className="w-full mb-4">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-[200px] rounded-md object-contain"
            />
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-[24px] font-semibold mb-1">{card.title}</h2>
            <p className="text-[16px] text-[#5D5D5D] leading-relaxed">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Servicelastcards;
