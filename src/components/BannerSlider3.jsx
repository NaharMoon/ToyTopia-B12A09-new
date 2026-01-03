import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

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
      modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
      effect="coverflow"
      centeredSlides
      slidesPerView={1.2} // mobile এ card-like
      breakpoints={{
        640: { slidesPerView: 1.3 },
        1024: { slidesPerView: 1.6 },
      }}
      coverflowEffect={{
        rotate: 12,
        stretch: 0,
        depth: 180,
        modifier: 1,
        slideShadows: false,
      }}
      loop
      speed={900}
      autoplay={{ delay: 2200, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation
      className="py-4"
    >
      {slides.map((s) => (
        <SwiperSlide key={s.id}>
          <div className="rounded-2xl overflow-hidden h-[220px] sm:h-[320px] lg:h-[420px] shadow-md">
            <img src={s.img} alt="banner" className="w-full h-full object-cover" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
