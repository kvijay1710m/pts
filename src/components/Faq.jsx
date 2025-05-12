import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: 'What services do you offer?',
        answer:
            'We offer UI/UX design, web and mobile app design, branding, logo creation, product design, and visual storytelling for digital products.',
    },
    {
        question: 'What industries do you work with?',
        answer:
            'We work with industries including fintech, e-commerce, healthcare, education, and entertainment.',
    },
    {
        question: 'What is your design process?',
        answer:
            'Our design process includes research, wireframing, prototyping, user testing, and visual design implementation.',
    },
    {
        question: 'Do you offer development services?',
        answer:
            'Yes, we provide frontend and backend development services using modern frameworks and technologies.',
    },
    {
        question: 'How long does a project take?',
        answer:
            'Project timelines vary, but most projects are completed within 6–12 weeks depending on complexity and scope.',
    },
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-[1270px] mx-auto py-16">
            <div className="bg-white w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-20 py-12">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
                    {/* Left Section */}
                    <div className="flex-1 -translate-x-2 sm:-translate-x-4 transform">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                            Frequently<br />
                            Asked <br />
                            Questions
                        </h2>
                    </div>
                </div>

                {/* Flex row for content */}
                <div className="flex flex-col lg:flex-row gap-6 mt-8">
                    {/* Left content */}
                    <div className="w-full lg:w-1/2">
                        <p className="text-base sm:text-lg md:text-xl text-gray-700"></p>
                    </div>

                    {/* Right content */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-4">
                        <p className="text-base sm:text-lg md:text-xl text-black">
                            We’ve built long-lasting partnerships
                            with the most ambitious brands
                            across the globe
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-20 p-2 space-y-4 max-w-[990px] ml-auto pr-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border-b pb-4"
                        style={{ borderColor: '#E7E7E7' }}
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="flex justify-between items-center w-full text-left text-base md:text-lg font-medium py-4"
                        >
                            <span>{`${index + 1}. ${faq.question}`}</span>
                            <div
                                className="cursor-pointer border border-gray-300 rounded-full p-1 hover:bg-gray-100 transition"
                            >
                                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                            </div>
                        </button>
                        <div
                            className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                openIndex === index ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
                            }`}
                        >
                            <p className="text-[18px] text-[#5D5D5D]">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;