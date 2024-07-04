import SearchBar from "../../../components/searchBar";
import { events } from "../../../dataPlaceHolder";
import AdminEventCard from "../components/adminEventCard";

const AllEvents = () => {
  return (
    <>
      <div className="py-10 bg-dark">
        <div className="container mx-auto  ">
          <h2 className="text-4xl text-white  font-semibold">Events</h2>
        </div>
      </div>

      <div className="container my-10 mx-auto  ">
        <SearchBar />
        <div className="grid grid-cols-4 gap-10">
          {events.map((e, i) => {
            return <AdminEventCard key={i} event={e} />;
          })}
        </div>
      </div>
    </>
  );
};

export default AllEvents;
