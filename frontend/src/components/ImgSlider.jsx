import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


const images = [
  "http://www.sgrpgcollege.in/SlidePic/Slide1.jpg",
  "http://www.sgrpgcollege.in/SlidePic/Slide2.jpg",
  "http://www.sgrpgcollege.in/uploads/PhotoGallery/gallery2.jpg",
  // "http://www.sgrpgcollege.in/getThumbNail.php?fl=uploads/PhotoGallery/gallery3.jpg",
  // "http://www.sgrpgcollege.in/getThumbNail.php?fl=uploads/PhotoGallery/gallery8.jpg"
];


const ImgSlider = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for previous

  const nextSlide = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [index]);

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center bg-black overflow-hidden">
      {/* Image Animation */}
      <AnimatePresence custom={direction}>
        <motion.img
          key={images[index]}
          src={images[index]}
          alt="Hero Slide"
          className="absolute w-full h-full object-cover"
          initial={{ x: direction === 1 ? "100%" : "-100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: direction === 1 ? "-100%" : "100%", opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-5 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
      >
        <ChevronLeft size={32} />
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-5 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
      >
        <ChevronRight size={32} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-5 flex space-x-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-gray-500"
              }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImgSlider
