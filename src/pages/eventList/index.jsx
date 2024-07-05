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
  const [selectedDate, setSelectedDate] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(4);

  const getEvents = async () => {
    try {
      setLoading(true);
      const data = await fetchEvents();
      data.length ? setEvents(data) : setEvents(MyEvents);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("get events error ----->", error);
    }
  };

  const getEventsByDate = async (date) => {
    try {
      setLoading(true);
      const data = await fetchEvents(date);
      data.forEach((element) => {
        element.rating = 5;
        element.genres = ["Reggae", "Gospel", "Hip-Hop"];
        element.title = element.name;
      });
      data.length ? setEvents(data) : setEvents(MyEvents);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("get events error ----->", error);
    }
  };

  useEffect(() => {
    getEventsByDate(selectedDate);
  }, [selectedDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    getEvents();
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
          <h2 className="text-5xl text-white text-center font-semibold">
            Discover and Book tickets to the Best Events!
          </h2>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex my-20">
          <div className="w-[20%] h-auto">
            <FilterSection onDateChange={handleDateChange} />
          </div>
          <div className="w-[80%]">
            {loading ? (
              <LoadingSpinner />
            ) : (
              <>
                <div className="grid grid-cols-4 gap-10">
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
