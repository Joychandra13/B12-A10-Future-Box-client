import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Fitness Enthusiast",
    text: "This habit tracker helped me build a consistent workout routine. I love seeing my streaks grow!",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Mark Williams",
    role: "Student",
    text: "Tracking my study habits has never been easier. I feel more organized and motivated every day.",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Sophia Lee",
    role: "Professional",
    text: "The reminders and analytics really help me stay on track with my daily goals. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?img=21",
  },
  {
    name: "David Kim",
    role: "Entrepreneur",
    text: "I never realized how powerful habit tracking could be. It changed my productivity game!",
    avatar: "https://i.pravatar.cc/150?img=45",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="w-full py-16 bg-common">
      <div className="text-center mb-12 px-6">
        <h2 className="text-4xl lg:text-6xl text-white mb-4">
          What Our <span className="font-bold">Users Say</span>
        </h2>
      </div>

      <Swiper
        slidesPerView={1} // full width per slide
        spaceBetween={0}
        centeredSlides={false}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination]}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="w-full flex flex-col md:flex-row items-center justify-center px-6 py-16 gap-8 md:gap-16 text-white max-w-6xl mx-auto">
              {/* Avatar on left */}
              <div className="flex-shrink-0">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>

              {/* Text on right */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-lg md:text-xl mb-4">"{testimonial.text}"</p>
                <h4 className="text-xl md:text-2xl font-semibold">{testimonial.name}</h4>
                <span className="text-white/70">{testimonial.role}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialsSection;
