import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { events } from "../../../dataPlaceHolder";

const Hero = () => {
  return (
    <div className="bg-dark text-white">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
          },
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="bg-dark h-[65vh] "
        loop={true}
      >
        {events.map((event, index) => {
          return (
            <SwiperSlide
              key={index}
              className="bg-center bg-[#1D0E24] bg-cover flex align-bottom items-end justify-center h-full relative"
            >
              <div className="absolute h-[65vh] z-[-1] w-full">
                <img
                  src={event.image}
                  style={{ width: "80%", margin: "auto", display: "block" }}
                  className="object-cover"
                  alt={event.title}
                />
                <div
                  className="absolute inset-0 bg-dark opacity-50"
                  style={{ mixBlendMode: "multiply" }}
                ></div>
              </div>
              <div className="py-20 flex flex-col align-middle justify-center gap-10">
                <h1 className="text-6xl font-semibold">{event.title}</h1>
                <p className="text-2xl">@ {event.location}</p>
                <button className="bg-white text-primary-dark w-[200px] text-md font-bold p-3 px-5 my-5 capitalize rounded-xl shadow-lg hover:shadow-xl hover:bg-primary-dark hover:text-white m-auto">
                  BOOK
                </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="p-6">
        <div className="bg-primary p-10 flex flex-col justify-start align-middle gap-4 w-[70%] m-auto">
          <h1 className="text-5xl font-semibold">Where is the Tukio at?</h1>
          <div className="flex">
            <form className="flex items-center align-middle text-gray-400 w-full gap-1">
              <div className="flex items-center bg-white px-5 w-full max-w-md border border-teal-500 ">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 mr-2" />
                <input
                  type="text"
                  name="location"
                  placeholder="Accra, Ghana"
                  className="px-3 py-3 focus:outline-none focus:border-primary flex-auto"
                />
              </div>
              <select
                name="category"
                className="px-3 py-3 border border-gray-300 focus:outline-none focus:border-primary flex-1"
                placeholder="All"
              >
                <option value="0">All</option>
                <option value="1">This Friday</option>
                <option value="2">This Saturday</option>
                <option value="3">This Sunday</option>
                <option value="4">This Weekend</option>
              </select>
              <select
                name="category"
                className="px-3 py-3 border border-gray-300 focus:outline-none focus:border-primary flex-1"
                placeholder="All Categories"
              >
                <option value="">All Categories</option>
                <option value="1">Clubbing</option>
                <option value="2">Comedy</option>
                <option value="3">Culture</option>
                <option value="4">Festivals</option>
                <option value="5">Live Music</option>
                <option value="6">Meet-ups</option>
                <option value="7">Online</option>
              </select>
              <button
                type="submit"
                className="bg-dark text-white px-5 py-3.5  hover:bg-primary-dark focus:outline-none flex-1 "
              >
                SHOW ME
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
