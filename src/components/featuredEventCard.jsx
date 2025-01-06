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
      className={`bg-cover cursor-pointer relative flex flex-col ${
        isHovered ? "justify-center" : "justify-end"
      } bg-dark text-white h-[300px] md:h-[350px] sm:h-[250px] rounded-lg overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Category Button */}
      <button className="absolute text-xs sm:text-sm md:text-base p-1 sm:p-2 left-0 top-0 bg-primary hover:bg-dark rounded-tr-lg rounded-br-lg">
        {props.event.category}
      </button>

      {/* Event Title */}
      <h2
        style={{ display: isHovered && "none" }}
        className="text-lg sm:text-xl md:text-2xl mb-4 px-2 sm:px-4"
      >
        {props.event.title}
      </h2>

      {/* Hover Content */}
      {isHovered && (
        <motion.div
          className="inset-0 flex flex-col justify-center p-4 bg-black bg-opacity-70"
          initial={{ y: "100%" }}
          animate={{ y: isHovered ? 0 : "100%" }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-lg sm:text-xl md:text-2xl mb-4">
            {props.event.name}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-center mb-4">
            {props.event.description}
          </p>
          <div className="flex justify-between items-center space-x-4">
            <span className="text-sm sm:text-base md:text-xl">
              GHC{props.event.price}
            </span>
            <button className="bg-primary text-xs sm:text-sm md:text-base text-white px-4 py-2 rounded hover:bg-primary-dark">
              Book Now
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default FeaturedEventCard;
