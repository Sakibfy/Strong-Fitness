import Reviews from "../../Component/Reviews/Reviews";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import HoemForum from "./HomeForum/HoemForum";
import Newsletter from "./Newsletter/Newsletter";
import Team from "./Team/Team";


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
      <div className="my-12 w-10/12 mx-auto h-1/4">
         <Reviews></Reviews>
     </div>
      
      <div className="my-12 w-10/12 mx-auto h-1/4">
        <HoemForum></HoemForum>
      </div>
      
      <div className="my-12 w-10/12 mx-auto">
         <Team></Team>
      </div>
      <div className="my-12 w-10/12 mx-auto h-1/4">
        <Newsletter></Newsletter>
     </div>
      
    </div>
  );
};

export default Home;