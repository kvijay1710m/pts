import Hero from './../../assets/Aboutus/aboutusoffice.png'

const AboutSection = () => {
  return (
    <div className="px-6 md:px-20 py-16">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl leading-tight tracking-tight text-gray-900 mb-12">
        At Pixalive Technology Services, we don’t just <br /> build technology—we engineer 
        <br className="hidden md:block" />
        transformation
      </h1>

      {/* Vision, Mission, Goal Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-800 mb-12">
        <div>
          <h3 className="font-semibold mb-2">Our Vision</h3>
          <p className="text-sm text-gray-600">
            To become one of the most trusted global tech enablers—where ideas are transformed into disruptive digital experiences.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Our Mission</h3>
          <p className="text-sm text-gray-600">
            At Pixalive Technology Services, our mission is to revolutionize the digital landscape by delivering intelligent, future-ready solutions that solve real-world challenges.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Our Goal</h3>
          <p className="text-sm text-gray-600">
            We aim to deliver 100+ cutting-edge projects by 2026, expand our presence in global markets, and build a robust ecosystem of products, partners, and platforms.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="overflow-hidden rounded-xl shadow-lg mb-12">
        <img
          src={Hero}
          alt="Office Workspace"
          className="w-full object-cover"
        />
      </div>

      {/* Our Culture Section */}
      <div>
        <h3 className="font-semibold mb-2">Our Culture</h3>
        <p className="text-sm text-gray-600 max-w-3xl">
          At Pixalive Technology Services, culture is the heartbeat <br />of everything we do.We are not just a team—we are a<br /> tribe of dreamers,doers, and disruptors who believe that <br />innovation begins with people, not just products.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
