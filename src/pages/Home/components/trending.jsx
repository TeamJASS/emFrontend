import { ArrowRightIcon } from "@heroicons/react/24/solid";
import TrendingEventCard from "../../../components/trendingEventCard";
import { events } from "../../../dataPlaceHolder";
import { Link } from "react-router-dom";

const Trending = () => {
  return (
    <div className="container mx-auto pb-10 pt-20 ">
      <h2 className="text-4xl text-center font-semibold mb-10">
        Trending Events
      </h2>
      <div className="grid grid-cols-4 gap-10">
        {events &&
          events.map((e, i) => {
            return <TrendingEventCard key={i} event={e} />;
          })}
      </div>
      <Link
        to="/event-list"
        className="p-4 border-2 border-primary text-primary font-semibold w-[20%] 
        mx-auto flex justify-center gap-3 align-middle items-center rounded-lg my-10 hover:bg-primary hover:text-white hover:font-semibold"
      >
        See All Events{" "}
        <ArrowRightIcon className="h-5 w-5 text-primary font-bold" />
      </Link>
    </div>
  );
};

export default Trending;
