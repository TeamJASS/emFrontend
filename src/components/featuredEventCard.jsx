/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
const FeaturedEventCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent), url( ${`https://savefiles.org/${props.event.image}?shareable_link=286`})`,
      }}
      className={`bg-cover ${!isHovered && "p-4"}
    cursor-pointer relative flex flex-col ${
      isHovered ? "justify-center" : "justify-end"
    } bg-dark text-white h-[300px] rounded-lg  overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className="absolute text-sm p-1 left-0 top-0 bg-primary w-[40%] hover:bg-dark">
        {props.event.category}
      </button>
      <h2 style={{ display: isHovered && "none" }} className="text-2xl  mb-4">
        {props.event.title}
      </h2>
      {isHovered && (
        <motion.div
          className=" inset-0 flex flex-col justify-center p-4 bg-black bg-opacity-70"
          initial={{ y: "100%" }}
          animate={{ y: isHovered ? 0 : "100%" }}
          transition={{ duration: 0.3 }}
        >
          {isHovered ? (
            <>
              <h2 className="text-xl  mb-4 ">{props.event.name}</h2>
              <p className="text-sm text-center mb-4">
                {props.event.description}
              </p>
              <div className="flex justify-between items-center align-middle">
                <span className="text-xl">GHC{props.event.price}</span>
                <button className="bg-primary text-xl text-white px-4 py-2 rounded hover:bg-primary-dark">
                  Book Now
                </button>
              </div>
            </>
          ) : (
            ""
          )}
        </motion.div>
      )}
    </div>
  );
};

export default FeaturedEventCard;
