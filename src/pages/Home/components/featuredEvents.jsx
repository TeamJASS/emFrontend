/* eslint-disable react/prop-types */
import FeaturedEventCard from "../../../components/featuredEventCard";

const FeaturedEvents = (props) => {
  return (
    <div className="container mx-auto pb-10 pt-20">
      <h2 className="text-4xl text-center font-semibold mb-10">
        Featured Events
      </h2>

      <div className="grid grid-cols-4 gap-10">
        {props.events && props.events.length ? (
          props.events.map((e, i) => {
            return <FeaturedEventCard key={i} event={e} />;
          })
        ) : (
          <p>No event loaded</p>
        )}
      </div>
    </div>
  );
};

export default FeaturedEvents;
