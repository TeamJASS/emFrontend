import { useEffect, useState } from "react";
import SearchBar from "../../../components/searchBar";
import { events as MyEvents } from "../../../dataPlaceHolder";
import { deleteEvent, fetchEvents } from "../../../lib/data";
import AdminEventCard from "../components/adminEventCard";
import LoadingSpinner from "../../../components/Feedbacks/loadingSpinner";

const AllEvents = () => {
  // Define a state to store events
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleEventDelete = async (id) => {
    setLoading(true);
    deleteEvent(id).then(async () => await getEvents(30));
    setLoading(false);
  };

  // Define a function to fetch events
  const getEvents = async (limit) => {
    try {
      setLoading(true);
      const data = await fetchEvents({ limit });
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
    getEvents(30);
  }, []);

  return (
    <>
      <div className="py-10 bg-dark">
        <div className="container mx-auto  ">
          <h2 className="text-4xl text-white  font-semibold">Events</h2>
        </div>
      </div>

      <div className="container my-10 mx-auto  ">
        <SearchBar />
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-4 gap-10">
            {events &&
              events.map((e, i) => {
                return (
                  <AdminEventCard
                    key={i}
                    event={e}
                    onDelete={() => handleEventDelete(e.id)}
                  />
                );
              })}
          </div>
        )}
      </div>
    </>
  );
};

export default AllEvents;
