import Hero from "./components/hero";
import FeaturedEvents from "./components/featuredEvents";
import Trending from "./components/trending";
import { useEffect, useState } from "react";
import { fetchEvents } from "../../lib/data";
import { events as MyEvents } from "../../dataPlaceHolder";
import LoadingSpinner from "../../components/Feedbacks/loadingSpinner";

const Home = () => {
  // Define a state to store events
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  // Define a function to fetch events
  const getEvents = async (limit) => {
    try {
      setLoading(true);
      const data = await fetchEvents(limit);
      console.log("Events------>", data);
      data.length ? setEvents(data) : setEvents(MyEvents);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("get events error ----->", error);
    }
  };

  // Get events
  useEffect(() => {
    // getTopEvents();
    // getFeaturedEvents();
    // getTrendingEvents();
    getEvents(20);
  }, []);
  return (
    <div className="">
      <div className="bg-[#EBEAEC]">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <Hero events={events.slice(0, 4)} />
            <FeaturedEvents events={events} />
            <Trending events={events} />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
