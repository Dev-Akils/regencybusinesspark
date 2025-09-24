
import  { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectCoverflow } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-coverflow";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";


// Import images
import image1 from "../assets/images/legacy_01.png";
import image2 from "../assets/images/legacy_02.png";
import image3 from "../assets/images/legacy_03.png";
import image4 from "../assets/images/legacy_04.png";
import image5 from "../assets/images/legacy_05.png";

// TypeScript interface
interface Slide {
  year: string;
  image: string;
  text: string;
}

// Slide data
const slides: Slide[] = [
  { year: "1959", image: image1, text: "800 WELL-PLANNED SPACES FOR PARKING" },
  { year: "1965", image: image2, text: "POWER BACKUP FOR COMMON AREAS" },
  { year: "1970", image: image3, text: "FIRE SAFETY AND EMERGENCY SYSTEM" },
  { year: "1975", image: image4, text: "3 HIGH SPEED ELEVATORS IN EACH WING" },
  { year: "1980", image: image5, text: "24X7 SECURITY AND SURVEILLANCE" },
];

export default function Facilities() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="flex flex-col h-screen items-center justify-center bg-gradient-to-r from-[#072d4b] to-[rgb(17,37,60)] text-white py-12">
      {/* Header */}
      <div className="flex flex-col items-center justify-center p-4 text-center mb-8">
        <h2 className="text-5xl font-normal mb-5">A Future-Ready Business Hub</h2>
        <button className="w-full md:max-w-[26rem] p-2 rounded-lg bg-white text-blue-950 flex items-center justify-center space-x-2 hover:bg-blue-950 hover:text-white transition-all duration-300 shadow-lg">
          <span className="md:text-lg">Enhanced with convenience, safety & efficiency</span>
        </button>
      </div>

      {/* Swiper */}
      <div className="w-full max-w-[1200px] px-6">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          modules={[EffectCoverflow, Autoplay]}
          className="timeline-swiper"
          speed={800}
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col items-center justify-center transition-transform duration-500 ease-in-out"
            >
              <img
                src={slide.image}
                alt={`Legacy ${slide.year}`}
                className="rounded-lg w-[300px] h-[250px] object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Active slide text */}
      <div className="flex flex-col items-center justify-center max-w-[700px] mt-6 text-center px-4">
        <p className="text-lg">{slides[activeIndex]?.text}</p>
      </div>
    </section>
  );
}
