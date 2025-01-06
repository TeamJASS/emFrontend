/* eslint-disable react/prop-types */
import FeaturedEventCard from "../../../components/featuredEventCard";

const FeaturedEvents = (props) => {
  return (
    <div className="container mx-auto pb-6 sm:pb-8 md:pb-10 pt-10 sm:pt-16 md:pt-20 p-2">
      {/* Section Title */}
      <h2 className="text-4xl sm:text-3xl md:text-4xl text-center font-semibold mb-10 sm:mb-8 md:mb-10">
        Featured Events
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6 md:gap-10">
        {props.events && props.events.length ? (
          props.events.map((e, i) => {
            return <FeaturedEventCard key={i} event={e} />;
          })
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No events loaded
          </p>
        )}
      </div>
    </div>
  );
};

export default FeaturedEvents;
