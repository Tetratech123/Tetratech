import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import your product images
import Product1 from '../assets/Products/Image1.jpeg';
import Product2 from '../assets/Products/Image2.jpeg';
import Product3 from '../assets/Products/Image3.jpeg';
import Product4 from '../assets/Products/Image4.jpeg';


const ProductImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Replace with your actual product images
  const productImages = [
    {
      src: Product1,
      alt: "High-Performance Processing System",
      title: "Processing Systems"
    },
    {
      src: Product2,
      alt: "Dairy Equipment",
      title: "Dairy Solutions"
    },
    {
      src: Product3,
      alt: "Pharmaceutical Machinery",
      title: "Pharma Equipment"
    },
    {
      src: Product4,
      alt: "Cosmetics Processing Unit",
      title: "Cosmetics Systems"
    },
  
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [productImages.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? productImages.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === productImages.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#003366] mb-4">Our Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of high-performance systems designed for Food, Dairy, Pharma, and Cosmetics industries.
          </p>
        </div>

        <div className="relative ">
          {/* Main slider container */}
          <div className="relative rounded-lg shadow-lg overflow-hidden bg-gray-100 ">
            <div className="relative h-96 ">
              {productImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-black/20 bg-opacity-20"></div>
                  {/* <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.alt}</p>
                  </div> */}
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md transition-all duration-200"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-[#003366]" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md transition-all duration-200"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-[#003366]" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {productImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-[#003366] scale-110'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Thumbnail strip (optional) */}
          <div className="hidden md:flex justify-center mt-6 space-x-4 overflow-x-auto pb-2">
            {productImages.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  index === currentIndex
                    ? 'border-[#003366] scale-105'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductImageSlider;
