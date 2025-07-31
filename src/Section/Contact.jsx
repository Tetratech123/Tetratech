import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Information',
        text: 'Please fill in all fields before submitting.',
        confirmButtonColor: '#DB1A13'
      })
      return
    }

    setIsLoading(true)

    try {
      const response = await axios.post('/api/contactApi.js', formData)

      if (response.status==201) {
        // Success response
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully!',
          text: 'Thank you for contacting us. We will get back to you soon.',
          confirmButtonColor: '#DB1A13',
          timer: 3000,
          timerProgressBar: true
        })

        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      }
    } catch (error) {
      // Error response
      let errorMessage = 'Something went wrong. Please try again.'
      
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message
      } else if (error.message) {
        errorMessage = error.message
      }

      Swal.fire({
        icon: 'error',
        title: 'Failed to Send Message',
        text: errorMessage,
        confirmButtonColor: '#DB1A13'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">Send us a Message</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name" 
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm md:text-base" 
            disabled={isLoading}
          />
        </div>
        <div>
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email" 
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm md:text-base" 
            disabled={isLoading}
          />
        </div>
        <div>
          <input 
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="Subject" 
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm md:text-base" 
            disabled={isLoading}
          />
        </div>
        <div>
          <textarea 
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message" 
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-sm md:text-base"
            disabled={isLoading}
          />
        </div>
        <button 
          type="submit" 
          disabled={isLoading}
          className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform shadow-lg text-sm md:text-base ${
            isLoading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-gradient-to-r from-[#DB1A13] to-red-600 text-white hover:from-[#b91610] hover:to-red-700 hover:scale-105'
          }`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </div>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  )
}

export default Contact
