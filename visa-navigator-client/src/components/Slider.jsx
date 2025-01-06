import { useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Slider = () => {
  const slides = [
    "https://images.pexels.com/photos/321159/pexels-photo-321159.jpeg",
    "https://images.pexels.com/photos/7009611/pexels-photo-7009611.jpeg",
    "https://images.pexels.com/photos/7235894/pexels-photo-7235894.jpeg",
    "https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg",
    "https://images.pexels.com/photos/8830672/pexels-photo-8830672.jpeg",
  ]; // Replace with your image paths
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative rounded-lg w-full h-60 md:h-80 lg:min-h-[450px] overflow-hidden bg-gray-200 dark:bg-gray-800">
      {/* Slider Images */}
      <div
        className="flex  relative  transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className="rounded-lg w-full h-full inset-0 object-cover object-center"
          />
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white/50 p-2 rounded-full shadow-lg hover:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-500"
      >
        <MdArrowBackIos size={24} />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white/50 p-2 rounded-full shadow-lg hover:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-500"
      >
        <MdArrowForwardIos size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index
                ? "bg-green-500 dark:bg-green-400"
                : "bg-gray-400 dark:bg-gray-600"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
