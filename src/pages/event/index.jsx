import { useParams } from "react-router-dom";

const Event = () => {
  const { id } = useParams();
  return (
    <div>
      <h4 className="font-sans">
        Event - <span className="font-extrabold">{id}</span>
      </h4>
    </div>
  );
};

export default Event;
