import { GiMeal } from "react-icons/gi";

const Featured = () => {
  return (
    <div  >
      <h2></h2>
      <div className="md:flex md:gap-6 gap-10 md:col-span-3 col-span-1 m-3 ">
        {/* card 1 */}
         <div className="md:my-0 my-5 overflow-hidden rounded border-t-4  border-l-8 border-gray-700 bg-white text-slate-500 shadow-md shadow-slate-200">
        {/*  <!--  Image --> */}
        <figure>
          <img
            src="https://picsum.photos/id/69/800/600"
            alt="card image"
            className="aspect-video w-full"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="">
            <h3 className="text-xl font-medium text-slate-700">
              Personalized Workout Plans
            </h3>
            <p className="text-sm text-slate-400">Description: Tailored workout plans designed for your fitness level and goals.</p>
              <div className="flex gap-4">
                <GiMeal />
                 <p className="text-sm block text-slate-400"> of a clipboard or a workout app interface.</p>
           </div>
          </header>
        </div>
        </div>
        {/* card 2 */}
         <div className="md:my-0 my-5 overflow-hidden rounded bg-white text-slate-500 shadow-md border-b-8 border-r-4 border-[#c3f73a] shadow-slate-200">
        {/*  <!--  Image --> */}
        <figure>
          <img
            src="https://picsum.photos/id/69/800/600"
            alt="card image"
            className="aspect-video w-full"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="">
            <h3 className="text-xl font-medium text-slate-700">
              Nutrition Guidance
            </h3>
            <p className="text-sm text-slate-400"> Description: Expert advice and meal plans to complement your workouts.</p>
            <p className="text-sm text-slate-400">Visual: Icon of a healthy meal or a nutrition chart.</p>
          </header>
        </div>
        </div>
        {/* card 3 */}
         <div className="md:my-0  border-t-8 border-r-4 border-[#fee036] my-5 overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        {/*  <!--  Image --> */}
        <figure>
          <img
            src="https://picsum.photos/id/69/800/600"
            alt="card image"
            className="aspect-video w-full"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="">
            <h3 className="text-xl font-medium text-slate-700">
             Progress Tracking
            </h3>
            <p className="text-sm text-slate-400">Description: Easily monitor your progress with detailed analytics and stats.</p>
            <p className="text-sm text-slate-400">Visual: Icon of a graph or a fitness tracker.
</p>
          </header>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;