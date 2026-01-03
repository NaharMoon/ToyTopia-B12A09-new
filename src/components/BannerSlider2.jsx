import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  { id: 1, img: "https://i.ibb.co.com/5WzmK4WX/Slider.png" },
  { id: 2, img: "https://i.ibb.co.com/pv2pMSy6/hero.png" },
  { id: 3, img: "https://i.ibb.co.com/5WzmK4WX/Slider.png" },
  { id: 4, img: "https://i.ibb.co.com/pv2pMSy6/hero.png" },
  { id: 5, img: "https://i.ibb.co.com/5WzmK4WX/Slider.png" },
  { id: 6, img: "https://i.ibb.co.com/pv2pMSy6/hero.png" },
  { id: 7, img: "https://i.ibb.co.com/5WzmK4WX/Slider.png" },
  { id: 8, img: "https://i.ibb.co.com/pv2pMSy6/hero.png" },
];

export default function BannerSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      loop
      speed={900}                 // slide চলার smooth speed
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation
      className="rounded-2xl overflow-hidden"
    >
      {slides.map((s) => (
        <SwiperSlide key={s.id}>
          <div className="h-[240px] sm:h-[360px] lg:h-[480px]">
            <img
              src={s.img}
              alt="banner"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
