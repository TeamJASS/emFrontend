import Spinner from "../../assets/images/loadingSpinner.svg";

const LoadingSpinner = (props) => {
  return (
    <div className="h-[10vh] w-[20%] mx-auto" {...props}>
      <img src={Spinner} alt="loading" className="h-full w-full" />
    </div>
  );
};

export default LoadingSpinner;
