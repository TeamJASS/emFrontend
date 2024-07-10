/* eslint-disable react/prop-types */

import { StarIcon } from "@heroicons/react/24/outline";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const AdminEventCard = (props) => {
  const stars = [];

  // Generate an array of numbers from 0 to (numberOfStars - 1)
  for (let i = 0; i < props.event.rating; i++) {
    stars.push(<StarIcon key={i} className="h-4 w-4 mr-1 text-yellow-500" />);
  }

  return (
    <div className="relative flex flex-col border-gray-300 border-[1px] rounded-lg ">
      <div className="flex justify-between">
        <button
          className="absolute text-sm p-1  left-0 top-0   hover:bg-dark"
          onClick={props.onDelete}
        >
          <TrashIcon className="h-8 w-8 text-red-700 bg-white rounded-full" />
        </button>
      </div>
      <div className="h-[200px]">
        <img
          src={`https://savefiles.org/${props.event.image}?shareable_link=286`}
          alt={props.event.title}
          style={{ width: "100%", height: "200px" }}
          className="rounded-t-lg"
        />
      </div>
      <div className="flex flex-col gap-2 p-2">
        <h4 className="text-xl text-gray-700 font-semibold truncate">
          {props.event.title}
        </h4>
        <div className="flex">{stars}</div>
        <p className="text-gray-400 text-sm">
          {props.event.date} {props.event.time}
        </p>
        <p className="text-gray-400 text-sm">@ {props.event.location}</p>
        <div className="flex gap-4 align-middle items-center my-2">
          {props.event.genres.map((genre, i) => {
            return (
              <span
                key={i}
                className="p-1 border-[1px] text-sm text-secondary rounded-lg border-secondary"
              >
                {genre}
              </span>
            );
          })}
        </div>
        <h4 className="text-xl font-bold">GHC {props.event.price}</h4>

        <div className="flex justify-end w-[60%] mx-auto mt-6 ">
          <Link
            to={`/admin/event-create?id=${props.event.id}`}
            className="rounded-lg bg-primary flex text-xl font-semibold    text-white p-4"
          >
            Edit
            <PencilIcon className="h-6 w-6 text-white ml-2 " />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminEventCard;
