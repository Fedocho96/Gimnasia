import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );

  const nextImage = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const getPreviousIndex = () =>
    currentIndex === 0 ? images.length - 1 : currentIndex - 1;

  const getNextIndex = () =>
    currentIndex === images.length - 1 ? 0 : currentIndex + 1;

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-6xl mx-auto px-4">
      <div className="relative flex items-center justify-center w-full overflow-hidden min-h-[400px] py-8">
        {/* Previous image */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
          <img
            src={images[getPreviousIndex()]}
            alt="Previous slide"
            className="h-40 w-auto object-cover opacity-50 transform scale-90 transition-all duration-300 hover:scale-95 hover:opacity-70"
          />
        </div>

        {/* Current image */}
        <div className="relative z-20">
          <img
            src={images[currentIndex]}
            alt="Current slide"
            className="h-80 w-auto object-cover shadow-xl rounded-lg transition-all duration-300 transform hover:scale-105"
          />
        </div>

        {/* Next image */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
          <img
            src={images[getNextIndex()]}
            alt="Next slide"
            className="h-40 w-auto object-cover opacity-50 transform scale-90 transition-all duration-300 hover:scale-95 hover:opacity-70"
          />
        </div>

        {/* Navigation buttons */}
        <button
          onClick={previousImage}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-30 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-30 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Pagination dots */}
      <div className="flex gap-2 items-center">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-pink-500 w-4"
                : "bg-pink-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
