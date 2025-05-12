import React, { useState } from "react";

const testimonials = [
    {
        name: "Rajaseker sundaresan",
        company: "Pixalive tech network",
        location: "Bengaluru, India",
        image: '../assets/imgs/home/testimonial.png',
        quote: "PIXALIVE TECHNOLOGY SERVICES is one of the India’s fastest growing Software Development Company",
        users: "10k",
        growth: "99%",
    },
    {
        name: "Devendar Penugonda",
        company: "Krishivan Technologies",
        location: "Bengaluru, India",
        image: "/images/devendar.jpg",
        quote: "Krishivan is transforming sustainable agriculture using tech innovation with massive user adoption.",
        users: "8k",
        growth: "94%",
    },
    {
        name: "Justin",
        company: "Health Plan Markets",
        location: "Orlando FL",
        image: "/images/justin.jpg",
        quote: "Health Plan Markets scaled quickly with the strategic tech partnership we formed.",
        users: "12k",
        growth: "98%",
    },
];

export default function TestimonialsTabs() {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = testimonials[activeIndex];

    return (
        <div className="p-4 md:p-10 w-full md:w-[1280px] mx-auto mt-10">
            <div className="flex justify-between items-start flex-wrap gap-2">
                <h4 className="text-black text-[18px] mb-2">
                    What Our Clients Say
                </h4>
                <h2 className="text-2xl md:text-3xl font-normal text-start w-full md:w-[700px] leading-[150%] mb-2">
                    Our clients share real stories of growth, trust, and successful collaboration with us.
                </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-6 mt-[40px] md:mt-[60px]">
                {/* Tabs */}
                <div className="flex flex-col md:flex-col gap-4 w-full md:w-1/4">
                    {testimonials.map((client, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`text-left cursor-pointer p-3 border-t border-b ${idx === activeIndex
                                ? "font-bold text-black border-t-black border-b-black"
                                : "text-[#B0B0B0]"
                                }`}
                        >
                            <p className="text-[20px]">{client.name}</p>
                            <p className="text-sm">{client.company}</p>
                            <p className="text-xs">{client.location}</p>
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 w-full">
                    {/* Image */}
                    <div className="w-full md:w-1/3 -mt-2 md:-mt-9">
                        <img
                            src={active.image}
                            alt={active.name}
                            className="rounded-md w-full h-auto object-cover"
                        />
                    </div>

                    {/* Quote */}
                    <div className="w-full md:w-1/3">
                        <p className="text-md">“{active.quote}”</p>
                    </div>

                    {/* Stats */}
                    <div className="w-full md:w-1/3 flex flex-col md:gap-10 gap-4">
                        <div className="bg-white p-4 text-center shadow-sm rounded-md">
                            <p className="text-[19px] text-black">Active Users</p>
                            <p className="text-[36px] font-normal">{active.users}</p>
                        </div>
                        <div className="bg-white p-4 text-center shadow-sm rounded-md">
                            <p className="text-[19px] text-black">Agent Growth</p>
                            <p className="text-[36px] font-normal">{active.growth}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
