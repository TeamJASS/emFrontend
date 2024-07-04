import { useState } from "react";
import FeaturedEventCard from "../../../components/featuredEventCard";
import { events } from "../../../dataPlaceHolder";

const FeaturedEvents = () => {
  // // Define a state to store events
  // const [events, setEvents] = useState([]);

  // // Define a function to fetch events
  // const getEvents = () => {
  //   const response = await axios.get('https://embackend-lnot.onrender.com/events');
  //   if (response.status === 200) {
  //     setEvents(response.data);
  //   } else {
  //     setEvents([]);
  //   }
  // }

  // // Get events
  // useEffect(() => {
  //   getEvents();
  // }, []);

  return (
    <div className="container mx-auto pb-10 pt-20">
      <h2 className="text-4xl text-center font-semibold mb-10">
        Featured Events
      </h2>
      <div className="grid grid-cols-4 gap-10">
        {events &&
          events.map((e, i) => {
            return <FeaturedEventCard key={i} event={e} />;
          })}
      </div>
    </div>
  );
};

export default FeaturedEvents;
