import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaChevronDown, FaChartLine, FaUsers, FaClipboardList } from 'react-icons/fa';
import HeroSlide from './HeroSlide';

const HeroSection = () => {
  const slides = [
    {
      icon: FaClipboardList,
      title: "Track Your Habits Effortlessly",
      text: "Build positive routines and stay consistent with your daily habits using our intuitive habit tracker.",
      bgClass: "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500",
    },
    {
      icon: FaChartLine,
      title: "Visualize Your Progress",
      text: "View your habit streaks and track progress with detailed analytics that help you stay motivated.",
      bgClass: "bg-gradient-to-r from-green-400 via-teal-500 to-blue-500",
    },
    {
      icon: FaUsers,
      title: "Join Our Community",
      text: "Share your progress, learn from others, and stay motivated by connecting with like-minded people.",
      bgClass: "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600",
    },
  ];

  return (
    <section className="my-10">
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{ 640: { spaceBetween: 20 }, 768: { spaceBetween: 30 }, 1024: { spaceBetween: 40 } }}
        className="w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] rounded-xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <HeroSlide
              icon={slide.icon}
              title={slide.title}
              text={slide.text}
              bgClass={slide.bgClass}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
