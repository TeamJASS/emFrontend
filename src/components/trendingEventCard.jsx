/* eslint-disable react/prop-types */
import { HeartIcon, StarIcon } from "@heroicons/react/24/outline";

const TrendingEventCard = (props) => {
  const stars = [];

  // Generate an array of numbers from 0 to (numberOfStars - 1)
  for (let i = 0; i < props.event.rating; i++) {
    stars.push(<StarIcon key={i} className="h-4 w-4 mr-1 text-yellow-500" />);
  }

  return (
    <div className="relative flex flex-col border-gray-300 border-[1px] rounded-lg">
      {/* Category and Favorite Icon */}
      <div className="flex justify-between">
        <button className="absolute text-xs sm:text-sm p-1 text-white left-0 top-0 bg-primary w-[40%] hover:bg-dark rounded-tr-lg">
          {props.event.category}
        </button>
        <HeartIcon className="absolute h-6 w-6 sm:h-7 sm:w-7 text-white font-extrabold right-0 top-0 m-2" />
      </div>

      {/* Event Image */}
      <div className="h-[280px] sm:h-[300px] md:h-[350px]">
        <img
          src={`https://savefiles.org/${props.event.image}?shareable_link=286`}
          alt={props.event.title}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>

      {/* Event Details */}
      <div className="flex flex-col gap-2 p-2 sm:p-3 md:p-4">
        <h4 className="text-base sm:text-lg md:text-xl text-gray-700 font-semibold truncate">
          {props.event.title}
        </h4>
        <div className="flex">{stars}</div>
        <p className="text-gray-400 text-xs sm:text-sm">
          {props.event.date} {props.event.time}
        </p>
        <p className="text-gray-400 text-xs sm:text-sm">
          @ {props.event.location}
        </p>

        {/* Event Genres */}
        <div className="flex gap-2 flex-wrap align-middle items-center my-2">
          {props.event.genres.map((genre, i) => (
            <span
              key={i}
              className="p-1 border-[1px] text-xs sm:text-sm text-secondary rounded-lg border-secondary"
            >
              {genre}
            </span>
          ))}
        </div>

        {/* Price and Booking Section */}
        <div className="flex gap-4 w-full mt-4 sm:mt-6 border-t-gray-300 border-y-[1px] py-2">
          <div className="w-[40%]">
            <h4 className="text-sm sm:text-base md:text-lg text-gray-500">
              From
            </h4>
            <h4 className="text-base sm:text-lg md:text-xl font-bold">
              GHC{props.event.price}
            </h4>
          </div>
          <button className="w-[60%] bg-primary p-2 sm:p-3 md:p-4 text-sm sm:text-lg md:text-xl rounded-lg text-white hover:bg-dark">
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingEventCard;
