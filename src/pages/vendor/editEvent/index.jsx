import { useParams } from "react-router-dom";

const VendorEditEvent = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Vendor</h1>
      <h4>Edit Event</h4>

      <h4>
        This is event - <span className="font-extrabold">{id}</span>
      </h4>
    </div>
  );
};

export default VendorEditEvent;
