import { useParams } from "react-router-dom";

const EditEvent = () => {
  const { id } = useParams();
  return <div>Edit Event - {id}</div>;
};

export default EditEvent;
