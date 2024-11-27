import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import  { useState } from "react";

const Slider = () => {
    const slides = [
        {
          img: "quote.svg", 
          title: "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
          text: "John Doe",
          smallText: "Chief Strategy Officer @ Company",
        },
        {
          img: "quote.svg", 
          title: "Qorem ipsum dolor sit amet, consectetur adipiscing elit.",
          text: "Danny Trassy",
          smallText: "Chief Strategy Officer @ Company",
        },
        {
          img: "quote.svg", 
          title: "Qorem ipsum dolor sit amet, consectetur adipiscing elit.",
          text: "Den george",
          smallText: "Chief Strategy Officer @ Company",
        },
      ];

      const [currentIndex, setCurrentIndex] = useState(0);

      const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
      };

      const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
      };
    

  return (
    <section className='bg-[#002228]'>
         <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full flex flex-col items-center text-center py-40"
          >
            <img
              src={slide.img}
              alt={`Slide ${index + 1}`}
              className="w-3 h-3   md:w-[25px] md:h-[25px]  "
            />
            <p className="text-2xl  mb-2 py-10 text-white/50">{slide.title}</p>
            <h3 className="text-lg font-bold text-btncolor mb-2">{slide.text}</h3>
            <p className="text-sm text-gray-500">{slide.smallText}</p>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
       <IoIosArrowRoundBack className='rounded-lg' />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
      < IoIosArrowRoundForward />
      </button>

      {/* Indicators */}
      <div className="flex justify-center space-x-2 mb-24">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              currentIndex === index ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
    </section>
  )
}

export default Slider