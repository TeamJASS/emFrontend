/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";
// import { events } from "../../../dataPlaceHolder";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { events } from "../../../dataPlaceHolder";

const Hero = (props) => {
  const [startDate, setStartDate] = useState();
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (city) params.append("city", city);
    if (category) params.append("category", category);
    if (startDate) params.append("date", startDate.toISOString().split("T")[0]);
    navigate(`/event-list?${params.toString()}`);
  };

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
        {props.events.map((event, index) => {
          return (
            <SwiperSlide
              key={index}
              className="bg-center bg-[#1D0E24] bg-cover flex align-bottom items-end justify-center h-full relative"
            >
              <div className="absolute h-[65vh] z-[-1] w-full">
                <img
                  src={`https://savefiles.org/${event.image}?shareable_link=286`}
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
            <form
              onSubmit={handleSubmit}
              className="flex items-center align-middle text-gray-400 w-full gap-1"
            >
              <select
                name="city"
                className="px-3 py-3 border border-gray-300 focus:outline-none focus:border-primary flex-1"
                placeholder="Location(city)"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                <option value="">All Cities</option>
                <option value="Accra">Accra</option>
                <option value="Kumasi">Kumasi</option>
                <option value="Cape Coast">Cape Coast</option>
                <option value="Takoradi">Takoradi</option>
              </select>
              <select
                name="category"
                className="px-3 py-3 border border-gray-300 focus:outline-none focus:border-primary flex-1"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                <option value="Clubbing">Clubbing</option>
                <option value="Comedy">Comedy</option>
                <option value="Culture">Culture</option>
                <option value="Festivals">Festivals</option>
                <option value="Live Music">Live Music</option>
                <option value="Meet-ups">Meet-ups</option>
                <option value="Online">Online</option>
              </select>
              <DatePicker
                className="px-3 py-3 border border-gray-300 focus:outline-none focus:border-primary flex-1"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="MM/yyyy"
                showMonthYearPicker
                placeholderText="Month & Year"
              />
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
