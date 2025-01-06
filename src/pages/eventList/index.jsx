import { useEffect, useState } from "react";
import { fetchEvents } from "../../lib/data";
import TrendingEventCard from "../../components/trendingEventCard";
import LoadingSpinner from "../../components/Feedbacks/loadingSpinner";
import FilterSection from "./components/filterSection";
import EvenHero from "../../assets/images/discover.jpeg";
import Pagination from "../../components/pagination";
import { events as MyEvents } from "../../dataPlaceHolder";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(4);

  const getEvents = async (limit) => {
    try {
      setLoading(true);
      const data = await fetchEvents({ limit });
      data.length ? setEvents(data) : setEvents(MyEvents);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("get events error ----->", error);
    }
  };

  useEffect(() => {
    getEvents(20);
  }, []);

  // Get current events
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div
        className="py-28 bg-dark"
        style={{
          backgroundImage: `linear-gradient(rgba(40, 20, 50, 0.7), rgba(40, 20, 50, 0.7)), url(${EvenHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto">
          <h2 className="text-4xl sm:text-4xl md:text-5xl text-white text-center font-semibold">
            Discover and Book tickets to the Best Events!
          </h2>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row my-20 gap-8">
          {/* Filter Section */}
          <div className="w-full sm:w-1/2 lg:w-1/3 px-2">
            <FilterSection onDateChange={() => {}} />
          </div>

          {/* Event List */}
          <div className="w-full sm:w-3/4 ">
            {loading ? (
              <LoadingSpinner />
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentEvents.map((e, i) => (
                    <TrendingEventCard event={e} key={i} />
                  ))}
                </div>
                <Pagination
                  eventsPerPage={eventsPerPage}
                  totalEvents={events.length}
                  paginate={paginate}
                  currentPage={currentPage}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventList;
