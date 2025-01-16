import Reviews from "../../Component/Reviews/Reviews";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";


const Home = () => {
  return (
    <div>
      <div className="md:mb-12 mx-auto ">
        <Banner></Banner>
      </div>
      <div className="my-12 w-10/12 mx-auto">
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