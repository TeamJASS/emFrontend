import Spinner from "../../assets/images/loadingSpinner.svg";

const LoadingSpinner = () => {
  return (
    <div className="h-[20vh] w-[30%] mx-auto">
      <img src={Spinner} alt="loading" className="h-full w-full" />
    </div>
  );
};

export default LoadingSpinner;
