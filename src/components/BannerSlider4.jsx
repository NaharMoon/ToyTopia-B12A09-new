import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

const slides = [
   { id: 1, img: "https://i.ibb.co.com/5WzmK4WX/Slider.png" },
  { id: 2, img: "https://i.ibb.co.com/pv2pMSy6/hero.png" },
  { id: 3, img: "https://i.ibb.co.com/5WzmK4WX/Slider.png" },
  { id: 4, img: "https://i.ibb.co.com/pv2pMSy6/hero.png" },
  { id: 5, img: "https://i.ibb.co.com/5WzmK4WX/Slider.png" },
  { id: 6, img: "https://i.ibb.co.com/pv2pMSy6/hero.png" },
  { id: 7, img: "https://i.ibb.co.com/5WzmK4WX/Slider.png" },
  { id: 8, img: "https://i.ibb.co.com/pv2pMSy6/hero.png" },
  { id: 9, img: "https://i.ibb.co.com/5WzmK4WX/Slider.png" },
  { id: 10, img: "https://i.ibb.co.com/5WzmK4WX/Slider.png" },
  { id: 11, img: "https://i.ibb.co.com/5WzmK4WX/Slider.png" },
  { id: 12, img: "https://i.ibb.co.com/5WzmK4WX/Slider.png" },
  { id: 13, img: "https://i.ibb.co.com/5WzmK4WX/Slider.png" },
  { id: 14, img: "https://i.ibb.co.com/5WzmK4WX/Slider.png" },
  { id: 15, img: "https://i.ibb.co.com/5WzmK4WX/Slider.png" },
  { id: 16, img: "https://i.ibb.co.com/5WzmK4WX/Slider.png" },
];

export default function BannerSlider() {
  return (
    <div className="w-11/12 mx-auto">
      <div className="w-8/12 mx-auto">
        <Swiper
        modules={[Autoplay, Pagination, EffectCards]}
        effect="cards"
        grabCursor
        loop
        autoplay={{ delay: 2200, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="h-40 md:h-70 lg:h-100"
      >
        {slides.map((s) => (
          <SwiperSlide key={s.id}>
            <img src={s.img} className="w-full h-full object-cover rounded-2xl" />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
}
