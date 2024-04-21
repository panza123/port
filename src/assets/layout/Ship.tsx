import ship from "../../../public/image/ship.png";

export default function Ship() {
  return (
    <main className="max-w-[1440px] sm:grid lg:grid-cols-2 px-7 py-3 mt-6  gap-5 border-b-2 border-[#DADADA] ">
      <div className="max-w-[720px]">
        <img src={ship} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-[720px] py-12">
        <h1 className="sm:text-2xl md:text-3xl lg:text-4xl font-bold ">
          Minimize Your Supply Chain Headaches
        </h1>
        <p className="pt-3">
          Planning and executing logistics strategies that solve your company's
          complex challenges. We are a full-service provider of customized
          logistics solutions.
        </p>
        <p className="pt-3">
          We pride ourselves on being the go-to choice for project logistics. We
          are a full-service provider, which means that we can handle all
          aspects of your project from start to finish.
        </p>
        <button className="w-[150px] h-[50px] bg-[#E65f59] rounded-md flex items-center justify-center text-white mt-2">
<p className="font-semibold">Read More</p>
</button>

<div className="mt-10 flex gap-5">
    <div className="flex flex-col">
<span className="text-2xl text-[#12296C] ">40k+</span>
<p>Satisfied Customers</p>
    </div>
    <div className="flex flex-col">   
<span className="text-2xl text-[#12296C] ">12k+</span>
<p>Years Experience</p>
    </div>
    <div className="flex flex-col">   
<span className="text-2xl text-[#12296C] ">25</span>
<p>Trusted Partners</p>
    </div>
</div>
      </div>
    </main>
  );
}
