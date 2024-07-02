import { slideOne } from "../../../assets";
const Hero = () => {
  return (
    <>
      <div>
        <div>
          <h1 className="text-5xl text-gray-950 font-bold">
            Ghana Party in the Park <br /> 2024
          </h1>
          <p>@ Oak Hill Park</p>
          <button
            style={{ color: "#267AA4" }}
            className="bg-white  text-md font-bold p-3 px-5 my-5 border capitalize rounded-none shadow-lg hover:shadow-xl"
          >
            BOOK
          </button>
        </div>
      </div>
      <div>
        <img src={slideOne} alt="hero-bg" />
      </div>
    </>
  );
};

export default Hero;
