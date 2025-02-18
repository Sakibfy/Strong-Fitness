
import img1 from  '../../../assets/feture1.jpg'
import img2 from  '../../../assets/fea.jpg'
import img3 from '../../../assets/Run-Man.jpg'



const Featured = () => {
  return (
    <div className="md:mb-28" >
      <h2 className="md:text-5xl text-3xl font-bold text-center pb-6">Our Featured</h2>
      <div className="md:flex md:gap-10 gap-10 md:col-span-3 col-span-1 m-3 ">
        {/* card 1 */}
         <div className="md:-mb-16 my-5 hover:scale-105 duration-500 overflow-hidden rounded border-t-4  border-l-8 border-gray-700 bg-white text-slate-500 shadow-md shadow-slate-200 space-y-2">
        {/*  <!--  Image --> */}
        <figure className="w-[400px] mx-auto object-cover ">
          <img
            src={img1}
            alt="card image"
            className="aspect-video w-full rounded-lg"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="space-y-2">
            <h3 className="text-xl font-medium text-slate-700">
              Personalized Workout Plans
            </h3>
            <p className="text-sm text-slate-400">Description: Tailored workout plans designed for your fitness level and goals.</p>
              <div className="flex gap-4">
                
                 <p className="text-sm block text-slate-400"> of a clipboard or a workout app interface.</p>
           </div>
          </header>
        </div>
        </div>
        {/* card 2 */}
         <div className="md:my-0  hover:scale-105 duration-500 my-5 overflow-hidden rounded bg-white text-slate-500 shadow-md border-b-8 border-r-4 border-gray-700 shadow-slate-200">
        {/*  <!--  Image --> */}
        <figure  className="w-[400px] object-cover mx-auto">
          <img
           src={img2}
            alt="card image"
            className="aspect-video w-full"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="space-y-2">
            <h3 className="text-xl font-medium text-slate-700">
              Nutrition Guidance
            </h3>
            <p className="text-sm text-slate-400"> Description: Expert advice and meal plans to complement your workouts.</p>
            <p className="text-sm text-slate-400">Visual: Icon of a healthy meal or a nutrition chart.</p>
          </header>
        </div>
        </div>
        {/* card 3 */}
         <div className="md:-mb-16  hover:scale-105 duration-500  border-t-8 border-r-4 border-gray-700 my-5 overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        {/*  <!--  Image --> */}
        <figure  className="w-[420px] mx-auto">
          <img
            src={img3}
            alt="card image"
            className="aspect-video w-full object-cover"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6 ">
          <header className="space-y-2">
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