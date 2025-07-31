import React from 'react'
import { Link } from 'react-router-dom'
import Img1 from "../assets/Food-Beverages-and-Agriculture.webp"
const About = () => {
  return (
    <div className="text-gray-800 bg-white">

      {/* Hero Section */}
      <section className="h-[90vh] bg-cover bg-center relative flex flex-col justify-center items-center text-center px-4 text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80')" }}>
        <div className="absolute inset-0 bg-[#003366]/80 z-0"></div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            About <span className="text-[#DB1A13]">Tetratech</span>
          </h1>
          <p className="text-lg mb-8 text-gray-200">
            Discover our journey, mission, and the passionate team driving innovation forward.
          </p>
          <div className="flex flex-col items-center sm:flex-row gap-4 justify-center">
            <Link href="/about" className="bg-[#DB1A13]  justify-center items-center text-white px-5 py-2.5 text-base font-semibold rounded-full hover:bg-[#b91610] transition">Learn More</Link>
            {/* <a href="#meet-team" className="border-2 border-white text-white px-6 py-2.5 rounded-full font-semibold  hover:bg-white hover:text-[#003366] transition">Meet Our Team</a> */}
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section id="about-company" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-[#003366] mb-6">Our Journey</h2>
            <p className="text-base text-gray-700 mb-4">
              Founded to revolutionize industrial automation and system integration, Tetratech has consistently delivered world-class solutions across multiple sectors.
            </p>
            <p className="text-base text-gray-700 mb-6">
              Our strong commitment to quality and innovation has earned us long-term partnerships and trust worldwide.
            </p>
            <div className="flex space-x-10 mt-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-[#DB1A13]">500+</h3>
                <p className="text-gray-600 text-sm">Projects Completed</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-[#DB1A13]">10+ Yrs</h3>
                <p className="text-gray-600 text-sm">Industry Experience</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-yellow-400">
            <h3 className="text-2xl font-semibold text-[#003366] mb-4">Mission & Vision</h3>
            <div className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-semibold">Mission</h4>
                <p>Empowering industries with robust, efficient, and scalable process technologies.</p>
              </div>
              <div>
                <h4 className="font-semibold">Vision</h4>
                <p>To be the most trusted global partner in engineering solutions by 2030.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#003366] mb-10">Why Choose Tetratech</h2>
          <p className="text-gray-600 text-base max-w-3xl mx-auto mb-12">
            Our team blends deep engineering knowledge with customer-focused solutions. Here’s what makes us your best choice:
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Proven Expertise", desc: "10+ years of delivering process innovation." },
              { title: "Smart Technology", desc: "We implement scalable automation and IoT-based systems." },
              { title: "24/7 Support", desc: "Round-the-clock expert assistance for clients worldwide." },
              { title: "Custom Solutions", desc: "Tailored designs to fit unique industry requirements." },
              { title: "Reliable Partner", desc: "On-time delivery and robust performance." },
              { title: "Value Driven", desc: "High returns on your investments with efficiency-focused design." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
                <h4 className="font-semibold text-lg text-[#003366] mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section id="meet-team" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#003366] mb-10">Meet Our Team</h2>
          <p className="text-gray-600 text-base max-w-3xl mx-auto mb-12">
            A skilled group of professionals dedicated to delivering innovation and excellence.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "John Smith", role: "CEO & Founder" },
              { name: "Sarah Johnson", role: "Chief Technical Officer" },
              { name: "Michael Chen", role: "Lead Systems Engineer" },
              { name: "Emily Davis", role: "Project Manager" }
            ].map((member, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                <div className="w-24 h-24 rounded-full bg-[#003366] mx-auto flex items-center justify-center text-white text-2xl font-bold mb-4">{member.name.charAt(0)}</div>
                <h4 className="text-xl font-semibold text-[#003366] mb-1">{member.name}</h4>
                <p className="text-[#DB1A13] mb-2 text-sm font-medium">{member.role}</p>
                <p className="text-sm text-gray-600">Driving innovation, strategy, and flawless execution at Tetratech.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white text-center">
        <h3 className="text-2xl font-bold text-[#003366] mb-4">Ready to start a project with us?</h3>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">Let’s connect and build something remarkable together.</p>
        <a
          href="https://wa.me/917378751788"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#DB1A13] text-white px-5 py-2.5 text-base font-semibold rounded-full hover:bg-[#b91610] transition"
        >
          Contact Us on WhatsApp
        </a>
      </section>

    </div>
  )
}

export default About
