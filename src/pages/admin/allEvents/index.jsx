import { useEffect, useState } from "react";
import SearchBar from "../../../components/searchBar";
import { events as MyEvents } from "../../../dataPlaceHolder";
import { deleteEvent, fetchEvents } from "../../../lib/data";
import AdminEventCard from "../components/adminEventCard";
import LoadingSpinner from "../../../components/Feedbacks/loadingSpinner";

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleEventDelete = async (id) => {
    setLoading(true);
    deleteEvent(id).then(async () => await getEvents(30));
    setLoading(false);
  };

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

  useEffect(() => {
    getEvents(30);
  }, []);

  return (
    <>
      {/* Header Section */}
      <div className="py-6 sm:py-8 md:py-10 bg-dark">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold">
            Events
          </h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="container my-6 sm:my-8 md:my-10 mx-auto">
        <SearchBar />
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-10">
            {events && events.length > 0 ? (
              events.map((e, i) => (
                <AdminEventCard
                  key={i}
                  event={e}
                  onDelete={() => handleEventDelete(e.id)}
                />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No events available.
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default AllEvents;
