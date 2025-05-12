import React from "react";
import service3 from "../../assets/imgs/services/service3.png";
import service4 from "../../assets/imgs/services/service4.webm";

const ServiceCardstwo = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-6 px-8 mt-1 py-8 max-w-[1280px] h-[473px] mx-auto">



            {/* Card 2 - Mobile App Development */}
            <div className="lg:w-[30%] w-full bg-white  border border-[#B0B0B0] p-4 flex flex-col">
                {/* Image */}
                <div className="w-full  mb-4">
                    <img
                        src={service3}
                        alt="Mobile App"
                        className="w-full h-[200px] rounded-md object-contain"
                    />
                </div>

                {/* Text Content */}
                <div className="text-center lg:text-left">
                    <h2 className="text-[24px] font-semibold mb-1">Software & Web Development</h2>
                    <p className="text-[16px] text-[#5D5D5D] leading-relaxed">
                        We build custom software and web solutions to enhance efficiency and fuel business growth.
                    </p>
                </div>
            </div>


            <div className="lg:w-[65%] w-full bg-white border border-[#B0B0B0] p-4 flex flex-col lg:flex-row">
                {/* Video */}
                <div className="w-full mb-4 lg:mb-0 lg:w-[40%]">
                    <div className="aspect-video h-full rounded-md overflow-hidden">
                        <video
                            src={service4}
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
                    <h2 className="text-[24px] font-semibold mb-2">LORA - Live and Video Commerce SaaS</h2>
                    <p className="text-[16px] text-[#5D5D5D] leading-relaxed">
                        LORA(Live One-to-Many Retail Application) is a SaaS platform designed to seamlessly integrate live shopping and video marketing into your website, requiring no technical expertise. With LORA, you can effortlessly embed interactive live streams and shoppable videos directly onto your e-commerce platform. Its user-friendly interface ensures quick setup, allowing you to enhance customer engagement and drive sales through dynamic, real-time content.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCardstwo;
