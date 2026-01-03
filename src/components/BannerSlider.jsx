// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/effect-fade";

// _________________2_______________

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
// 22222222222222222222222222

const slides = [
  {
    id: 1,
    title: "All New Best Latest",
    subtitle: "Toy Collection",
    desc: "Discover safe, colorful and fun toys from local sellers.",
    img: "https://i.ibb.co.com/pv2pMSy6/hero.png",
  },
  {
    id: 1,
    title: "All New Best Latest",
    subtitle: "Toy Collection",
    desc: "Discover safe, colorful and fun toys from local sellers.",
    img: "https://i.ibb.co.com/5WzmK4WX/Slider.png",
  },
  {
    id: 2,
    title: "Learning Through",
    subtitle: "Play Time",
    desc: "Educational toys that boost creativity and problem-solving.",
    img: "https://i.ibb.co.com/pv2pMSy6/hero.png",
  },
  {
    id: 3,
    title: "Soft, Safe &",
    subtitle: "Kids Friendly",
    desc: "A playful marketplace for kids’ favorite collections.",
    img: "https://i.ibb.co.com/5WzmK4WX/Slider.png",
  },
];

export default function BannerSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
      effect="coverflow"
      centeredSlides
      slidesPerView={1.2}
      coverflowEffect={{
        rotate: 0,
        depth: 120,
        modifier: 1,
        slideShadows: false,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop = {true}
      speed={900}
      pagination={{ clickable: true }}
      navigation
      className="py-6"
    >
      {slides.map((s) => (
        <SwiperSlide key={s.id}>
          {({ isActive }) => (
            <div className="relative h-[240px] sm:h-[360px] lg:h-[420px] rounded-2xl overflow-hidden">
              
              {/* image */}
              <img
                src={s.img}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40" />

              {/* text */}
              <div className="relative z-10 h-full flex items-center px-6">
                <div
                  key={isActive ? "active" : "inactive"} 
                  className={`max-w-xl transition-all duration-700
                    ${isActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                    }`}
                >
                  <h1 className="text-white text-3xl sm:text-5xl font-bold">
                    {s.title}
                  </h1>
                  <p className="text-white/90 mt-3">
                    {s.desc}
                  </p>
                </div>
              </div>

            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}


// 1111111111111111111__________________below
// export default function BannerSlider() {
//   return (
//     <section className="w-full">
//       <Swiper
//         modules={[Autoplay, Pagination, Navigation, ]}
//         // effect="fade"
//         // fadeEffect={{ crossFade: true }}
//         loop={true}
//         speed={900}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: true,
//         }}
//         pagination={{ clickable: true }}
//         navigation={true}
//         className="rounded-2xl overflow-hidden"
//       >
//         {slides.map((s) => (
//           <SwiperSlide key={s.id}>
//             <div className="relative h-[240px] sm:h-[360px] lg:h-[480px]">
//               {/* Background image with slow zoom animation */}
//               <img
//                 src={s.img}
//                 alt={`${s.title} ${s.subtitle}`}
//                 className="absolute inset-0 h-full w-full object-cover banner-kenburns"
//               />

//               {/* Soft overlay for readability */}
//               <div className="absolute inset-0 " />
//               {/* bg-black/35 add this className for darker or shadow */}

//               {/* Content */}
//               <div className="relative z-10 h-full flex items-center">
//                 <div className="max-w-6xl mx-auto px-5 w-full">
//                   <div className="max-w-xl">
//                     <p className="text-base-200/90 text-sm sm:text-base tracking-wide banner-text">
//                       Get up to 25% discount
//                     </p>

//                     <h1 className="text-white text-3xl sm:text-5xl font-extrabold leading-tight banner-text">
//                       {s.title} <br />
//                       <span className="text-white/95">{s.subtitle}</span>
//                     </h1>

//                     <p className="text-white/90 mt-3 sm:mt-4 banner-text">
//                       {s.desc}
//                     </p>

//                     {/* CTA optional (assignment এ button বাধ্যতামূলক না) */}
//                     <div className="mt-5 banner-text">
//                       <button className="btn btn-secondary rounded-full px-6">
//                         Explore Toys
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* cute bottom fade */}
//               <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/35 to-transparent" />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }
