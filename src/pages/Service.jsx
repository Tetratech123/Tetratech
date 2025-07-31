import React from 'react';
import bgHero from '../assets/Food-Beverages-and-Agriculture.webp';

const services = [
  "Custom Machine Design",
  "Automated Process Solutions",
  "Energy-Efficient Engineering",
  "Turnkey Project Execution",
  "Industrial Skid Systems",
  "After-Sales Support",
];

const products = [
  "Portable & Modular CIP Systems",
  "PHE & Tubular Pasteurizers",
  "Hot Water Generator",
  "Ribbon Blender & Powder Mixers",
  "Shell & Tube Heat Exchangers",
  "Chilling Units",
];

const steps = [
  {
    title: "1. Consultation",
    desc: "We begin with a deep dive into your unique process requirements and goals.",
  },
  {
    title: "2. Custom Design",
    desc: "Our team crafts tailored machine and system designs based on your specific needs.",
  },
  {
    title: "3. Manufacturing",
    desc: "We manufacture high-performance equipment in our modern facility.",
  },
  {
    title: "4. Installation & Support",
    desc: "Our experts ensure smooth installation and provide ongoing technical support.",
  },
];

const Service = () => {
  return (
    <div className="text-gray-800 bg-white">

      {/* HERO SECTION */}
      <section
        className="relative h-[90vh] flex items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80')" }}
      >
        <div className="absolute inset-0 bg-[#003366]/80 z-0"></div>
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-5xl font-bold mb-6 leading-tight">Services & Solutions</h1>
          <p className="text-lg mb-6">Delivering cutting-edge process systems for the Food, Pharma & Beverage industry.</p>
          <a href="/contact" className="bg-[#DB1A13] inline-flex justify-center items-center text-white px-5 py-2.5 text-base font-semibold rounded-full hover:bg-[#b91610] transition">
            Request a Quote
          </a>
        </div>
      </section>

      {/* SERVICE SECTION */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#003366] mb-10">Our Core Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-[#003366] mb-2">{service}</h3>
                <p className="text-sm text-gray-600">We act as your extended engineering arm with tailored solutions.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT SECTION */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#003366] mb-10">Key Products We Offer</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <div key={idx} className="bg-gray-50 shadow-md rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-[#003366] mb-2">{product}</h3>
                <p className="text-sm text-gray-600">Designed for performance, hygiene, and operational efficiency.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK SECTION */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#003366] mb-10">How We Work</h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto mb-12">
            At Tetra-Tech, we follow a collaborative, transparent, and efficient process to ensure your success at every stage.
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-[#DB1A13] mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#003366] mb-4">Ready to Discuss Your Project?</h2>
          <p className="text-base text-gray-600 mb-8">
            Schedule a call with our experts to explore how we can support your business with custom-engineered solutions.
          </p>
          <a
            href="https://wa.me/917378751788"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#DB1A13] text-white px-5 py-2.5 text-base font-semibold rounded-full hover:bg-[#b91610] transition"
          >
            📞 Schedule a Call
          </a>
        </div>
      </section>

    </div>
  );
};

export default Service;
