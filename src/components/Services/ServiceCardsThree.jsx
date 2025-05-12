import React from "react";
import service1 from "../../assets/imgs/services/service5.mp4";
import service2 from "../../assets/imgs/services/service6.png";

const ServiceCardsThree = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-6 px-8 mt-2 py-8 max-w-[1280px] h-[473px] mx-auto">
            {/* Card 1 - End to End Development */}
            <div className="lg:w-[65%] w-full bg-white border border-[#B0B0B0] p-4 flex flex-col lg:flex-row">
                {/* Video */}
                <div className="w-full mb-4 lg:mb-0 lg:w-[40%]">
                    <div className="aspect-video h-full rounded-md overflow-hidden">
                        <video
                            src={service1}
                            className=" h-full w-[360px] "
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    </div>
                </div>

                {/* Text Content */}
                <div className="w-full lg:pl-6 flex flex-col justify-center lg:w-[50%]">
                    <h2 className="text-[24px] font-semibold mb-2">Live Broadcast SDK</h2>
                    <p className="text-[16px] text-[#5D5D5D] leading-relaxed">
                       crafted by developers, for developers. With just a few lines of code, seamlessly integrate robust, feature-rich live streaming capabilities into your applications. Our SDK offers ultra-low latency, cross-platform support, and interactive features like real-time chat, screen sharing, and adaptive bitrate streaming. Whether you're building for web, mobile, or desktop, our solution ensures a scalable, high-performance live experience tailored to your needs.
                    </p>
                </div>
            </div>


            {/* Card 2 - Mobile App Development */}
            <div className="lg:w-[30%] w-full bg-white  border border-[#B0B0B0] p-4 flex flex-col">
                {/* Image */}
                <div className="w-full mb-4">
                    <img
                        src={service2}
                        alt="Mobile App"
                        className="w-full h-auto rounded-md object-contain"
                    />
                </div>

                {/* Text Content */}
                <div className="text-center lg:text-left">
                    <h2 className="text-[24px] font-semibold mb-1">Blockchain & AI Integrations</h2>
                    <p className="text-[16px] text-[#5D5D5D] leading-relaxed">
                        We leverage blockchain and AI to boost security, automate workflows, and drive innovation.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCardsThree;
