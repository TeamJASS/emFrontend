/* eslint-disable react/prop-types */
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import TrendingEventCard from "../../../components/trendingEventCard";
import { Link } from "react-router-dom";

const Trending = (props) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container mx-auto pb-6 sm:pb-8 md:pb-10 pt-10 sm:pt-16 md:pt-20">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-semibold mb-6 sm:mb-8 md:mb-10">
        Trending Events
      </h2>

      {/* Event Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-8 md:gap-10 p-2">
        {props.events && props.events.length > 0 ? (
          props.events.map((e, i) => <TrendingEventCard key={i} event={e} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No trending events available.
          </p>
        )}
      </div>

      {/* See All Events Button */}
      <Link
        onClick={scrollToTop}
        to="/event-list"
        className="p-3 border-2 border-primary text-primary font-semibold w-[70%] sm:w-[50%] md:w-[25%] 
  mx-auto flex justify-center gap-2 items-center rounded-lg mt-6 sm:mt-8 md:mt-10 hover:bg-primary hover:text-white"
      >
        See All Events
        <ArrowRightIcon className="h-4 w-4 font-bold" />
      </Link>
    </div>
  );
};

export default Trending;
