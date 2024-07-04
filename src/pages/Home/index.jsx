import Hero from "./components/hero";
import FeaturedEvents from "./components/featuredEvents";
import Trending from "./components/trending";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <div className="bg-[#EBEAEC]">
        <FeaturedEvents />
        <Trending />
      </div>
    </div>
  );
};

export default Home;
