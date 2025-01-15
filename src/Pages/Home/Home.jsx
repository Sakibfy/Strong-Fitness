import Reviews from "../../Component/Reviews/Reviews";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";


const Home = () => {
  return (
    <div>
      <div className="md:mb-12">
        <Banner></Banner>
      </div>
      <div className="my-12">
         <Featured></Featured>
     </div>
      <div className="my-12">
         <About></About>
     </div>
      <div className="my-12 ">
         <Reviews></Reviews>
     </div>
      
    </div>
  );
};

export default Home;