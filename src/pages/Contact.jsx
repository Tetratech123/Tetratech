import React, { useState } from 'react'
import ContactSection from '../Section/Contact'
import { Link } from 'react-router-dom'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="text-gray-800">
      {/* Hero Section */}
  <section className="h-[90vh] bg-cover bg-center relative flex flex-col justify-center items-center text-center px-4 text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80')" }}>
        <div className="absolute inset-0 bg-[#003366]/80 z-0"></div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
           Contact <span className="text-[#DB1A13]">Us</span>
          </h1>
          <p className="text-lg mb-8 text-gray-200">
           Ready to start your next project? Get in touch with our expert team to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to='/about' className="bg-[#DB1A13] text-white px-5 py-2.5 text-base font-semibold rounded-full hover:bg-[#b91610] transition w-fit">Learn More</Link>
            {/* <a href="#meet-team" className="border-2 border-white text-white px-6 py-2.5 rounded-full font-semibold  hover:bg-white hover:text-[#003366] transition">Meet Our Team</a> */}
          </div>
        </div>
      </section>


      {/* Contact Details & Form Section */}
          <section className="py-12 md:py-16 px-4 md:px-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">Get in Touch</h2>
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white p-5 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">Address</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">Plot No. A130, Loni Deokar MIDC, Indapur, Pune – 413132, Maharashtra, India</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">Email</h3>
                  <p className="text-sm md:text-base text-gray-600">tetratech.engg@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">WhatsApp</h3>
                  <p className="text-sm md:text-base text-gray-600">+91 73787 51788</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
       <ContactSection/>
        </div>
      </section>

      {/* Map Integration Section */}
      <section className="py-12 md:py-16 px-4 md:px-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">
          Find <span className="text-[#DB1A13]">Our Office</span>
        </h2>
        <p className="text-base md:text-lg text-center max-w-3xl mx-auto text-gray-700 mb-8 leading-relaxed">
          Visit us or schedule a meeting to discuss your project in person.
        </p>
        <div className="relative rounded-xl overflow-hidden shadow-2xl h-64 md:h-80 lg:h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9942415259437!2d72.82266801744384!3d19.04591708711033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce9e7c3b6b1d%3A0x3b3b3b3b3b3b3b3b!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Tetratech Office Location"
            className="absolute inset-0"
          ></iframe>
          <div className="absolute top-3 left-3 bg-white p-4 rounded-xl shadow-lg max-w-xs">
            <h4 className="text-base md:text-lg font-semibold text-gray-800 mb-2">Tetratech Office</h4>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              123 Tech Street<br />
              Business District<br />
              Mumbai, Maharashtra 400001
            </p>
            <div className="mt-3">
              <a
                href="https://maps.google.com/?q=Mumbai,Maharashtra,India"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#DB1A13] hover:text-[#b91610] transition-colors text-sm md:text-base font-semibold"
              >
                Get Directions
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
     <div className="text-center mt-12 bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-lg">
  <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800">Ready to Work With Us?</h3>
  <p className="text-sm md:text-base text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
    Let's discuss how our team can help bring your vision to life.
  </p>
  <a
    href="https://wa.me/917378751788"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-gradient-to-r from-[#DB1A13] to-red-600 text-white px-5 py-2.5 text-base font-semibold rounded-full hover:from-[#b91610] hover:to-red-700 transition-all duration-300"
  >
    Get In Touch
  </a>
</div>
      </section>
    </div>
  )
}

export default Contact